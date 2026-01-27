import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function GET(request: NextRequest) {
    try {
        const db = await getDatabase();

        // Check if admin already exists
        const existingAdmin = await db.collection('users').findOne({ email: 'admin@lfllogistics.com' });

        if (existingAdmin) {
            return NextResponse.json({
                success: false,
                message: 'Admin user already exists'
            });
        }

        // Create admin user
        const hashedPassword = await bcrypt.hash('admin123', 10);

        await db.collection('users').insertOne({
            email: 'admin@lfllogistics.com',
            password: hashedPassword,
            role: 'admin',
            status: 'approved',
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            message: 'Admin user created successfully!',
            credentials: {
                email: 'admin@lfllogistics.com',
                password: 'admin123'
            }
        });

    } catch (error: any) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
