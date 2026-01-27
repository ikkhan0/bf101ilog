import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'carrier') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const db = await getDatabase();

        // Find user
        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user || !user.carrierData) {
            return NextResponse.json({ error: 'Carrier data not found' }, { status: 404 });
        }

        // Get carrier data
        const carrier = await db.collection('carriers').findOne({ _id: user.carrierData });

        return NextResponse.json({ carrier });
    } catch (error) {
        console.error('Carrier profile fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'carrier') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const updates = await request.json();
        const db = await getDatabase();

        // Find user
        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user || !user.carrierData) {
            return NextResponse.json({ error: 'Carrier data not found' }, { status: 404 });
        }

        // Update carrier data
        await db.collection('carriers').updateOne(
            { _id: user.carrierData },
            {
                $set: {
                    ...updates,
                    updatedAt: new Date()
                }
            }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Carrier profile update error:', error);
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
}
