'use client';

import { useState } from 'react';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pickup: '',
        delivery: '',
        freightType: 'Flatbed',
        date: '',
        details: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setMessage('Your quote request has been sent! We will contact you shortly.');
                setFormData({
                    name: '',
                    email: '',
                    pickup: '',
                    delivery: '',
                    freightType: 'Flatbed',
                    date: '',
                    details: ''
                });
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to send request. Please check your connection.');
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-secondary p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Get a Free Freight Quote</h2>
                <p className="text-white/90">Fill out the form below and we'll get back to you within minutes.</p>
            </div>
            <div className="p-8 md:p-12">
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h3>
                        <p className="text-gray-600 mb-6">{message}</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all"
                        >
                            Send Another Request
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="john@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Location (City, Zip)</label>
                                <input
                                    type="text"
                                    name="pickup"
                                    value={formData.pickup}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Dallas, TX 75201"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Location (City, Zip)</label>
                                <input
                                    type="text"
                                    name="delivery"
                                    value={formData.delivery}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Chicago, IL 60601"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Freight Type</label>
                                <select
                                    name="freightType"
                                    value={formData.freightType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                >
                                    <option>Flatbed</option>
                                    <option>Box Truck</option>
                                    <option>Van</option>
                                    <option>Other / Specialized</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Freight Details (Weight / Dimensions)</label>
                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-24"
                                placeholder="e.g. 40,000 lbs, 48ft flatbed needed..."
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-bold text-center">
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70"
                        >
                            {status === 'submitting' ? 'Sending Request...' : 'Submit Quote Request'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
