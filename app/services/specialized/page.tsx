import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SpecializedPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navigation />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-800">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70 z-10"></div>
                    {/* Placeholder background if no specific specialized image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Specialized Transport</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Complex logistics, hazardous materials, and mission-critical freight handled with authority.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-6">Beyond Standard Freight</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Some loads require more than just a truck. They require a strategy. Our military background gives us the edge in planning and executing high-stakes transportation missions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-secondary shadow-lg">
                            <div className="text-5xl mb-6">⚗️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hazardous Materials</h3>
                            <p className="text-gray-600 mb-6">
                                We act as agents for certified hazmat carriers, ensuring full compliance with DOT/PHMSA regulations for chemical and industrial transport.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary shadow-lg">
                            <div className="text-5xl mb-6">🌡️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Temperature Controlled</h3>
                            <p className="text-gray-600 mb-6">
                                Reefer units for food, pharmaceuticals, and sensitive chemicals requiring consistent temperature monitoring and logging.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-accent shadow-lg">
                            <div className="text-5xl mb-6">👑</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">High Value & DoD</h3>
                            <p className="text-gray-600 mb-6">
                                Secure transport for high-value assets and government-related freight, leveraging screened drivers and satellite tracking.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/#quote" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl text-lg">
                            Request Specialized Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
