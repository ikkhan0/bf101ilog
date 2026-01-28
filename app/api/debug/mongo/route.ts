import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Diagnostic endpoint to test MongoDB connection
export async function GET(request: NextRequest) {
    const startTime = Date.now();

    try {
        // Get URI from environment
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            return NextResponse.json({
                error: 'MONGODB_URI not found',
                envVars: {
                    MONGODB_URI: 'NOT SET',
                    NODE_ENV: process.env.NODE_ENV,
                    VERCEL: process.env.VERCEL,
                    VERCEL_ENV: process.env.VERCEL_ENV,
                }
            }, { status: 500 });
        }

        // Mask password in URI for security
        const maskedUri = uri.replace(/:([^@]+)@/, ':****@');

        console.log('🔍 Testing MongoDB connection...');
        console.log('📍 URI (masked):', maskedUri);

        // Try to connect
        const client = new MongoClient(uri, {
            serverSelectionTimeoutMS: 10000, // 10 second timeout
        });

        await client.connect();
        console.log('✅ MongoDB connection successful');

        // Test database access
        const db = client.db('lfllogistics');
        const collections = await db.listCollections().toArray();

        await client.close();

        const duration = Date.now() - startTime;

        return NextResponse.json({
            success: true,
            message: 'MongoDB connection successful',
            duration: `${duration}ms`,
            database: 'lfllogistics',
            collections: collections.map(c => c.name),
            environment: {
                NODE_ENV: process.env.NODE_ENV,
                VERCEL: process.env.VERCEL,
                VERCEL_ENV: process.env.VERCEL_ENV,
            },
            uri: maskedUri
        });

    } catch (error) {
        const duration = Date.now() - startTime;

        console.error('❌ MongoDB connection failed:', error);

        return NextResponse.json({
            error: 'Connection failed',
            message: (error as Error).message,
            duration: `${duration}ms`,
            errorName: (error as Error).name,
            stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined,
            environment: {
                NODE_ENV: process.env.NODE_ENV,
                VERCEL: process.env.VERCEL || 'false',
                VERCEL_ENV: process.env.VERCEL_ENV || 'unknown',
                MONGODB_URI: process.env.MONGODB_URI ? '✅ SET' : '❌ NOT SET',
            }
        }, { status: 500 });
    }
}
