"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react"; // Import new icons
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// --- NEW: Video Modal Component ---
const VideoModal = ({ videoId, onClose }: { videoId: string, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                aria-label="Close video"
            >
                <X size={40} />
            </button>
            <div className="w-full max-w-4xl aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    );
};


function Testimonial() {
    const [testimonialData, setTestimonialData] = useState<any>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false); // State for the modal

    useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch('/api/page-data')
              if (!res.ok) throw new Error('Failed to fetch')
              const data = await res.json()        
              setTestimonialData(data?.testimonialData)
            } catch (error) {
              console.error('Error fetching services:', error)
            }
          }
          fetchData()
        }, []);
    
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, [isVideoOpen]);

    // We need data to render, show a light loading state
    if (!testimonialData) {
        return <section className="bg-lightgray dark:bg-secondary py-20 md:py-40"></section>
    }
        
    return (
        <ParallaxProvider>
            {/* Original theme background */}
            <section className="bg-lightgray dark:bg-secondary py-20 md:py-40 overflow-hidden">
                <div className="flex flex-col gap-24">
                    {/* --- "What They Think of Us" Section (Original Layout) --- */}
                    <div className="container">
                        <Parallax speed={-5}>
                            <div className="flex flex-col gap-14 xl:gap-24">
                                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                    <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                        <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">05</span>
                                        <div className="h-px w-16 bg-black/12 dark:bg-white/12"/>
                                        <p className="section-bedge py-1.5 px-4 rounded-full">Testimonial</p>
                                    </div>
                                    <div className="flex flex-col gap-11 w-full">
                                        {/* --- Section Header (from new screenshot) --- */}
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <h2 className="text-4xl md:text-5xl text-primary">
                                                What They Think of Us
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
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
                                    {/* --- Card 1 (FIXED) --- */}
                                    <div className="bg-primary p-4 lg:p-7 flex flex-col justify-between gap-6 min-h-[450px]">
                                        <div className="flex flex-col gap-6">
                                            {/* FIXED: Text is always dark (text-secondary) */}
                                            <h4 className="text-secondary">{testimonialData?.data_1?.title}</h4>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <StarRating count={testimonialData?.data_1?.rating} color='var(--color-secondary)' />
                                            <div className="flex items-center gap-4">
                                                <Image src={testimonialData?.data_1?.image || "/images/testimonial/testimonial_1.png"} alt={testimonialData?.data_1?.author} width={60} height={60} className="rounded-full" />
                                                <div>
                                                    <p className="text-secondary font-bold">{testimonialData?.data_1?.author}</p>
                                                    <p className="text-secondary/70 text-base font-normal">{testimonialData?.data_1?.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* --- Card 2 (FIXED) --- */}
                                    <div className="xl:col-span-2 bg-secondary dark:bg-lightgray/10 p-4 lg:p-7 flex flex-col justify-between gap-6 min-h-[450px]">
                                        <div className="flex flex-col gap-6">
                                            <h4 className="text-white">{testimonialData?.data_2?.title}</h4>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            {/* DYNAMIC RATING */}
                                            <StarRating count={testimonialData?.data_2?.rating} color='#FFFFFF' />
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Image src={testimonialData?.data_2?.image || "/images/testimonial/testimonial_2.png"} alt={testimonialData?.data_2?.author} width={60} height={60} className="rounded-full" />
                                                    <div>
                                                        <p className="text-white font-bold">{testimonialData?.data_2?.author}</p>
                                                        <p className="text-white/70 text-base font-normal">{testimonialData?.data_2?.company}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Image src={"/images/testimonial/comma_vector.svg"} alt="comma" width={45} height={45}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- Card 3 (FIXED) --- */}
                                    <div className="bg-white dark:bg-black/20 p-4 lg:p-7 flex flex-col justify-between gap-6 min-h-[450px]">
                                        <div className="flex flex-col gap-6">
                                            <h4 className="text-secondary dark:text-white">{testimonialData?.data_3?.title}</h4>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <StarRating count={testimonialData?.data_3?.rating} color='var(--color-primary)' />
                                            <div className="flex items-center gap-4">
                                                <Image src={testimonialData?.data_3?.image || "/images/testimonial/testimonial_3.png"} alt={testimonialData?.data_3?.author} width={60} height={60} className="rounded-full" />
                                                <div>
                                                    <p className="text-secondary dark:text-white font-bold">{testimonialData?.data_3?.author}</p>
                                                    <p className="text-secondary/70 dark:text-white/70 text-base font-normal">{testimonialData?.data_3?.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>

                    {/* --- "We cultivate and innovate..." Video Section --- */}
                    <div className="container mt-20 md:mt-40">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                            {/* Left Column: Text */}
                            <Parallax speed={-3} className="w-full lg:w-1/2">
                                <div className="flex flex-col items-start gap-6">
                                    <h2 className="text-4xl md:text-5xl text-primary">
                                        We cultivate and innovate concepts that shape our future, walking hand in hand with students through their journey!
                                    </h2>
                                    <Link 
                                        href="/contact" // You can change this link
                                        className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 mt-4"
                                    >
                                        <span className="text-sm font-bold uppercase tracking-wider">
                                            ENROL NOW
                                        </span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </Parallax>

                            {/* Right Column: Video Thumbnail */}
                            <Parallax speed={5} className="w-full lg:w-1/2">
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="w-full h-80 md:h-[450px] overflow-hidden relative rounded-lg group"
                                    aria-label="Play video"
                                >
                                    <Image
                                        // NOTE: Replace this with your video thumbnail
                                        src={"/images/home/statsfact/Screenshot 2024-02-22 at 10.02 1.png"} // <-- REPLACE THIS
                                        alt="Video thumbnail"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/10">
                                        <div className="bg-white/30 backdrop-blur-sm p-5 rounded-full text-white transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110">
                                            <Play size={40} className="ml-1" />
                                        </div>
                                    </div>
                                </button>
                            </Parallax>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- Render the Modal if isVideoOpen is true --- */}
            {isVideoOpen && (
                <VideoModal 
                    videoId="pxoOAOKpnrU" 
                    onClose={() => setIsVideoOpen(false)} 
                />
            )}
        </ParallaxProvider>
    );
}

export default Testimonial;