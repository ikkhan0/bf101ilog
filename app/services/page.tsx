import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-bg-light to-white">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-4">
                        🎖️ VETERAN OWNED
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Freight Brokerage Services</h1>
                    <p className="text-2xl text-text-secondary max-w-3xl mx-auto mb-4">
                        Dry Van & Flatbed | General Freight | Hazardous Materials
                    </p>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        We provide freight brokerage services to shippers transporting general commodities and to motor carriers
                        operating within the United States. Services are performed in accordance with applicable federal and state laws and regulations.
                    </p>
                </div>

                {/* Warehouse Image Section */}
                <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/warehouse.jpg"
                        alt="Modern warehouse operations with organized logistics"
                        width={1400}
                        height={600}
                        className="w-full h-[400px] object-cover"
                    />
                </div>

                {/* Core Services */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-primary">
                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">🚛</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">Dry Van Freight Brokerage</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Full truckload dedicated capacity for time-sensitive freight with military-grade precision and reliability.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-secondary">
                        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">🏗️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">Flatbed Freight Brokerage</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Specialized flatbed services for oversized loads, construction materials, and heavy equipment transport.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent">
                        <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">📦</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">General Commodity Transportation</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Comprehensive coordination for all general freight across the contiguous United States.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-secondary-dark">
                        <div className="w-20 h-20 bg-secondary-dark rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">⚡</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">Spot Freight & Contract Lanes</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Flexible spot market solutions and long-term contract lane support for consistent shipping needs.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-primary">
                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">🗺️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">Regional & Long-Haul Support</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            End-to-end coverage for both regional short-haul and cross-country long-haul freight movements.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-accent">
                        <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                            <span className="text-4xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4 text-primary">Solution Consulting</h3>
                        <p className="text-gray-600 text-center leading-relaxed">
                            Lane review, capacity planning, and execution support with strategic logistics expertise.
                        </p>
                    </div>
                </div>

                {/* Specialized Services */}
                <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-2xl shadow-2xl mb-16">
                    <h2 className="text-4xl font-bold text-center mb-10">Specialized Capabilities</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚗️</div>
                            <h3 className="text-2xl font-bold mb-3">Hazardous Materials</h3>
                            <p className="text-gray-100">Specialized handling with strict regulatory compliance and expert hazmat credentials</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🥶</div>
                            <h3 className="text-2xl font-bold mb-3">Food & Perishables</h3>
                            <p className="text-gray-100">Temperature-controlled logistics with cold chain expertise for distributors</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏭</div>
                            <h3 className="text-2xl font-bold mb-3">Industrial Manufacturing</h3>
                            <p className="text-gray-100">Heavy haul and specialized equipment transport for manufacturing sectors</p>
                        </div>
                    </div>
                </div>

                {/* Logistics Operations Gallery */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <Image
                            src="/brokerage-ops.jpg"
                            alt="Modern freight brokerage operations center"
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg text-primary">Brokerage Operations</h4>
                            <p className="text-sm text-gray-600 mt-2">24/7 logistics coordination and tracking</p>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <Image
                            src="/loading-dock.jpg"
                            alt="Professional loading dock operations"
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg text-primary">Loading Operations</h4>
                            <p className="text-sm text-gray-600 mt-2">Efficient freight handling and safety protocols</p>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <Image
                            src="/dry-van.jpg"
                            alt="Professional dry van trailer on highway"
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 bg-white">
                            <h4 className="font-bold text-lg text-primary">Dry Van Services</h4>
                            <p className="text-sm text-gray-600 mt-2">Full truckload capacity with precision delivery</p>
                        </div>
                    </div>
                </div>

                {/* Coverage Area */}
                <div className="bg-white p-10 rounded-2xl shadow-lg mb-16 border-l-8 border-secondary">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Coverage Area</h2>
                    <p className="text-xl text-gray-700 mb-4">
                        <strong>End-to-end coverage</strong> across the <strong>contiguous United States</strong> (excluding Alaska and Hawaii).
                    </p>
                    <p className="text-lg text-text-secondary">
                        Service outside this area is subject to availability and special arrangements.
                    </p>
                </div>

                {/* Legal Notice */}
                <div className="bg-bg-light p-8 rounded-xl border-2 border-border-light mb-16">
                    <p className="text-sm text-gray-600 text-center italic">
                        <strong>Notice:</strong> All services are subject to availability, operational constraints, and mutually agreed terms.
                        Services are performed in accordance with applicable federal and state laws and regulations.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-secondary to-primary text-white p-12 rounded-2xl text-center shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact us to discuss your specific freight requirements. We provide tailored solutions for complex logistics challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-bg-light transition-all shadow-xl transform hover:scale-105">
                            Get in Touch
                        </Link>
                        <Link href="/about" className="inline-block px-10 py-4 bg-transparent text-white rounded-full font-bold border-2 border-white hover:bg-white/10 transition-all shadow-xl transform hover:scale-105">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
