// Verify test users exist in database
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0';

async function verifyUsers() {
    const client = new MongoClient(uri);

    try {
        console.log('Connecting to MongoDB...');
        await client.connect();
        console.log('Connected successfully!\n');

        const db = client.db('bf101ilog');

        // Check all users
        const users = await db.collection('users').find({}).toArray();

        console.log('='.repeat(80));
        console.log('DATABASE VERIFICATION - bf101ilog');
        console.log('='.repeat(80));
        console.log(`\nTotal users found: ${users.length}\n`);

        if (users.length === 0) {
            console.log('WARNING: No users found in database!');
            console.log('Running user creation now...\n');

            const bcrypt = require('bcryptjs');
            const testPassword = 'Test123!';
            const hashedPassword = await bcrypt.hash(testPassword, 10);

            // Create admin
            await db.collection('users').insertOne({
                email: 'admin@ilogbf101.com',
                password: hashedPassword,
                role: 'admin',
                status: 'approved',
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            console.log('Created: admin@ilogbf101.com');

            // Create carrier
            const carrierData = {
                dotNumber: '3456789',
                mcNumber: 'MC789012',
                legalName: 'Test Carrier Logistics LLC',
                contactEmail: 'carrier@testbf101.com',
                status: 'approved',
                onboardingCompleted: true,
                createdAt: new Date(),
            };
            const carrierResult = await db.collection('carriers').insertOne(carrierData);
            const carrierUserResult = await db.collection('users').insertOne({
                email: 'carrier@testbf101.com',
                password: hashedPassword,
                role: 'carrier',
                status: 'approved',
                carrierData: carrierResult.insertedId,
                createdAt: new Date(),
            });
            await db.collection('carriers').updateOne(
                { _id: carrierResult.insertedId },
                { $set: { userId: carrierUserResult.insertedId } }
            );
            console.log('Created: carrier@testbf101.com');

            // Create shipper
            const shipperData = {
                legalName: 'Test Shipper Corporation',
                contactEmail: 'shipper@testbf101.com',
                status: 'approved',
                onboardingCompleted: true,
                createdAt: new Date(),
            };
            const shipperResult = await db.collection('shippers').insertOne(shipperData);
            const shipperUserResult = await db.collection('users').insertOne({
                email: 'shipper@testbf101.com',
                password: hashedPassword,
                role: 'shipper',
                status: 'approved',
                shipperData: shipperResult.insertedId,
                createdAt: new Date(),
            });
            await db.collection('shippers').updateOne(
                { _id: shipperResult.insertedId },
                { $set: { userId: shipperUserResult.insertedId } }
            );
            console.log('Created: shipper@testbf101.com\n');

            // Re-fetch users
            const newUsers = await db.collection('users').find({}).toArray();
            users.length = 0;
            users.push(...newUsers);
        }

        console.log('USER ACCOUNTS:');
        console.log('-'.repeat(80));

        for (const user of users) {
            console.log(`\nEmail: ${user.email}`);
            console.log(`Role: ${user.role}`);
            console.log(`Status: ${user.status}`);
            console.log(`Password Hash: ${user.password.substring(0, 20)}...`);
            console.log(`Created: ${user.createdAt}`);
        }

        console.log('\n' + '='.repeat(80));
        console.log('TEST LOGIN CREDENTIALS');
        console.log('='.repeat(80));
        console.log('\nPassword for ALL test accounts: Test123!');
        console.log('\n1. Admin Login:');
        console.log('   Email: admin@ilogbf101.com');
        console.log('   Password: Test123!');
        console.log('   URL: https://www.bf101ilog.com/login');

        console.log('\n2. Carrier Login:');
        console.log('   Email: carrier@testbf101.com');
        console.log('   Password: Test123!');
        console.log('   URL: https://www.bf101ilog.com/login');

        console.log('\n3. Shipper Login:');
        console.log('   Email: shipper@testbf101.com');
        console.log('   Password: Test123!');
        console.log('   URL: https://www.bf101ilog.com/login');

        console.log('\n' + '='.repeat(80));
        console.log('Database is READY and WORKING!');
        console.log('='.repeat(80));

    } catch (error) {
        console.error('\nERROR:', error.message);
        console.error('\nFull error:', error);
    } finally {
        await client.close();
        console.log('\nDatabase connection closed.');
    }
}

verifyUsers();
