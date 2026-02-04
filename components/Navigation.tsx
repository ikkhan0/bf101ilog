'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50 shadow-2xl border-b border-white/10"
            style={{
                background: 'linear-gradient(to right, rgba(30, 58, 138, 0.95), rgba(30, 64, 175, 0.95), rgba(30, 58, 138, 0.95))',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
        >
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
                        <Link
                            href="/"
                            style={{ color: '#ffffff' }}
                            className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            style={{ color: '#ffffff' }}
                            className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80"
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            style={{ color: '#ffffff' }}
                            className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            style={{ color: '#ffffff' }}
                            className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="desktop-nav items-center space-x-4">
                        <Link
                            href="/portal/carrier"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#ffffff',
                                borderColor: '#ffffff',
                            }}
                            className="!text-white px-5 py-2 border-2 rounded-full font-bold transition-all hover:bg-white hover:text-blue-900"
                        >
                            Carrier Portal
                        </Link>
                        <Link
                            href="/portal/shipper"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#dc2626',
                                color: '#ffffff',
                            }}
                            className="!text-white px-5 py-2 rounded-full font-bold transition-all hover:bg-red-700 shadow-lg"
                        >
                            Shipper Portal
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-btn flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{ color: '#ffffff' }}
                            className="!text-white focus:outline-none hover:opacity-80 transition-opacity"
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
                <div
                    className="md:hidden border-t border-white/10"
                    style={{
                        background: 'rgba(30, 64, 175, 0.98)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                    }}
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            Contact
                        </Link>
                        <div className="border-t border-white/20 my-2 pt-2 space-y-3">
                            <Link
                                href="/portal/carrier"
                                onClick={() => setIsOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                }}
                                className="!text-white block w-full text-center px-4 py-3 border-2 rounded-lg font-bold transition-all hover:bg-white hover:text-blue-900"
                            >
                                Carrier Portal
                            </Link>
                            <Link
                                href="/portal/shipper"
                                onClick={() => setIsOpen(false)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    backgroundColor: '#dc2626',
                                    color: '#ffffff',
                                }}
                                className="!text-white block w-full text-center px-4 py-3 rounded-lg font-bold transition-all hover:bg-red-700 shadow-lg"
                            >
                                Shipper Portal
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
