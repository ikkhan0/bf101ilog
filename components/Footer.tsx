import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-secondary">BullyFashion101 LLC</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Military-owned freight brokerage delivering disciplined, compliance-driven transportation solutions.
                            Raising the standard of service in logistics through military precision and transparent communication.
                        </p>
                        <div className="mt-4 p-4 bg-white/10 rounded-lg border border-secondary/30">
                            <p className="text-sm italic text-gray-200">
                                "Good Brokers don't allow good truckers nor good customers to be Bullied."
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
                            <li><Link href="/portal/carrier" className="text-gray-300 hover:text-white transition">Carrier Portal</Link></li>
                            <li><Link href="/portal/shipper" className="text-gray-300 hover:text-white transition">Shipper Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-secondary">Contact Info</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="font-semibold text-white">Erv Moore, Owner</li>
                            <li>📞 (326) 467-2949</li>
                            <li>📧 Em@bf101ilog.com</li>
                            <li className="mt-4 pt-4 border-t border-white/20">
                                <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-bold">
                                    🎖️ MILITARY OWNED
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} BullyFashion101 LLC. All Rights Reserved. | Licensed Freight Broker</p>
                    <p className="text-sm mt-2 text-gray-400">
                        Compliance-Driven • Military-Owned • Mission-Ready
                    </p>
                </div>
            </div>
        </footer>
    );
}
