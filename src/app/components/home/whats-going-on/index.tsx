"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; // Base swiper styles
import "swiper/css/pagination"; // Styles for the dots

const WhatsGoingOn = () => {
    const [sectionData, setSectionData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setSectionData(data?.whatsGoingOnData);
            } catch (error) {
                console.error('Error fetching "What\'s going on" data:', error);
            }
        }
        fetchData();
    }, []);

    if (!sectionData) {
        return null; // Don't render if no data
    }

    return (
        <ParallaxProvider>
            {/* Using theme's dark background */}
            <section className="bg-lightgray py-20 md:py-40 overflow-hidden">
                <div className="container">
                    <Parallax speed={-5}>
                        {/* --- Section Header --- */}
                        <div className="flex items-center py-3 gap-4 md:gap-8 w-full mb-6">
                            <span className="bg-primary  py-1.5 px-3 text-base font-medium rounded-full">
                                {sectionData.sectionNumber}
                            </span>
                            <div className="h-px w-16 bg-black/12 " />
                            <p className="section-bedge py-1.5 px-4 rounded-full">
                                {sectionData.sectionBadge}
                            </p>
                        </div>

                        {/* --- Section Title --- */}
                        <h2 className="text-4xl md:text-5xl text-primary mb-16">
                            {sectionData.title}
                        </h2>
                    </Parallax>

                    {/* --- Events Carousel --- */}
                    <Parallax speed={5}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            className="w-full pb-12" // Added padding-bottom for pagination dots
                            // This style tag targets the pagination dots to match your theme's primary color
                            style={{
                                '--swiper-pagination-color': 'var(--color-primary)',
                                '--swiper-pagination-bullet-inactive-color': '#FFF',
                                '--swiper-pagination-bullet-inactive-opacity': '0.3',
                            } as React.CSSProperties}
                        >
                            {sectionData.slides.map((slide: any, index: number) => (
                                <SwiperSlide key={index}>
                                    {/* Slide Content: 50/50 Grid */}
                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-lightgray rounded-lg overflow-hidden">
                                        
                                        {/* Left Side: Image */}
                                        <div className="w-full lg:w-1/2 h-80 lg:h-[500px] relative">
                                            <Image
                                                src={slide.image} // <-- Replace with your mosaic image
                                                alt={slide.title}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        
                                        {/* Right Side: Text */}
                                        <div className="w-full lg:w-1/2 flex flex-col items-start gap-5 p-8 lg:p-12">
                                            <h3 className="text-2xl md:text-3xl text-secondary ">
                                                {slide.title}
                                            </h3>
                                            <p className="text-sm font-medium text-secondary/70 ">
                                                {slide.date}
                                            </p>
                                            <p className="text-base text-secondary/70 ">
                                                {slide.description}
                                            </p>
                                            <Link 
                                                href={slide.link}
                                                className="group flex items-center gap-2 text-primary hover:text-secondary  transition-colors duration-300 mt-4"
                                            >
                                                <span className="text-sm font-bold uppercase tracking-wider">
                                                    SEE ALL EVENTS
                                                </span>
                                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Parallax>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default WhatsGoingOn;