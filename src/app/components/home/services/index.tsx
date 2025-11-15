"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 

// --- Program Card Sub-Component ---
const ProgramCard = ({ program }: { program: any }) => {
    
    // NEW Logic for light theme
    let cardBg = "bg-lightgray"; // var(--la-secondary-20-blue)
    let titleColor = "text-secondary"; // var(--80-black)
    let textColor = "text-gray"; // var(--70-black)
    let inlineStyle = {};

    if (program.accentType === "primary") {
        cardBg = "bg-primary"; // var(--la-primary-blue-0)
        titleColor = "text-white";
        textColor = "text-white/70";
    } else if (program.accentType === "medium") {
        // Use inline style for secondary-green as it's not in tailwind config
        cardBg = ""; // Remove default bg
        inlineStyle = { backgroundColor: 'rgb(var(--secondary-green))' };
        titleColor = "text-white";
        textColor = "text-white/70";
    }

    return (
        <Link 
            href={`/projects`}
            // MODIFIED: Added border and cardBg, removed background div
            className={`group relative overflow-hidden h-64 p-6 rounded-lg flex flex-col justify-between 
                       transition-all duration-300 ease-in-out border border-secondary ${cardBg}`}
            style={inlineStyle}
        >
            {/* --- Triangle Mosaic Hover Effect (still commented out) --- */}
            <div 
                className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
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
        // MODIFIED: Removed dark mode, set to lightest blue bg
        <section id="services" className="bg-lightgray py-20 md:py-40">
            <div className="flex flex-col gap-16">
                <div className="container">
                    
                    {/* --- Section Header --- */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        {/* Title is now primary blue */}
                        <h2 className="text-4xl md:text-5xl text-primary">
                            {servicesData?.heading || 'Highlight Programs'}
                        </h2>
                        
                        <Link 
                            href="/projects" // You can change this link
                            // MODIFIED: Removed dark mode classes
                            className="group flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
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
                    {/* MODIFIED: Changed grid-cols-1 to grid-cols-2 */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
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