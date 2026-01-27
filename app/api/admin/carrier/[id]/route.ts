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

        const result = await db.collection('carriers').updateOne(
            { _id: new ObjectId(id) },
            { $set: { status, updatedAt: new Date() } }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'Carrier not found' }, { status: 404 });
        }

        // Also update user status
        const carrier = await db.collection('carriers').findOne({ _id: new ObjectId(id) });
        if (carrier?.userId) {
            await db.collection('users').updateOne(
                { _id: new ObjectId(carrier.userId) },
                { $set: { status, updatedAt: new Date() } }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Carrier update error:', error);
        return NextResponse.json({ error: 'Failed to update carrier' }, { status: 500 });
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
        const carrier = await db.collection('carriers').findOne({ _id: new ObjectId(id) });

        if (!carrier) {
            return NextResponse.json({ error: 'Carrier not found' }, { status: 404 });
        }

        // Delete carrier
        await db.collection('carriers').deleteOne({ _id: new ObjectId(id) });

        // Delete associated user
        if (carrier.userId) {
            await db.collection('users').deleteOne({ _id: new ObjectId(carrier.userId) });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Carrier delete error:', error);
        return NextResponse.json({ error: 'Failed to delete carrier' }, { status: 500 });
    }
}
