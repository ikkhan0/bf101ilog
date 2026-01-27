import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const { status } = await request.json();
        const db = await getDatabase();

        const result = await db.collection('shippers').updateOne(
            { _id: new ObjectId(id) },
            { $set: { status, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'Shipper not found' }, { status: 404 });
        }

        // Also update user status
        const shipper = await db.collection('shippers').findOne({ _id: new ObjectId(id) });
        if (shipper?.userId) {
            await db.collection('users').updateOne(
                { _id: new ObjectId(shipper.userId) },
                { $set: { status, updatedAt: new Date() } }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Shipper update error:', error);
        return NextResponse.json({ error: 'Failed to update shipper' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { id } = await params;
        const db = await getDatabase();
        const shipper = await db.collection('shippers').findOne({ _id: new ObjectId(id) });

        if (!shipper) {
            return NextResponse.json({ error: 'Shipper not found' }, { status: 404 });
        }

        // Delete shipper
        await db.collection('shippers').deleteOne({ _id: new ObjectId(id) });

        // Delete associated user
        if (shipper.userId) {
            await db.collection('users').deleteOne({ _id: new ObjectId(shipper.userId) });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Shipper delete error:', error);
        return NextResponse.json({ error: 'Failed to delete shipper' }, { status: 500 });
    }
}
