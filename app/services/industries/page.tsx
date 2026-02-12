import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IndustriesPage() {
    const industries = [
        { icon: "🏗️", name: "Construction & Infrastructure", desc: "Delivering steel, lumber, piping, and yellow iron to active job sites." },
        { icon: "🏭", name: "Manufacturing & Industrial", desc: "Raw materials in and finished goods out, keeping production lines moving." },
        { icon: "🛍️", name: "Retail & Consumer Goods", desc: "Distribution center replenishment and direct-to-store logistics." },
        { icon: "🌾", name: "Agriculture", desc: "Seasonal transport of farming equipment, feed, and bulk commodities." },
        { icon: "🚗", name: "Automotive", desc: "Just-in-time delivery of parts, components, and vehicle transport." },
        { icon: "🎪", name: "Events & Entertainment", desc: "Time-critical logistics for trade shows, concerts, and exhibitions." },
        { icon: "⛽", name: "Oil & Gas", desc: "Pipe, rig equipment, and support machinery for the energy sector." },
        { icon: "🏥", name: "Healthcare", desc: "Specialized handling for medical equipment and hospital supplies." }
    ];

    return (
        <div className="min-h-screen font-sans">
            <Navigation />

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Industries Served</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Tailored logistics solutions for every sector of the American economy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {industries.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                                <div className="text-5xl shrink-0 bg-white w-20 h-20 flex items-center justify-center rounded-xl shadow-sm">{item.icon}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-secondary rounded-3xl p-12 mt-20 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Don't see your industry?</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            We adapt to any challenge. Contact us to discuss your specific logistical requirements.
                        </p>
                        <Link href="/contact" className="px-10 py-4 bg-white text-secondary rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg inline-block">
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
