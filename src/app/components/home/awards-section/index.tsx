"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
// Re-using the logo slider from your theme's pricing section
import Logoslider from "../pricing/Logoslider";

const AwardsSection = () => {
    const [awardsData, setAwardsData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setAwardsData(data?.awardsData);
            } catch (error) {
                console.error('Error fetching awards data:', error);
            }
        }
        fetchData();
    }, []);

    if (!awardsData) {
        return null; // Don't render if no data
    }

    return (
        // Using theme's light background and standard padding
        <section className="bg-lightgray dark:bg-secondary">
            <div className="container">
                {/* --- Section Title --- */}
                <h2 className="text-4xl md:text-5xl text-primary text-center mb-16">
                    {awardsData.title}
                </h2>
            </div>

            {/* --- Logo Marquee (Auto-scrolling) --- */}
            <div className="mb-20">
                <Marquee
                    pauseOnHover={true}
                    speed={40}
                    gradient={false}
                >
                    {(awardsData.logos || []).map((logo: any, index: any) => (
                        <div className="mx-4 md:mx-8" key={index}>
                            <Logoslider logo={logo} />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* --- Text Section --- */}
            <div className="container mb-20">
                <div className="max-w-xl flex flex-col items-start gap-4">
                    <h3 className="text-2xl md:text-3xl text-secondary dark:text-white">
                        {awardsData.mainHeading}
                    </h3>
                    <p className="text-lg text-secondary/70 dark:text-white/70">
                        {awardsData.subText}
                    </p>
                    {/* <Link 
                        href="/about" // You can change this link
                        className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 mt-2"
                    >
                        <span className="text-sm font-bold uppercase tracking-wider">
                            READ MORE
                        </span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link> */}
                </div>
            </div>

            {/* --- NEW: Full-width, No-Gap, 2x2 Mobile Grid --- 
              The container has been removed from here.
            */}
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 mt-20">
                {(awardsData.images || []).map((imgSrc: string, index: number) => (
                    <div key={index} className="w-full aspect-square relative">
                        <Image
                            src={imgSrc} // <-- Replace with your 4 images
                            alt={`Awards image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AwardsSection;