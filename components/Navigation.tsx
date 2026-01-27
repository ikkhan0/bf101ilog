import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="LFL Logistics Logo"
                            width={180}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
                        <Link href="/" style={{ color: '#003366', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.3s' }} className="hover:text-[#0077be]">Home</Link>
                        <Link href="/services" style={{ color: '#003366', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.3s' }} className="hover:text-[#0077be]">Services</Link>
                        <Link href="/about" style={{ color: '#003366', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.3s' }} className="hover:text-[#0077be]">About Us</Link>
                        <Link href="/portal/carrier" style={{ color: '#003366', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.3s' }} className="hover:text-[#0077be]" target="_blank" rel="noopener noreferrer">Carrier Portal</Link>
                        <Link href="/contact" style={{ color: '#003366', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.3s' }} className="hover:text-[#0077be]">Contact</Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/portal/carrier" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[#0077be] border-2 border-[#0077be] rounded-full font-bold hover:bg-[#0077be] hover:text-white transition">
                            Carrier Portal
                        </Link>
                        <Link href="/portal/shipper" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700">
                            Shipper Portal
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
