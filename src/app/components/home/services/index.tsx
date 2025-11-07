"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

// --- Program Card Sub-Component ---
const ProgramCard = ({ program }: { program: any }) => {
    
    // Logic to set colors based on accentType from our data file
    let cardBg = "bg-lightgray dark:bg-secondary";
    let titleColor = "text-secondary dark:text-white";
    let textColor = "text-secondary/70 dark:text-white/70";

    if (program.accentType === "primary") {
        cardBg = "bg-primary";
        titleColor = "text-secondary"; // Dark text on light green bg
        textColor = "text-secondary/70";
         // Make it stronger on the light bg
    } else if (program.accentType === "medium") {
        cardBg = "bg-primary/10 dark:bg-primary/20"; // Light green tint
        titleColor = "text-secondary dark:text-white";
        textColor = "text-secondary/70 dark:text-white/70";
       
    }

    return (
        <Link 
            href={`/projects`} // You can make this link dynamic later
            className={`group relative overflow-hidden h-64 p-6 rounded-lg flex flex-col justify-between transition-all duration-300 ease-in-out`}
        >
            {/* --- Base Background Color --- */}
            <div className={`absolute inset-0 z-0 ${cardBg} rounded-lg`}></div>

            {/* --- Triangle Mosaic Hover Effect --- */}
            <div 
                className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                    // Creates the cross-hatched triangle/diamond pattern using your theme's primary color
                    // backgroundImage: `repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 1px, transparent 8px),
                    //                 repeating-linear-gradient(-45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 1px, transparent 8px)`,
                    backgroundSize: '8px 8px'
                }}
            ></div>

            {/* --- Content (must be relative and z-10) --- */}
            <div className="relative z-10 flex flex-col h-full justify-between">
                {/* --- Top Content --- */}
                <div>
                    <h4 className={`text-2xl font-bold ${titleColor}`}>{program.heading}</h4>
                    {program.age && (
                        <p className={`text-sm ${textColor}`}>{program.age}</p>
                    )}
                </div>
                
                {/* --- Bottom Content --- */}
                <p className={`text-base max-w-[150px] ${textColor}`}>{program.descp}</p>
            </div>
        </Link>
    );
};


// --- Main Services Component ---
function Services() {
    const [servicesData, setServicesData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setServicesData(data?.servicesData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, []);

    return (
        // Using a light background to match the screenshot, but one from your theme
        <section id="services" className="bg-white dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-16">
                <div className="container">
                    
                    {/* --- Section Header --- */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        {/* Title is now text-primary (green) as requested */}
                        <h2 className="text-4xl md:text-5xl text-primary">
                            {servicesData?.heading || 'Highlight Programs'}
                        </h2>
                        
                        <Link 
                            href="/projects" // You can change this link
                            className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300"
                        >
                            <span className="text-sm font-bold uppercase tracking-wider">
                                EXPLORE MORE PROGRAMS
                            </span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>

                {/* --- 4x2 Programs Grid --- */}
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
                        {servicesData?.data.map((item: any, index: any) => (
                           <ProgramCard key={index} program={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;