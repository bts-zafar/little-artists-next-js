"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using an icon from your existing library
import { Parallax, ParallaxProvider } from "react-scroll-parallax"; // Importing Parallax

const FounderSection = () => {
    return (
        // 1. Wrap the component in ParallaxProvider
        <ParallaxProvider>
            {/* Using a standard background from your theme */}
            <section className="bg-white dark:bg-darkblack py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        
                        {/* --- Left Column: Title and Description --- */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                            
                            {/* --- NEW: Section Header --- */}
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full">
                                <span className="bg-primary dark:text-secondary py-1.5 px-3 text-base font-medium rounded-full">05</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">
                                    About the Founder
                                </p>
                            </div>

                            {/* Title from screenshot, styled with theme's primary color */}
                            <h2 className="text-4xl md:text-5xl text-white"> 
                                Founder of Little Artists Studio
                            </h2>

                            {/* Description Text from screenshot, styled with theme font */}
                            <p className="text-lg text-secondary/70 dark:text-white/70 leading-relaxed">
                                Ms Shalini Kapoor stands at the intersection of art, education, and 
                                entrepreneurship, passionately leading the Little Artists Art Studio 
                                group of companies in Singapore. As a visionary founder and director 
                                since 1997, Shalini's journey in the art world is a testament to her 
                                dedication to nurturing creativity and excellence in young artists. 
                                Trained in design and arts in India, her 20-plus years of professional 
                                experience encompass a broad spectrum of roles, from educator to 
                                art therapist, innovator to mentor.
                            </p>
                            
                            {/* "READ MORE" Link */}
                            <Link 
                                href="/about" // You can change this link
                                className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 mt-4"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">
                                    READ MORE ABOUT HER STORY
                                </span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* --- Right Column: Image with Parallax --- */}
                        <div className="w-full lg:w-1/2">
                            {/* 2. Wrap the image container in a Parallax component */}
                            <Parallax speed={-10}>
                                <div className="w-full h-96 md:h-[500px] overflow-hidden relative rounded-lg">
                                    {/* NOTE: Add your image of the founder to the public folder 
                                        and update this path. Using a placeholder for now.
                                    */}
                                    <Image
                                        src={"/images/home/team/team-img-2.png"} // <-- REPLACE THIS
                                        alt="Ms Shalini Kapoor, Founder of Little Artists Studio"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </Parallax>
                        </div>
                        
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default FounderSection;