import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-bg-light to-white">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-4">
                        🎖️ MILITARY OWNED
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">About BullyFashion101 LLC</h1>
                    <p className="text-2xl text-text-secondary max-w-3xl mx-auto">
                        Military-Owned Freight Brokerage | Disciplined Excellence in Logistics
                    </p>
                </div>

                {/* Why We Started Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-primary">Why We Started</h2>
                        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                            BullyFashion101 LLC was founded to apply <strong>military-developed logistics expertise</strong> and
                            hazardous materials experience to the commercial transportation sector, delivering disciplined,
                            compliance-driven freight solutions to shippers who require precision and reliability.
                        </p>
                        <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                            Our founder's military background instilled a deep understanding of <strong>operational planning</strong>,
                            <strong>risk management</strong>, and <strong>safety</strong>—core elements in moving regulated and
                            time-sensitive freight.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Launching this business allows us to continue serving critical supply chains by helping food distributors,
                            manufacturers, and industrial shippers secure dependable transportation while maintaining strict regulatory standards.
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-secondary">
                        <Image
                            src="/hero-banner.jpg"
                            alt="BullyFashion101 LLC - Operational Planning, Risk Management, and Safety"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Our Mission Section */}
                <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl mb-16 border-t-4 border-secondary">
                    <h2 className="text-4xl font-bold text-center mb-8 text-primary">Our Mission</h2>
                    <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-8">
                        We continue serving critical supply chains by helping food distributors, manufacturers, and industrial shippers
                        secure dependable transportation while maintaining strict regulatory standards.
                    </p>
                    <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
                        As we complete specialized hazardous materials credentials, our goal is to build a brokerage known for
                        <strong> accountability</strong>, <strong>safety</strong>, and <strong>rapid response</strong> when capacity is tight or freight is complex.
                    </p>
                </div>

                {/* Our Commitment Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Commitment</h2>
                    <p className="text-xl text-center text-gray-700 mb-10 max-w-3xl mx-auto">
                        This company was created not only to move freight, but to <strong>raise the standard of service</strong> in logistics through:
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-primary">
                            <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-4xl">🎯</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-primary">Disciplined Execution</h3>
                            <p className="text-gray-600 leading-relaxed">Military precision in every shipment</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-secondary">
                            <div className="w-20 h-20 bg-secondary rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-4xl">💬</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-primary">Transparent Communication</h3>
                            <p className="text-gray-600 leading-relaxed">Clear, honest updates at every stage</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent">
                            <div className="w-20 h-20 bg-accent rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-4xl">🤝</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-primary">Long-Term Partnerships</h3>
                            <p className="text-gray-600 leading-relaxed">Building relationships based on trust</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-secondary-dark">
                            <div className="w-20 h-20 bg-secondary-dark rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg">
                                <span className="text-4xl">✅</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-primary">Regulatory Excellence</h3>
                            <p className="text-gray-600 leading-relaxed">Strict adherence to safety & compliance</p>
                        </div>
                    </div>
                </div>

                {/* Brand Philosophy */}
                <div className="bg-gradient-to-r from-primary to-accent text-white p-10 md:p-14 rounded-2xl shadow-2xl mb-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-6xl mb-6">🐕</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
                        <p className="text-2xl md:text-3xl italic font-semibold mb-6 leading-relaxed">
                            "Good Brokers don't allow good truckers nor good customers to be Bullied."
                        </p>
                        <p className="text-lg md:text-xl text-gray-100">
                            This is more than a slogan—it's our promise to protect both our carriers and shippers with fair practices,
                            transparent pricing, and unwavering support.
                        </p>
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4 text-primary">Leadership</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-primary mb-2">Erv Moore</h3>
                            <p className="text-xl text-secondary font-semibold mb-4">Founder</p>
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm mb-6">
                                🎖️ MILITARY OWNED
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            With extensive military experience and specialized logistics training, Erv founded BullyFashion101 LLC
                            to bring military-grade discipline and compliance to civilian freight logistics. His background in operational planning
                            and risk management ensures every shipment is handled with precision and care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:3264672949" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all">
                                📞 (326) 467-2949
                            </a>
                            <a href="mailto:Em@bf101ilog.com" className="px-8 py-3 bg-secondary text-white rounded-full font-bold hover:bg-secondary-dark transition-all">
                                📧 Em@bf101ilog.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Coverage Area */}
                <div className="bg-gradient-to-br from-bg-light to-white p-10 md:p-12 rounded-2xl border-2 border-border-light mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Coverage Area</h2>
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                            <strong>End-to-end coverage</strong> across the <strong>contiguous United States</strong>
                            (excluding Alaska and Hawaii).
                        </p>
                        <p className="text-lg text-text-secondary">
                            Service outside this area is subject to availability and special arrangements.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-secondary via-secondary-dark to-primary text-white p-12 rounded-2xl shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our network of satisfied shippers and professional carriers. Experience military-grade logistics excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-bg-light transition-all shadow-xl transform hover:scale-105">
                            Contact Us
                        </Link>
                        <Link href="/portal/carrier" className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark border-2 border-white transition-all shadow-xl transform hover:scale-105">
                            Become a Carrier
                        </Link>
                        <Link href="/portal/shipper" className="px-10 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-dark border-2 border-white transition-all shadow-xl transform hover:scale-105">
                            Become a Shipper
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
