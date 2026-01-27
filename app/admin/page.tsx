'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

interface Stats {
    totalCarriers: number;
    pendingCarriers: number;
    approvedCarriers: number;
    totalShippers: number;
    pendingShippers: number;
    approvedShippers: number;
    unreadNotifications: number;
}

interface Carrier {
    _id: string;
    legalName: string;
    contactEmail: string;
    contactPhone: string;
    dotNumber: string;
    mcNumber: string;
    city: string;
    state: string;
    status: string;
    createdAt: string;
}

interface Shipper {
    _id: string;
    legalName: string;
    contactEmail: string;
    contactPhone: string;
    city: string;
    state: string;
    status: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [stats, setStats] = useState<Stats | null>(null);
    const [carriers, setCarriers] = useState<Carrier[]>([]);
    const [shippers, setShippers] = useState<Shipper[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'carriers' | 'shippers'>('carriers');

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        } else if (session?.user?.role !== 'admin') {
            router.push('/login');
        }
    }, [session, status, router]);

    useEffect(() => {
        if (session?.user?.role === 'admin') {
            fetchData();
        }
    }, [session]);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/admin/data');
            const data = await response.json();
            setStats(data.stats);
            setCarriers(data.carriers);
            setShippers(data.shippers);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id: string, status: string, type: 'carrier' | 'shipper') => {
        try {
            await fetch(`/api/admin/${type}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            fetchData();
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    const handleDelete = async (id: string, type: 'carrier' | 'shipper') => {
        if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

        try {
            await fetch(`/api/admin/${type}/${id}`, { method: 'DELETE' });
            fetchData();
        } catch (error) {
            console.error('Failed to delete:', error);
        }
    };

    if (loading || status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-600">{session?.user?.email}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="text-sm text-gray-600 mb-1">Total Carriers</div>
                        <div className="text-3xl font-bold text-blue-600">{stats?.totalCarriers || 0}</div>
                        <div className="text-xs text-gray-500 mt-2">
                            {stats?.pendingCarriers || 0} pending
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="text-sm text-gray-600 mb-1">Approved Carriers</div>
                        <div className="text-3xl font-bold text-green-600">{stats?.approvedCarriers || 0}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="text-sm text-gray-600 mb-1">Total Shippers</div>
                        <div className="text-3xl font-bold text-orange-600">{stats?.totalShippers || 0}</div>
                        <div className="text-xs text-gray-500 mt-2">
                            {stats?.pendingShippers || 0} pending
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="text-sm text-gray-600 mb-1">Approved Shippers</div>
                        <div className="text-3xl font-bold text-green-600">{stats?.approvedShippers || 0}</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl shadow">
                    <div className="border-b">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('carriers')}
                                className={`px-6 py-4 font-bold ${activeTab === 'carriers'
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : 'text-gray-500'
                                    }`}
                            >
                                Carriers ({carriers.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('shippers')}
                                className={`px-6 py-4 font-bold ${activeTab === 'shippers'
                                        ? 'border-b-2 border-green-600 text-green-600'
                                        : 'text-gray-500'
                                    }`}
                            >
                                Shippers ({shippers.length})
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {activeTab === 'carriers' && (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b">
                                            <th className="pb-4 font-bold">Company</th>
                                            <th className="pb-4 font-bold">DOT/MC</th>
                                            <th className="pb-4 font-bold">Contact</th>
                                            <th className="pb-4 font-bold">Location</th>
                                            <th className="pb-4 font-bold">Status</th>
                                            <th className="pb-4 font-bold">Registered</th>
                                            <th className="pb-4 font-bold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carriers.map((carrier) => (
                                            <tr key={carrier._id} className="border-b">
                                                <td className="py-4">
                                                    <div className="font-bold">{carrier.legalName}</div>
                                                </td>
                                                <td className="py-4 text-sm">
                                                    DOT: {carrier.dotNumber}<br />
                                                    MC: {carrier.mcNumber}
                                                </td>
                                                <td className="py-4 text-sm">
                                                    {carrier.contactEmail}<br />
                                                    {carrier.contactPhone}
                                                </td>
                                                <td className="py-4 text-sm">
                                                    {carrier.city}, {carrier.state}
                                                </td>
                                                <td className="py-4">
                                                    <select
                                                        value={carrier.status}
                                                        onChange={(e) => handleStatusChange(carrier._id, e.target.value, 'carrier')}
                                                        className={`px-3 py-1 rounded-full text-xs font-bold ${carrier.status === 'approved'
                                                                ? 'bg-green-100 text-green-800'
                                                                : carrier.status === 'pending'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : 'bg-red-100 text-red-800'
                                                            }`}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="approved">Approved</option>
                                                        <option value="suspended">Suspended</option>
                                                    </select>
                                                </td>
                                                <td className="py-4 text-sm text-gray-600">
                                                    {format(new Date(carrier.createdAt), 'MMM d, yyyy')}
                                                </td>
                                                <td className="py-4">
                                                    <button
                                                        onClick={() => handleDelete(carrier._id, 'carrier')}
                                                        className="text-red-600 hover:text-red-800 font-bold"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {carriers.length === 0 && (
                                    <div className="text-center py-12 text-gray-500">No carriers registered yet.</div>
                                )}
                            </div>
                        )}

                        {activeTab === 'shippers' && (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b">
                                            <th className="pb-4 font-bold">Company</th>
                                            <th className="pb-4 font-bold">Contact</th>
                                            <th className="pb-4 font-bold">Location</th>
                                            <th className="pb-4 font-bold">Status</th>
                                            <th className="pb-4 font-bold">Registered</th>
                                            <th className="pb-4 font-bold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {shippers.map((shipper) => (
                                            <tr key={shipper._id} className="border-b">
                                                <td className="py-4">
                                                    <div className="font-bold">{shipper.legalName}</div>
                                                </td>
                                                <td className="py-4 text-sm">
                                                    {shipper.contactEmail}<br />
                                                    {shipper.contactPhone}
                                                </td>
                                                <td className="py-4 text-sm">
                                                    {shipper.city}, {shipper.state}
                                                </td>
                                                <td className="py-4">
                                                    <select
                                                        value={shipper.status}
                                                        onChange={(e) => handleStatusChange(shipper._id, e.target.value, 'shipper')}
                                                        className={`px-3 py-1 rounded-full text-xs font-bold ${shipper.status === 'approved'
                                                                ? 'bg-green-100 text-green-800'
                                                                : shipper.status === 'pending'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : 'bg-red-100 text-red-800'
                                                            }`}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="approved">Approved</option>
                                                        <option value="suspended">Suspended</option>
                                                    </select>
                                                </td>
                                                <td className="py-4 text-sm text-gray-600">
                                                    {format(new Date(shipper.createdAt), 'MMM d, yyyy')}
                                                </td>
                                                <td className="py-4">
                                                    <button
                                                        onClick={() => handleDelete(shipper._id, 'shipper')}
                                                        className="text-red-600 hover:text-red-800 font-bold"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {shippers.length === 0 && (
                                    <div className="text-center py-12 text-gray-500">No shippers registered yet.</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
