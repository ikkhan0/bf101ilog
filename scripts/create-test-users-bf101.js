// Create and update users with bf101ilog.com domain
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0';

async function updateUsers() {
    const client = new MongoClient(uri);

    try {
        console.log('🔄 Connecting to MongoDB...');
        await client.connect();
        console.log('✅ Connected to MongoDB successfully!\n');

        const db = client.db('bf101ilog');

        // Common password for all test accounts
        const testPassword = 'Test123!';
        const hashedPassword = await bcrypt.hash(testPassword, 10);

        // Delete old users with wrong domains
        await db.collection('users').deleteMany({
            email: { $in: ['admin@ilogbf101.com', 'carrier@testbf101.com', 'shipper@testbf101.com'] }
        });
        console.log('🗑️  Removed old user accounts with incorrect domains\n');

        // ========== 1. CREATE ADMIN USER ==========
        console.log('👤 Creating Admin User...');
        const adminEmail = 'admin@bf101ilog.com';

        await db.collection('users').deleteOne({ email: adminEmail });
        await db.collection('users').insertOne({
            email: adminEmail,
            password: hashedPassword,
            role: 'admin',
            status: 'approved',
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        console.log('✅ Admin user created: ' + adminEmail);

        // ========== 2. CREATE TEST CARRIER ==========
        console.log('\n🚚 Creating Test Carrier...');
        const carrierEmail = 'carrier@bf101ilog.com';

        // Remove old carrier data
        await db.collection('carriers').deleteMany({});
        await db.collection('users').deleteOne({ role: 'carrier' });

        const carrierData = {
            dotNumber: '3456789',
            mcNumber: 'MC789012',
            authorityDate: '2023-01-15',
            legalName: 'BF101 Test Carrier LLC',
            dbaName: 'BF101 Transport',
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
        const carrierUserResult = await db.collection('users').insertOne({
            email: carrierEmail,
            password: hashedPassword,
            role: 'carrier',
            status: 'approved',
            carrierData: carrierResult.insertedId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await db.collection('carriers').updateOne(
            { _id: carrierResult.insertedId },
            { $set: { userId: carrierUserResult.insertedId } }
        );
        console.log('✅ Test carrier created: ' + carrierEmail);

        // ========== 3. CREATE TEST SHIPPER ==========
        console.log('\n📦 Creating Test Shipper...');
        const shipperEmail = 'shipper@bf101ilog.com';

        // Remove old shipper data
        await db.collection('shippers').deleteMany({});
        await db.collection('users').deleteOne({ role: 'shipper' });

        const shipperData = {
            legalName: 'BF101 Test Shipper Corp',
            dbaName: 'BF101 Logistics',
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
        const shipperUserResult = await db.collection('users').insertOne({
            email: shipperEmail,
            password: hashedPassword,
            role: 'shipper',
            status: 'approved',
            shipperData: shipperResult.insertedId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await db.collection('shippers').updateOne(
            { _id: shipperResult.insertedId },
            { $set: { userId: shipperUserResult.insertedId } }
        );
        console.log('✅ Test shipper created: ' + shipperEmail);

        // ========== DISPLAY CREDENTIALS ==========
        console.log('\n' + '='.repeat(80));
        console.log('🎉 ALL USERS UPDATED WITH bf101ilog.com DOMAIN!');
        console.log('='.repeat(80));
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

        console.log('='.repeat(80));
        console.log('✅ All users now use @bf101ilog.com domain!');
        console.log('🎖️  BullyFashion101 LLC - Ready to login!');
        console.log('='.repeat(80));

    } catch (error) {
        console.error('\n❌ ERROR:', error.message);
        console.error('\nFull error details:', error);
    } finally {
        await client.close();
        console.log('\n🔒 Database connection closed.');
    }
}

updateUsers();
