// Create test users for BF101ilog - Admin, Shipper, and Carrier
// Usage: node scripts/create-test-users-bf101.js

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0';

async function createTestUsers() {
    const client = new MongoClient(uri);

    try {
        console.log('🔄 Connecting to MongoDB...');
        await client.connect();
        console.log('✅ Connected to MongoDB successfully!');

        const db = client.db('bf101ilog');

        // Test database connection
        const collections = await db.listCollections().toArray();
        console.log(`✅ Database "bf101ilog" is accessible. Collections: ${collections.map(c => c.name).join(', ') || 'None yet'}`);

        // Common password for all test accounts
        const testPassword = 'Test123!';
        const hashedPassword = await bcrypt.hash(testPassword, 10);

        console.log('\n📝 Creating test users...\n');

        // ========== 1. CREATE ADMIN USER ==========
        console.log('👤 Creating Admin User...');
        const adminEmail = 'admin@ilogbf101.com';

        const existingAdmin = await db.collection('users').findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log('⚠️  Admin user already exists');
        } else {
            await db.collection('users').insertOne({
                email: adminEmail,
                password: hashedPassword,
                role: 'admin',
                status: 'approved',
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            console.log('✅ Admin user created successfully!');
        }

        // ========== 2. CREATE TEST CARRIER ==========
        console.log('\n🚚 Creating Test Carrier...');
        const carrierEmail = 'carrier@testbf101.com';

        const existingCarrierUser = await db.collection('users').findOne({ email: carrierEmail });
        if (existingCarrierUser) {
            console.log('⚠️  Test carrier already exists');
        } else {
            // Create carrier profile
            const carrierData = {
                dotNumber: '3456789',
                mcNumber: 'MC789012',
                authorityDate: '2023-01-15',
                legalName: 'Test Carrier Logistics LLC',
                dbaName: 'Test Carrier Transport',
                ein: '98-7654321',
                address: '789 Carrier Drive',
                city: 'Dallas',
                state: 'TX',
                zip: '75201',
                contactName: 'Mike Carrier',
                contactEmail: carrierEmail,
                contactPhone: '(214) 555-0123',
                equipmentTypes: ['Dry Van', 'Refrigerated', 'Flatbed'],
                preferredLanes: ['Southwest', 'Southeast', 'Midwest'],
                documents: {},
                status: 'approved',
                onboardingCompleted: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const carrierResult = await db.collection('carriers').insertOne(carrierData);

            // Create user account
            const userResult = await db.collection('users').insertOne({
                email: carrierEmail,
                password: hashedPassword,
                role: 'carrier',
                status: 'approved',
                carrierData: carrierResult.insertedId,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            // Link carrier to user
            await db.collection('carriers').updateOne(
                { _id: carrierResult.insertedId },
                { $set: { userId: userResult.insertedId } }
            );

            console.log('✅ Test carrier created successfully!');
        }

        // ========== 3. CREATE TEST SHIPPER ==========
        console.log('\n📦 Creating Test Shipper...');
        const shipperEmail = 'shipper@testbf101.com';

        const existingShipperUser = await db.collection('users').findOne({ email: shipperEmail });
        if (existingShipperUser) {
            console.log('⚠️  Test shipper already exists');
        } else {
            // Create shipper profile
            const shipperData = {
                legalName: 'Test Shipper Corporation',
                dbaName: 'Test Shipper Logistics',
                ein: '12-3456789',
                address: '456 Shipper Boulevard',
                city: 'Houston',
                state: 'TX',
                zip: '77002',
                contactName: 'Sarah Shipper',
                contactEmail: shipperEmail,
                contactPhone: '(713) 555-0456',
                commodityType: 'Industrial Equipment',
                monthlyVolume: '100-200 loads',
                averageValue: '$75,000',
                preferredEquipment: ['Dry Van', 'Flatbed', 'Specialized'],
                documents: {},
                status: 'approved',
                onboardingCompleted: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            const shipperResult = await db.collection('shippers').insertOne(shipperData);

            // Create user account
            const userResult = await db.collection('users').insertOne({
                email: shipperEmail,
                password: hashedPassword,
                role: 'shipper',
                status: 'approved',
                shipperData: shipperResult.insertedId,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            // Link shipper to user
            await db.collection('shippers').updateOne(
                { _id: shipperResult.insertedId },
                { $set: { userId: userResult.insertedId } }
            );

            console.log('✅ Test shipper created successfully!');
        }

        // ========== DISPLAY CREDENTIALS ==========
        console.log('\n' + '='.repeat(70));
        console.log('🎉 TEST USERS CREATED SUCCESSFULLY!');
        console.log('='.repeat(70));
        console.log('\n📋 LOGIN CREDENTIALS:\n');

        console.log('1️⃣  ADMIN USER:');
        console.log(`   Email: ${adminEmail}`);
        console.log(`   Password: ${testPassword}`);
        console.log('   URL: https://www.bf101ilog.com/login');
        console.log('   Dashboard: https://www.bf101ilog.com/admin\n');

        console.log('2️⃣  TEST CARRIER:');
        console.log(`   Email: ${carrierEmail}`);
        console.log(`   Password: ${testPassword}`);
        console.log('   URL: https://www.bf101ilog.com/login');
        console.log('   Dashboard: https://www.bf101ilog.com/carrier-dashboard\n');

        console.log('3️⃣  TEST SHIPPER:');
        console.log(`   Email: ${shipperEmail}`);
        console.log(`   Password: ${testPassword}`);
        console.log('   URL: https://www.bf101ilog.com/login');
        console.log('   Dashboard: https://www.bf101ilog.com/shipper-dashboard\n');

        console.log('='.repeat(70));
        console.log('✅ Database is connected and working properly!');
        console.log('🎖️  BullyFashion101 LLC - All systems ready!');
        console.log('='.repeat(70));

    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        console.error('\nFull error details:', error);
    } finally {
        await client.close();
        console.log('\n🔒 Database connection closed.');
    }
}

createTestUsers();
