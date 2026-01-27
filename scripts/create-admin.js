// Run this script to create an admin user
// Usage: node scripts/create-admin.js

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://imran:Imran963@cluster0.b7wlfvb.mongodb.net/lfllogistics?retryWrites=true&w=majority';

async function createAdmin() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('lfllogistics');

        // Check if admin exists
        const existingAdmin = await db.collection('users').findOne({ email: 'admin@lfllogistics.com' });

        if (existingAdmin) {
            console.log('Admin user already exists!');
            console.log('Email: admin@lfllogistics.com');
            return;
        }

        // Create admin user
        const hashedPassword = await bcrypt.hash('admin123', 10);

        await db.collection('users').insertOne({
            email: 'admin@lfllogistics.com',
            password: hashedPassword,
            role: 'admin',
            status: 'approved',
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        console.log('✅ Admin user created successfully!');
        console.log('');
        console.log('Login credentials:');
        console.log('Email: admin@lfllogistics.com');
        console.log('Password: admin123');
        console.log('');
        console.log('⚠️  Please change the password after first login!');

    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        await client.close();
    }
}

createAdmin();
