"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using an icon from your existing library

// --- Reusable component for link groups ---
const FooterLinkGroup = ({ title, links }: { title: string, links: { name: string, href: string, isHot?: boolean }[] }) => (
    <div className="flex flex-col gap-4">
        {/* --- MODIFIED: Added underline classes --- */}
        <h5 className="text-sm font-semibold text-white/70 uppercase tracking-wider underline underline-offset-4">
            {title}
        </h5>
        <ul className='flex flex-col gap-2'>
            {links.map((link) => (
                <li key={link.name}>
                    <Link 
                        href={link.href} 
                        // Use theme's primary color for 'hot' links
                        className={`text-base text-white hover:text-primary ${link.isHot ? 'text-primary' : ''}`}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

// --- Hardcoded data based on your screenshot ---
const aboutLinks = [
    { name: "Mission and Values", href: "#" },
    { name: "About the Founder", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "Career Opportunity", href: "#" },
    { name: "Partnerships", href: "#" },
    { name: "Affordable", href: "#", isHot: true },
];
const quickLinks = [
    { name: "Contact", href: "/contact" },
    { name: "Book a Trial", href: "#" },
    { name: "Admission", href: "#" },
    { name: "Alumni", href: "#", isHot: true },
    { name: "Visit Campus", href: "#" },
];
const programsLinks = [
    { name: "Little Blossoms", href: "#" },
    { name: "Junior Picasso", href: "#" },
    { name: "Budding Artists", href: "#" },
    { name: "Drawing & Illustration", href: "#" },
];
const portfolioLinks = [
    { name: "College Portfolio Preparation", href: "#" },
    { name: "SOTA, DSA", href: "#" },
    { name: "IGCSE, IB, O'Level", href: "#" },
];
const specialProgramsLinks = [
    { name: "Communication Design", href: "#", isHot: true },
    { name: "Product Design", href: "#" },
    { name: "Fashion Design", href: "#" },
    { name: "Interior Design", href: "#" },
    { name: "Architecture Design", href: "#" },
    { name: "Digital 3D Modelling", href: "#", isHot: true },
    { name: "Digital Illustration", href: "#" },
    { name: "Sculpture", href: "#" },
    { name: "Print Making", href: "#" },
    { name: "Animation", href: "#" },
    { name: "Manga Animi", href: "#" },
    { name: "Graphic Design", href: "#" },
];
const artEventsLinks = [
    { name: "Workshop for Local & International School", href: "#", isHot: true },
    { name: "Holiday Programs Art Camp", href: "#" },
    { name: "Adult Holiday Camp", href: "#" },
    { name: "Corporate Events", href: "#" },
    { name: "Arty Party", href: "#" },
    { name: "Visual Arts & Designs", href: "#" },
    { name: "Art for Special Needs", href: "#" },
    { name: "Adults Art Programs", href: "#" },
    { name: "Specialised Art Programs", href: "#" },
];


const Footer = () => {
    
    return (
        <footer>
            {/* Main footer content with black background */}
            <div className="bg-black py-20 md:py-32">
                <div className="container">
                    {/* --- Main 5-Column Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                        
                        {/* --- Col 1: Main Studio --- */}
                        <div className="flex flex-col gap-3">
                            <h5 className="text-sm font-semibold text-white/70 uppercase tracking-wider underline underline-offset-4">THE MANDARIN GARDENS (MAIN STUDIO)</h5>
                            <p className="text-base text-white/90">
                                No.15 Siglap Road (Shophouses)<br />
                                #01-07 (Little Artists Art Studio)<br />
                                Singapore – 448912
                            </p>
                        </div>

                        {/* --- Col 2: Siglap Centre --- */}
                        <div className="flex flex-col gap-3">
                            <h5 className="text-sm font-semibold text-white/70 uppercase tracking-wider underline underline-offset-4">SIGLAP CENTRE (MARINE PARADE AREA)</h5>
                            <p className="text-base text-white/90">
                                55 Siglap Road<br />
                                #02-18 (Little Artists Art Studio)<br />
                                Singapore – 455871
                            </p>
                            <h5 className="text-sm font-semibold text-white/70 uppercase tracking-wider mt-4 underline underline-offset-4">CONTACT</h5>
                            <p className="text-base text-white/90">
                                PH: +65 6449 0960
                            </p>
                            <p className="text-base text-white/90">
                                EMAIL: <a href="mailto:shalini@little-artists.com" className="hover:text-primary">shalini@little-artists.com</a>
                            </p>
                        </div>

                        {/* --- Col 3: About & Quick Links --- */}
                        <div className="flex flex-col gap-8">
                            <FooterLinkGroup title="ABOUT" links={aboutLinks} />
                            <FooterLinkGroup title="QUICK LINKS" links={quickLinks} />
                        </div>

                        {/* --- Col 4: Programs --- */}
                        <div className="flex flex-col gap-8">
                            <FooterLinkGroup title="OUR PROGRAMS" links={programsLinks} />
                            <FooterLinkGroup title="PORTFOLIO PROGRAMS" links={portfolioLinks} />
                            <FooterLinkGroup title="SPECIAL ART PROGRAMS" links={specialProgramsLinks} />
                        </div>

                        {/* --- Col 5: Art & Events + Logo --- */}
                        <div className="flex flex-col gap-8 justify-between items-start">
                            <FooterLinkGroup title="ART & EVENTS" links={artEventsLinks} />
                            
                            <Image 
                                src="/images/logo/new-logo.png" // <-- REPLACE THIS with your new logo
                                alt="Little Artists Studio Logo" 
                                width={150} 
                                height={75}
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* --- Bottom Bar --- */}
            <div className="bg-black pb-6">
                
                {/* --- NEW: Full-width HR (Top) --- */}
                <hr className="border-white/20" />

                <div className="container">
                    {/* Top row: Socials + Newsletter */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
                        <div className="flex gap-6 items-center">
                            <Link href="#" className="text-base text-white hover:text-primary">Facebook</Link>
                            <Link href="#" className="text-base text-white hover:text-primary">Instagram</Link>
                            <Link href="#" className="text-base text-white hover:text-primary">YouTube</Link>
                        </div>
                        <Link href="#" className="group flex items-center gap-2 text-white hover:text-primary transition-colors">
                            <span className="text-lg font-medium">Subscribe Our Newsletter</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* --- MODIFIED: Full-width HR (Bottom) --- */}
                <hr className="border-white/20" />

                {/* Bottom row: Copyright */}
                <div className="container">
                    <div className="text-center pt-6">
                        <p className="text-sm text-white/60">
                            ©2024 Little Artists Art Studio Pte Ltd – All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;