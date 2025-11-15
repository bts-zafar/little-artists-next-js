"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// Import Parallax components
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// Import Icon
import { ArrowRight } from "lucide-react";

// UPDATED: Added "detail" to the Blog type
type Blog = {
    title: string;
    slug: string;
    date: string;
    coverImage: string;
    detail: string; // The new field for the snippet
};

const Resources = () => {
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        // This fetch will now include the "detail" field
        fetch("/api/blog")
            .then((res) => res.json())
            .then((data) => setblogs(data.slice(0, 3)));
    }, []);

    return (
        <ParallaxProvider>
            <section className="bg-lightgray dark:bg-[#273338] py-20 md:py-40 overflow-hidden">
                <div className="flex flex-col gap-24">
                    <div className="container">
                        <Parallax speed={-5}> {/* Added Parallax */}
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-col gap-14 xl:gap-24">
                                    <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                        <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                            {/* Updating section number to 08 */}
                                            <span className="bg-primary dark:text-secondary py-1.5 px-3 text-base font-medium rounded-full">08</span>
                                            <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                            <p className="section-bedge py-1.5 px-4 rounded-full">Latest News</p>
                                        </div>
                                        <div className="flex flex-col gap-11 w-full">
                                            {/* --- MODIFIED: Header Row --- */}
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                                <h2 className="max-w-3xl">Latest News</h2>
                                                <Link 
                                                    href="/blog" // Link to the blog page
                                                    className="group flex items-center gap-2 text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors duration-300 flex-shrink-0"
                                                >
                                                    <span className="text-sm font-bold uppercase tracking-wider">
                                                        READ MORE
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                            <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                                Stay updated with the latest happenings, insights, and stories 
                                                from the world of Little Artists.
                                            </p>
                                        </div>
                                    </div>
                                    {/* --- This is your original grid layout --- */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-7">
                                        {blogs.map((value, index) => {
                                            const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            });
                                            return (
                                                <Link href={`/blog/${value.slug}`} key={index} className={`group flex flex-col gap-5 ${index === 0 ? 'sm:col-span-2' : ''}`}>
                                                    
                                                    {/* Image container is now relative */}
                                                    <div className="w-full h-450px overflow-hidden group relative rounded-lg">
                                                        <Image
                                                            src={value.coverImage}
                                                            alt="image"
                                                            width={805}
                                                            height={450}
                                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                        />
                                                        {/* Subheading overlay */}
                                                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                                            <p className="text-white/90 text-base line-clamp-2">
                                                                {value.detail}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Text block below image */}
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-secondary/70 dark:text-white/70">{formattedDate}</span>
                                                        <h4>{value.title}</h4>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
            </section>
        </ParallaxProvider>
    );
}

export default Resources;