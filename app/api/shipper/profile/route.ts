import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'shipper') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const db = await getDatabase();

        // Find user
        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user || !user.shipperData) {
            return NextResponse.json({ error: 'Shipper data not found' }, { status: 404 });
        }

        // Get shipper data
        const shipper = await db.collection('shippers').findOne({ _id: user.shipperData });

        return NextResponse.json({ shipper });
    } catch (error) {
        console.error('Shipper profile fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'shipper') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const updates = await request.json();
        const db = await getDatabase();

        // Find user
        const user = await db.collection('users').findOne({ email: session.user.email });
        if (!user || !user.shipperData) {
            return NextResponse.json({ error: 'Shipper data not found' }, { status: 404 });
        }

        // Update shipper data
        await db.collection('shippers').updateOne(
            { _id: user.shipperData },
            {
                $set: {
                    ...updates,
                    updatedAt: new Date()
                }
            }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Shipper profile update error:', error);
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
}
