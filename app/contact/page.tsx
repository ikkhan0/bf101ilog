import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-bg-light to-white">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-4">
                        🎖️ MILITARY OWNED
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">Contact Us</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Get in touch for freight solutions, lane quotes, or carrier inquiries
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-primary">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-primary">Owner</h3>
                                    <p className="text-gray-700 font-semibold">Erv Moore</p>
                                    <p className="text-sm text-text-secondary">Founder & Operator</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary">
                                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-primary">Phone</h3>
                                    <a href="tel:3264672949" className="text-gray-700 hover:text-secondary font-semibold">
                                        (326) 467-2949
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent">
                                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">✉️</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1 text-primary">Email</h3>
                                    <a href="mailto:EM@ilogbf101.com" className="text-gray-700 hover:text-accent font-semibold">
                                        EM@ilogbf101.com
                                    </a>
                                    <p className="text-sm text-text-secondary mt-1">Freight Logistic Solutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-10 bg-gradient-to-r from-primary to-accent text-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-2 text-gray-100">
                                <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM EST</p>
                                <p><strong>Saturday:</strong> By Appointment</p>
                                <p><strong>Sunday:</strong> Closed</p>
                            </div>
                            <p className="mt-4 text-sm text-gray-200 italic">
                                Emergency freight dispatch available 24/7 for existing clients
                            </p>
                        </div>

                        {/* Services Overview */}
                        <div className="mt-10 bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary">
                            <h3 className="text-2xl font-bold mb-4 text-primary">What We Do</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">✓</span>
                                    <span>Dry Van & Flatbed Freight Brokerage</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">✓</span>
                                    <span>Hazardous Materials Transportation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">✓</span>
                                    <span>Food & Perishables Logistics</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">✓</span>
                                    <span>Industrial & Manufacturing Freight</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mr-2">✓</span>
                                    <span>Contract Lanes & Spot Freight</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-primary">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Send us a message</h2>
                        <p className="text-gray-600 mb-6">
                            Fill out the form below or call us directly for immediate assistance.
                        </p>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Company</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Phone *</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Inquiry Type</label>
                                <select className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition">
                                    <option>Request Lane Quote</option>
                                    <option>Request Solution Consult</option>
                                    <option>Carrier Inquiry</option>
                                    <option>General Question</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">Message *</label>
                                <textarea
                                    className="w-full px-4 py-3 border-2 border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32 transition"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-bold rounded-lg hover:from-secondary-dark hover:to-primary shadow-lg transform hover:scale-105 transition"
                            >
                                Send Message →
                            </button>
                        </form>
                        <p className="text-sm text-gray-500 mt-4 text-center italic">
                            We typically respond within 2-4 business hours
                        </p>
                    </div>
                </div>

                {/* Portal CTAs */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-primary to-accent text-white p-10 rounded-2xl shadow-xl">
                        <div className="text-5xl mb-4">🚚</div>
                        <h3 className="text-3xl font-bold mb-4">For Carriers</h3>
                        <p className="text-gray-100 mb-6 leading-relaxed">
                            Looking to join our carrier network? We work with professional motor carriers that meet DOT/MC requirements.
                        </p>
                        <Link
                            href="/portal/carrier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-bg-light transition-all shadow-xl transform hover:scale-105"
                        >
                            Carrier Registration →
                        </Link>
                    </div>

                    <div className="bg-gradient-to-br from-secondary to-secondary-dark text-white p-10 rounded-2xl shadow-xl">
                        <div className="text-5xl mb-4">📦</div>
                        <h3 className="text-3xl font-bold mb-4">For Shippers</h3>
                        <p className="text-gray-100 mb-6 leading-relaxed">
                            Need reliable freight transportation? Register to access our solution consulting and brokerage services.
                        </p>
                        <Link
                            href="/portal/shipper"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-white text-secondary rounded-full font-bold hover:bg-bg-light transition-all shadow-xl transform hover:scale-105"
                        >
                            Shipper Registration →
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
