"use client";

import Image from "next/image";
import NavigationLink from "../../shared/navigation-link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react"; // <-- Import hooks

const ExplorePrograms = () => {
    // --- NEW: State to hold API data ---
    const [exploreProgramsData, setExploreProgramsData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setExploreProgramsData(data?.exploreProgramsData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, []);

    if (!exploreProgramsData) {
        return <section className="bg-lightgray py-20 md:py-40"></section>; 
    }

    return (
        <ParallaxProvider>
            {/* MODIFIED: Using theme's white bg, removed dark mode */}
            <section className="bg-lightgray py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                        
                        {/* --- Left Column: Title and Description (now from API) --- */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full">
                                <span className="bg-primary text-white py-1.5 px-3 text-base font-medium rounded-full">
                                    {exploreProgramsData.sectionNumber}
                                </span>
                                <div className="h-px w-16 bg-black/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">
                                    {exploreProgramsData.sectionBadge}
                                </p>
                            </div>

                            {/* Title styled with primary blue */}
                            <h2 className="text-4xl md:text-5xl text-primary"> 
                                {exploreProgramsData.title}
                            </h2>

                            {/* Description Text styled with theme's gray */}
                            <p className="text-lg text-gray leading-relaxed">
                                {exploreProgramsData.description}
                            </p>
                            
                            {/* Button - Re-using the theme's NavigationLink component */}
                            <div className="mt-4">
                                <NavigationLink 
                                    navigationTitle={exploreProgramsData.buttonText}
                                    navigationLink={exploreProgramsData.buttonLink}
                                    transform={true} 
                                />
                            </div>
                        </div>

                        {/* --- Right Column: Image (now from API) --- */}
                        <div className="w-full lg:w-1/2">
                            <Parallax speed={-10}>
                                <div className="w-full h-80 md:h-[450px] overflow-hidden relative rounded-lg">
                                    <Image
                                        src={exploreProgramsData.mainImage}
                                        alt={exploreProgramsData.title}
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