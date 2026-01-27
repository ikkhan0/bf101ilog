import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || session.user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const db = await getDatabase();

        const [carriers, shippers, notifications] = await Promise.all([
            db.collection('carriers').find({}).sort({ createdAt: -1 }).toArray(),
            db.collection('shippers').find({}).sort({ createdAt: -1 }).toArray(),
            db.collection('notifications').find({ isRead: false }).sort({ createdAt: -1 }).limit(10).toArray(),
        ]);

        const stats = {
            totalCarriers: carriers.length,
            pendingCarriers: carriers.filter(c => c.status === 'pending').length,
            approvedCarriers: carriers.filter(c => c.status === 'approved').length,
            totalShippers: shippers.length,
            pendingShippers: shippers.filter(s => s.status === 'pending').length,
            approvedShippers: shippers.filter(s => s.status === 'approved').length,
            unreadNotifications: notifications.length,
        };

        return NextResponse.json({ stats, carriers, shippers, notifications });
    } catch (error) {
        console.error('Admin data fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
