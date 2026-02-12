import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function BoxTruckPage() {
    return (
        <div className="min-h-screen font-sans">
            <Navigation />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-blue-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    <Image
                        src="/warehouse.jpg"
                        alt="Box Truck Freight"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Box Truck Freight</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Agile, secure, and expedited transport for LTL and time-sensitive deliveries.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <span className="text-6xl">📦</span>
                            </div>
                            <Image
                                src="/dry-van.jpg"
                                alt="Box Truck Loading"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl font-bold text-primary mb-6">Speed & Versatility</h2>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                Box trucks are the backbone of last-mile and expedited regional logistics. Perfect for Less-than-Truckload (LTL) shipments, retail distribution, and deliveries to locations without dock access.
                            </p>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                Our box truck fleet offers lift-gate services for curbside delivery, making us the ideal partner for commercial and residential freight that demands white-glove attention and speed.
                            </p>

                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Expedited Shipping</strong>
                                        <span className="text-gray-600">Team drivers and direct routing for urgent, time-critical cargo.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Lift-Gate Service</strong>
                                        <span className="text-gray-600">Easy loading and unloading for sites without docks or forklifts.</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary text-2xl mr-4 mt-1">✓</span>
                                    <div>
                                        <strong className="block text-xl text-gray-900">Retail & Final Mile</strong>
                                        <span className="text-gray-600">Restock inventory or deliver directly to customers with professional handling.</span>
                                    </div>
                                </li>
                            </ul>

                            <Link href="/#quote" className="px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-primary transition-all shadow-lg inline-block">
                                Request Box Truck Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
