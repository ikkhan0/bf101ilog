import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function FlatbedPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navigation />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <Image
                        src="/hero-banner.jpg"
                        alt="Flatbed Freight"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Flatbed Freight</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Heavy haul, oversized, and open-deck transport solutions commanded with military precision.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-primary mb-6">Mastering the Heavy Lift</h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                When your cargo doesn't fit in a standard trailer, BullyFashion101 LLC provides the specialized flatbed solutions you need. We understand the complexities of moving heavy equipment, construction materials, and industrial machinery.
                            </p>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                Our network of vetted flatbed carriers is equipped to handle standard flats, step decks, double drops, and RGNs. We manage the permitting, routing, and securing of your load so you can focus on your mission.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Industrial Machinery</strong>
                                        <span className="text-gray-600">CNC machines, presses, and manufacturing equipment via rigging experts.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Construction Materials</strong>
                                        <span className="text-gray-600">Lumber, steel beams, pipe, and palletized commodities delivered to job sites.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Oversized Loads</strong>
                                        <span className="text-gray-600">Wide load logistical planning, escort services, and route surveys.</span>
                                    </div>
                                </li>
                            </ul>

                            <Link href="/#quote" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg inline-block">
                                Request Flatbed Quote
                            </Link>
                        </div>

                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <span className="text-6xl">🚛</span> {/* Placeholder until real image is confirmed */}
                            </div>
                            {/* Use image if available, else placeholder */}
                            <Image
                                src="/loading-dock.jpg"
                                alt="Loading Flatbed"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
