"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: This version includes smooth letter-by-letter animation

function HeroSection() {
    const [visibleChars, setVisibleChars] = useState(0);
    const line1 = "Little Artists Studio Where";
    const line2 = "Creative Stories Come to Life!";
    const text = line1 + " " + line2;
    const totalChars = text.length;
    
    useEffect(() => {
        // Calculate delay per character to spread over 3 seconds
        const duration = 3000; // 3 seconds
        const delayPerChar = duration / totalChars;
        
        const interval = setInterval(() => {
            setVisibleChars((prev) => {
                if (prev >= totalChars) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, delayPerChar);
        
        return () => clearInterval(interval);
    }, [totalChars]);

    return (
        <section className="relative flex items-center justify-center text-white bg-black h-screen min-h-[650px] md:h-screen overflow-hidden">
            
            {/* --- Background Video --- */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="https://regis.org/videos/background-video.mp4"
                autoPlay
                loop
                muted
                playsInline
            >
                {/* Fallback content */}
                Your browser does not support the video tag.
            </video>

            {/* --- Overlay --- */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* --- Centered Content (matching Regis style) --- */}
            <div className="relative z-20 container text-center flex flex-col items-center gap-8 max-w-5xl px-4">
                
                {/* Main Hero Title with Letter-by-Letter Animation */}
                <h1 
                    className="text-5xl md:text-7xl font-medium leading-tight tracking-normal" 
                    style={{ fontFamily: "'Sabon Next LT', 'Times New Roman', Georgia, serif" }}
                >
                    {text.split('').map((char, index) => {
                        const shouldBreak = index === line1.length;
                        return (
                            <span key={index}>
                                <span
                                    className="inline-block"
                                    style={{
                                        opacity: index < visibleChars ? 1 : 0,
                                        transform: index < visibleChars ? 'translateX(0)' : 'translateX(-20px)',
                                        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                                    }}
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                                {shouldBreak && <br />}
                            </span>
                        );
                    })}
                </h1>
                
                {/* ENROL NOW Button - Appears after text animation */}
                <Link 
                    href={"/contact"}
                    className="group flex gap-3 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-500 ease-in-out px-6 py-3"
                    style={{
                        opacity: visibleChars >= totalChars ? 1 : 0,
                        transform: visibleChars >= totalChars ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                    }}
                >
                    <span className="text-lg font-bold text-secondary group-hover:text-white transition-transform duration-500 ease-in-out">
                        ENROL NOW
                    </span>
                    <svg className="transition-all duration-200 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:invert" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#1F2A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>

            </div>

            {/* --- "Since 1997" Badge --- */}
            {/* 
            <Image
                src="/images/home/badge-since-1997.png"
                alt="School of Art & Design Since 1997"
                width={100}
                height={100}
                className="absolute z-20 bottom-10 right-10"
            />
            */}
        </section>
    );
}

export default HeroSection;