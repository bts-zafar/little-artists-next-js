"use client";

import Image from "next/image";
import NavigationLink from "../../shared/navigation-link"; // Re-using your theme's button
import { Parallax, ParallaxProvider } from "react-scroll-parallax"; // Importing Parallax

const ExplorePrograms = () => {
    return (
        // 1. Wrap the component in ParallaxProvider
        <ParallaxProvider>
            {/* Using standard theme padding and background colors */}
            <section className="bg-white dark:bg-darkblack py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        
                        {/* --- Left Column: Title and Description --- */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            
                            {/* Section Header (like the one you sent in image_681cdc.png) */}
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full">
                                <span className="bg-primary dark:text-secondary py-1.5 px-3 text-base font-medium rounded-full">01</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">Our Programs</p>
                            </div>

                            {/* Title from screenshot, styled with theme's primary color */}
                            <h2 className="text-4xl md:text-5xl text-primary"> 
                                Explore Our Programs
                            </h2>

                            {/* Description Text from screenshot, styled with theme font */}
                            <p className="text-lg text-secondary/70 dark:text-white/70 leading-relaxed">
                                Embark on a transformative journey at Little Artists Institute of Fine Art, a 
                                27-year legacy where personalized instruction meets boundless creativity. 
                                Whether you're honing your craft or exploring new techniques, our 
                                experienced instructors provide a supportive environment for students of 
                                all ages and skill levels. Our unwavering commitment to excellence shines 
                                through the remarkable journeys of our students, many of whom have 
                                been accepted into prestigious institutions worldwide. From SOTA and 
                                LASALLE to Royal College of Art (UK) and Parsons, our alumni thrive in 
                                diverse academic settings, embodying our ethos of fostering talent that 
                                knows no boundaries
                            </p>
                            
                            {/* Button - Re-using the theme's NavigationLink component */}
                            <div className="mt-4">
                                <NavigationLink 
                                    navigationTitle="EXPLORE MORE" 
                                    navigationLink="/projects" // You can change this link
                                    transform={true} 
                                />
                            </div>
                        </div>

                        {/* --- Right Column: Image with Parallax --- */}
                        <div className="w-full lg:w-1/2">
                            {/* 2. Wrap the image container in a Parallax component */}
                            <Parallax speed={-10}>
                                <div className="w-full h-80 md:h-[450px] overflow-hidden relative rounded-lg">
                                    <Image
                                        // NOTE: Add your image from the screenshot to the public folder and update this path
                                        src={"/images/home/portfolio/portfolio_img_2.png"} // Placeholder image
                                        alt="Explore our programs"
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

export default ExplorePrograms;