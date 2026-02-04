'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-primary/95 via-primary-dark/95 to-primary/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/bf101-logo-transparent.png"
                            alt="BullyFashion101 LLC Logo"
                            width={200}
                            height={70}
                            className="h-12 w-auto sm:h-16"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav gap-8 items-center">
                        <Link href="/" className="text-white font-semibold text-sm uppercase hover:text-accent transition-colors">Home</Link>
                        <Link href="/services" className="text-white font-semibold text-sm uppercase hover:text-accent transition-colors">Services</Link>
                        <Link href="/about" className="text-white font-semibold text-sm uppercase hover:text-accent transition-colors">About Us</Link>
                        <Link href="/contact" className="text-white font-semibold text-sm uppercase hover:text-accent transition-colors">Contact</Link>
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="desktop-nav items-center space-x-4">
                        <Link href="/portal/carrier" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-primary transition-all">
                            Carrier Portal
                        </Link>
                        <Link href="/portal/shipper" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-secondary text-white rounded-full font-bold hover:bg-accent transition-all shadow-lg">
                            Shipper Portal
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent focus:outline-none"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-primary-dark/98 backdrop-blur-md border-t border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition">Home</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition">Services</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition">About Us</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-bold text-white hover:bg-white/10 rounded-lg transition">Contact</Link>
                        <div className="border-t border-white/20 my-2 pt-2 space-y-3">
                            <Link href="/portal/carrier" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-3 text-white border-2 border-white rounded-lg font-bold hover:bg-white hover:text-primary transition">
                                Carrier Portal
                            </Link>
                            <Link href="/portal/shipper" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-3 bg-secondary text-white rounded-lg font-bold hover:bg-accent transition shadow-lg">
                                Shipper Portal
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
