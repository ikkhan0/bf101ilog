import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { ShipperData } from '@/types';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { notifyAdminNewShipper } from '@/lib/notifications';
import { analyzeProfile } from '@/lib/gemini';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            legalName,
            dbaName,
            ein,
            address,
            city,
            state,
            zip,
            contactName,
            contactEmail,
            contactPhone,
            commodityType,
            monthlyVolume,
            averageValue,
            preferredEquipment,
            password,
        } = body;

        // Validate required fields
        if (!legalName || !contactEmail || !password) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const db = await getDatabase();

        // Check if email already exists
        const existingUser = await db.collection('users').findOne({ email: contactEmail });
        if (existingUser) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            );
        }

        // Get AI analysis if available
        const aiAnalysis = await analyzeProfile('shipper', body);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create shipper data
        const shipperData: ShipperData = {
            legalName,
            dbaName,
            ein,
            address,
            city,
            state,
            zip,
            contactName,
            contactEmail,
            contactPhone,
            commodityType: commodityType || '',
            monthlyVolume: monthlyVolume || '',
            averageValue,
            preferredEquipment: preferredEquipment || [],
            documents: {},
            status: 'pending',
            onboardingCompleted: true,
            aiAnalysis: aiAnalysis || undefined,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Insert shipper
        const shipperResult = await db.collection('shippers').insertOne(shipperData);

        // Create user account
        const userResult = await db.collection('users').insertOne({
            email: contactEmail,
            password: hashedPassword,
            role: 'shipper',
            status: 'pending',
            shipperData: shipperResult.insertedId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        // Update shipper with userId reference
        await db.collection('shippers').updateOne(
            { _id: shipperResult.insertedId },
            { $set: { userId: userResult.insertedId } }
        );

        // Send notification to admin
        await notifyAdminNewShipper(shipperData, shipperResult.insertedId);

        return NextResponse.json({
            success: true,
            message: 'Shipper registration successful',
            shipperId: shipperResult.insertedId,
        });
    } catch (error) {
        console.error('Shipper onboarding error:', error);
        return NextResponse.json(
            { error: 'Failed to register shipper' },
            { status: 500 }
        );
    }
}
