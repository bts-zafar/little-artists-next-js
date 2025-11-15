"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using an icon from your existing library
import { Parallax, ParallaxProvider } from "react-scroll-parallax"; // Importing Parallax

const HolidayPrograms = () => {
    return (
        // 1. Wrap the component in ParallaxProvider
        <ParallaxProvider>
            {/* Using a light background from your theme */}
            <section className="bg-lightgray py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        
                        {/* --- Left Column: Title and Link --- */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
                            
                            {/* Section Header (from image_681cdc.png) */}
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full">
                                <span className="bg-primary  py-1.5 px-3 text-base font-medium rounded-full">02</span>
                                <div className="h-px w-16 bg-black/12 " />
                                <p className="section-bedge py-1.5 px-4 rounded-full">
                                    Short Courses
                                </p>
                            </div>

                            {/* Title from screenshot, styled with theme's primary color */}
                            <h2 className="text-4xl md:text-5xl leading-tight">
                                Holiday Programs/ <br />
                                Short Courses
                            </h2>
                            
                            {/* EXPLORE MORE Link */}
                            <Link 
                                href="/projects" // You can change this link
                                className="group flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider">
                                    EXPLORE MORE
                                </span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>

                        {/* --- Right Column: Mosaic Image with Parallax --- */}
                        <div className="w-full lg:w-1/2">
                            {/* 2. Wrap the image container in a Parallax component */}
                            <Parallax speed={-10}>
                                <div className="w-full h-80 md:h-[450px] overflow-hidden relative">
                                    {/* NOTE: This is the placeholder for your mosaic. 
                                      You MUST replace the 'src' path with the single image asset 
                                      (PNG or SVG) of the triangle collage from your Figma.
                                    */}
                                    <Image
                                        src={"/images/home/portfolio/a889c123-6b30-4267-ad32-e61d22fd6b34.jpeg"} 
                                        alt="Holiday Programs Mosaic"
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

export default HolidayPrograms;