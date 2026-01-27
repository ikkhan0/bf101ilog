import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { CarrierData } from '@/types';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import { notifyAdminNewCarrier } from '@/lib/notifications';
import { analyzeProfile } from '@/lib/gemini';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            dotNumber,
            mcNumber,
            authorityDate,
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
            equipmentTypes,
            preferredLanes,
            password,
        } = body;

        // Validate required fields
        if (!dotNumber || !mcNumber || !legalName || !contactEmail || !password) {
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
        const aiAnalysis = await analyzeProfile('carrier', body);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create carrier data
        const carrierData: CarrierData = {
            dotNumber,
            mcNumber,
            authorityDate,
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
            equipmentTypes: equipmentTypes || [],
            preferredLanes: preferredLanes || [],
            documents: {},
            status: 'pending',
            onboardingCompleted: true,
            aiAnalysis: aiAnalysis || undefined,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        // Insert carrier
        const carrierResult = await db.collection('carriers').insertOne(carrierData);

        // Create user account
        const userResult = await db.collection('users').insertOne({
            email: contactEmail,
            password: hashedPassword,
            role: 'carrier',
            status: 'pending',
            carrierData: carrierResult.insertedId,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        // Update carrier with userId reference
        await db.collection('carriers').updateOne(
            { _id: carrierResult.insertedId },
            { $set: { userId: userResult.insertedId } }
        );

        // Send notification to admin
        await notifyAdminNewCarrier(carrierData, carrierResult.insertedId);

        return NextResponse.json({
            success: true,
            message: 'Carrier registration successful',
            carrierId: carrierResult.insertedId,
        });
    } catch (error) {
        console.error('Carrier onboarding error:', error);
        return NextResponse.json(
            { error: 'Failed to register carrier' },
            { status: 500 }
        );
    }
}
