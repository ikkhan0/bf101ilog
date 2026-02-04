// Test login credentials directly
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0';

async function testLogin() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('bf101ilog');

        // Test password
        const testPassword = 'Test123!';
        const testEmail = 'admin@bf101ilog.com';

        console.log('\n' + '='.repeat(80));
        console.log('TESTING LOGIN AUTHENTICATION');
        console.log('='.repeat(80));
        console.log(`\nAttempting login with:`);
        console.log(`Email: ${testEmail}`);
        console.log(`Password: ${testPassword}\n`);

        // Find user
        const user = await db.collection('users').findOne({ email: testEmail });

        if (!user) {
            console.log('❌ USER NOT FOUND in database!');
            console.log('Creating user now...\n');

            // Create user with correct password
            const hashedPassword = await bcrypt.hash(testPassword, 10);
            await db.collection('users').insertOne({
                email: testEmail,
                password: hashedPassword,
                role: 'admin',
                status: 'approved',
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            console.log('✅ Admin user created!');

            // Re-fetch
            const newUser = await db.collection('users').findOne({ email: testEmail });
            testPasswordMatch(testPassword, newUser.password);
        } else {
            console.log('✅ User found in database');
            console.log(`   Role: ${user.role}`);
            console.log(`   Status: ${user.status}`);
            console.log(`   Password Hash: ${user.password.substring(0, 30)}...`);

            testPasswordMatch(testPassword, user.password);
        }

        // Test all users
        console.log('\n' + '-'.repeat(80));
        console.log('ALL USERS IN DATABASE:');
        console.log('-'.repeat(80));

        const allUsers = await db.collection('users').find({}).toArray();
        for (const u of allUsers) {
            console.log(`\n  Email: ${u.email}`);
            console.log(`  Role: ${u.role}`);
            console.log(`  Status: ${u.status}`);

            // Test password for each user
            const isMatch = await bcrypt.compare(testPassword, u.password);
            console.log(`  Password Test123! works: ${isMatch ? '✅ YES' : '❌ NO'}`);
        }

        console.log('\n' + '='.repeat(80));
        console.log('SOLUTION:');
        console.log('='.repeat(80));
        console.log('\n1. Email: admin@bf101ilog.com');
        console.log('   Password: Test123!');
        console.log('   Login URL: http://localhost:3000/login\n');
        console.log('2. Make sure to type password EXACTLY: Test123!');
        console.log('   - Capital T');
        console.log('   - Numbers 123');
        console.log('   - Exclamation mark !\n');
        console.log('3. Clear browser cache if needed');
        console.log('='.repeat(80));

    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
    } finally {
        await client.close();
    }
}

async function testPasswordMatch(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log(`\n🔐 Password Check:`);
    console.log(`   Plain: ${plainPassword}`);
    console.log(`   Hash: ${hashedPassword.substring(0, 30)}...`);
    console.log(`   Match: ${isMatch ? '✅ YES - Password is correct!' : '❌ NO - Password does not match!'}`);
}

testLogin();
