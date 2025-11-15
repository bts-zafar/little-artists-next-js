"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// --- NEW: Import Marquee ---
import Marquee from "react-fast-marquee";

// --- Artist Card Sub-Component ---
// This keeps the carousel code clean
const ArtistCard = ({ artist }: { artist: any }) => (
    <div className="group relative w-72 md:w-80 h-[450px] overflow-hidden rounded-lg mx-4">
        {/* Background Image */}
        <Image
            src={artist.image}
            alt={artist.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
        {/* Text Overlay (using theme's primary color) */}
        <div className="absolute bottom-0 left-0 w-full h-auto p-5 bg-primary">
            <h4 className="text-xl font-bold text-secondary">
                {artist.name}
            </h4>
            <p className="text-sm text-white mt-1">
                {artist.description}
            </p>
        </div>
    </div>
);


const FeaturedArtists = () => {
    const [artistsData, setArtistsData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setArtistsData(data?.featuredArtistsData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching artists data:', error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // Show a loading state
    if (isLoading) {
        return (
            <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
                <div className="container">
                    <p className="text-secondary dark:text-white">Loading artists...</p>
                </div>
            </section>
        );
    }
    
    // Show an error if data is missing
    if (!artistsData || !artistsData.data || artistsData.data.length === 0) {
         return (
            <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
                <div className="container">
                     {/* --- Section Header --- */}
                     <div className="flex items-center py-3 gap-4 md:gap-8 w-full mb-6">
                        <span className="bg-primary dark:text-secondary py-1.5 px-3 text-base font-medium rounded-full">04</span>
                        <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                        <p className="section-bedge py-1.5 px-4 rounded-full">
                            Featured Artists
                        </p>
                    </div>
                    {/* --- Section Title Row --- */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
                        <h2 className="text-4xl md:text-5xl max-w-lg text-secondary dark:text-white">
                            {artistsData?.title || "We generate and challenge the ideas that shape our future"}
                        </h2>
                    </div>
                    <p className="text-red-500 text-lg">
                        Error: Artist data could not be loaded or is empty.
                    </p>
                </div>
            </section>
        );
    }


    return (
        <ParallaxProvider>
            {/* Using theme's dark background */}
            <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
                <div className="container">
                    {/* Parallax for the whole section */}
                    <Parallax speed={-5}>
                        {/* --- Section Header --- */}
                        <div className="flex items-center py-3 gap-4 md:gap-8 w-full mb-6">
                            <span className="bg-primary dark:text-secondary py-1.5 px-3 text-base font-medium rounded-full">04</span>
                            <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                            <p className="section-bedge py-1.5 px-4 rounded-full">
                                Featured Artists
                            </p>
                        </div>

                        {/* --- Section Title Row --- */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
                            <h2 className="text-4xl md:text-5xl max-w-lg text-secondary dark:text-white">
                                {artistsData.title}
                            </h2>
                            <Link 
                                href="/projects" // You can change this link
                                className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 flex-shrink-0"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">
                                    VIEW MORE
                                </span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Parallax>
                </div>

                {/* --- Artists Marquee --- */}
                {/* NOTE: The <Parallax> component cannot be a direct parent of <Marquee>.
                  We apply parallax to the header (above) and keep the marquee separate.
                  This creates the effect of the header scrolling at a different speed
                  than the marquee, which looks great.
                */}
                <div className="w-full">
                    <Marquee
                        pauseOnHover={true}
                        speed={50} // Adjust speed as you like
                        gradient={false} // Removes the fading edge
                    >
                        {artistsData.data.map((artist: any, index: number) => (
                           <ArtistCard key={index} artist={artist} />
                        ))}
                    </Marquee>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default FeaturedArtists;