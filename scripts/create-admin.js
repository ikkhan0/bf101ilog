// Run this script to create an admin user for BullyFashion101 LLC
// Usage: node scripts/create-admin.js

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://imran:Imran321@cluster0.rpbmt5u.mongodb.net/bf101ilog?retryWrites=true&w=majority&appName=Cluster0';

async function createAdmin() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('bf101ilog');

        // Check if admin exists
        const existingAdmin = await db.collection('users').findOne({ email: 'admin@bf101ilog.com' });

        if (existingAdmin) {
            console.log('✅ Admin user already exists!');
            console.log('Email: admin@bf101ilog.com');
            return;
        }

        // Create admin user for BullyFashion101 LLC
        const hashedPassword = await bcrypt.hash('admin123', 10);

        await db.collection('users').insertOne({
            email: 'admin@bf101ilog.com',
            password: hashedPassword,
            role: 'admin',
            status: 'approved',
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        console.log('✅ Admin user created successfully!');
        console.log('');
        console.log('🎖️  BullyFashion101 LLC - Admin Login Credentials:');
        console.log('Email: admin@bf101ilog.com');
        console.log('Password: admin123');
        console.log('');
        console.log('⚠️  IMPORTANT: Please change the password after first login!');
        console.log('');
        console.log('Access admin dashboard at: /admin');

    } catch (error) {
        console.error('❌ Error creating admin:', error);
    } finally {
        await client.close();
    }
}

createAdmin();
