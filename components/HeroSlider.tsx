'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
    images: string[];
    interval?: number;
}

export default function HeroSlider({ images, interval = 5000 }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 500);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToSlide = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Slider Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex && !isTransitioning
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                >
                    <Image
                        src={image}
                        alt={`Hero slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        quality={90}
                    />
                </div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
