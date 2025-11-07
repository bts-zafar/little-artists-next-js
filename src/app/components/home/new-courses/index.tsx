"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react"; // Using icons from your existing library
import { Parallax, ParallaxProvider } from "react-scroll-parallax"; // Importing Parallax

const NewCourses = () => {
    return (
        // 1. Wrap the component in ParallaxProvider
        <ParallaxProvider>
            {/* Using a light background from your theme */}
            <section className="bg-lightgray dark:bg-secondary py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col gap-16">
                        
                        {/* --- Section Title --- */}
                        <h2 className="text-4xl md:text-5xl text-primary">
                            New Courses
                        </h2>
                        
                        {/* --- Course Details Row --- */}
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                            
                            {/* --- Left Column: Image with Parallax --- */}
                            <div className="w-full lg:w-1/2">
                                {/* 2. Wrap the image container in a Parallax component */}
                                <Parallax speed={-10}>
                                    <div className="w-full h-80 md:h-[450px] overflow-hidden relative rounded-lg">
                                        {/* NOTE: This is a placeholder for your image. 
                                          Replace the 'src' path with the "Seascape Resin" image.
                                        */}
                                        <Image
                                            src={"/images/home/resources/resources_3.png"} // <-- REPLACE THIS
                                            alt="Seascape Resin Course"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </Parallax>
                            </div>

                            {/* --- Right Column: Text Content --- */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
                                <h4 className="text-2xl md:text-28 text-secondary dark:text-white">Seascape Resin</h4>
                                <p className="text-base text-secondary/70 dark:text-white/70">
                                    10-18 Years Old
                                </p>
                                <p className="text-lg text-secondary/70 dark:text-white/70 leading-relaxed">
                                    A resin seascape is an artwork made by layering tinted 
                                    resin to depict ocean scenes like waves or beaches. 
                                    The glossy, durable finish enhances depth, texture, 
                                    and vibrancy, creating a striking, immersive 
                                    representation of the sea.
                                </p>

                                {/* Bullet Points using theme color */}
                                <ul className="flex flex-col gap-3 my-4">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-secondary/80 dark:text-white/80">Foundation 8-12 Sessions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-secondary/80 dark:text-white/80">Intermediate 24 Sessions</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-secondary/80 dark:text-white/80">Intermediate to Advanced 48 Sessions</span>
                                    </li>
                                </ul>

                                <p className="text-base text-secondary/70 dark:text-white/70">
                                    All art materials provided.
                                </p>
                                
                                {/* VIEW MORE Link using theme color */}
                                <Link 
                                    href="/projects" // You can change this link
                                    className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 mt-4"
                                >
                                    <span className="text-sm font-bold uppercase tracking-wider">
                                        VIEW MORE
                                    </span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default NewCourses;