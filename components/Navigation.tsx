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

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                style={{ color: '#ffffff' }}
                                className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80 flex items-center gap-1 focus:outline-none"
                            >
                                Services
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-4 w-56 bg-white rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border-t-4 border-secondary">
                                <Link href="/services/flatbed" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-bold transition-colors">
                                    Flatbed Freight
                                </Link>
                                <Link href="/services/box-truck" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-bold transition-colors">
                                    Box Truck Freight
                                </Link>
                                <Link href="/services/specialized" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-bold transition-colors">
                                    Specialized Transport
                                </Link>
                                <Link href="/services/industries" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary font-bold transition-colors">
                                    Industries Served
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/#quote"
                            style={{ color: '#ffffff' }}
                            className="!text-white font-semibold text-sm uppercase transition-all hover:opacity-80"
                        >
                            Get a Quote
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
                    <div className="desktop-nav items-center space-x-3">
                        <Link
                            href="/login"
                            className="!text-white text-sm font-bold hover:text-secondary-light transition-colors"
                            style={{ color: '#ffffff' }}
                        >
                            Login / Portal
                        </Link>
                        <Link
                            href="/portal/shipper"
                            className="!text-white px-4 py-2 border border-white/80 rounded-full text-sm font-bold hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
                            style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.8)' }}
                        >
                            Request a Load
                        </Link>
                        <Link
                            href="/portal/carrier"
                            className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-secondary-dark transition-all shadow-lg transform hover:scale-105"
                        >
                            Sign Up
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

                        {/* Mobile Services */}
                        <div className="space-y-1">
                            <div className="px-3 py-3 text-base font-bold text-white/70 uppercase text-xs tracking-wider">Services</div>
                            <Link href="/services/flatbed" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg">Flatbed Freight</Link>
                            <Link href="/services/box-truck" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg">Box Truck Freight</Link>
                            <Link href="/services/specialized" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg">Specialized Transport</Link>
                            <Link href="/services/industries" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-white font-semibold hover:bg-white/10 rounded-lg">Industries Served</Link>
                        </div>

                        <Link
                            href="/#quote"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            Get a Quote
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            style={{ color: '#ffffff' }}
                            className="!text-white block px-3 py-3 text-base font-bold rounded-lg transition-all hover:bg-white/10"
                        >
                            Contact
                        </Link>

                        <div className="border-t border-white/20 my-4 pt-4 space-y-3">
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="!text-white block w-full text-center px-4 py-3 rounded-lg font-bold transition-all hover:bg-white/10 border border-white/30"
                            >
                                Login / Portal
                            </Link>
                            <Link
                                href="/portal/shipper"
                                onClick={() => setIsOpen(false)}
                                className="!text-white block w-full text-center px-4 py-3 rounded-lg font-bold transition-all bg-white/10 hover:bg-white/20"
                            >
                                Request a Load
                            </Link>
                            <Link
                                href="/portal/carrier"
                                onClick={() => setIsOpen(false)}
                                className="!text-white block w-full text-center px-4 py-3 rounded-lg font-bold transition-all bg-secondary hover:bg-secondary-dark shadow-lg"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
