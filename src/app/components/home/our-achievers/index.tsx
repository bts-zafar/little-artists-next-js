"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

type GalleryImage = {
  src: string;
  alt: string;
};

// --- Gallery Column Sub-Component ---
const GalleryColumn = ({ 
  images, 
  colRef 
}: { 
  images: GalleryImage[], 
  colRef: React.RefObject<HTMLDivElement | null>
}) => {
  return (
    <div ref={colRef} className="achievers-column">
      {images.map((img, index) => (
        <div key={index} className="achievers-image">
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

// --- Main "Our Achievers" Component ---
const OurAchievers = () => {
  const [galleryData, setGalleryData] = useState<any>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setGalleryData(data?.ourAchieversData);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };
    fetchData();
  }, []);

  // GSAP Animation Effect
  useEffect(() => {
    if (!galleryData || !galleryRef.current || !col1Ref.current || !col2Ref.current || !col3Ref.current) return;

    // This creates the parallax effect
    const ctx = gsap.context(() => {
      // We use the 'wrapper' (galleryRef) as the trigger
      gsap.to(col1Ref.current, {
        y: "-30%", // Column 1 scrolls up 30%
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
      gsap.to(col2Ref.current, {
        y: "-50%", // Column 2 scrolls up 50% (faster)
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
      gsap.to(col3Ref.current, {
        y: "-20%", // Column 3 scrolls up 20% (slower)
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    }, galleryRef); // Scope the context to the main gallery ref

    return () => ctx.revert(); // Cleanup GSAP
  }, [galleryData]);


  if (!galleryData) {
    return <section className="bg-white py-20 md:py-40"></section>; // Loading state
  }

  return (
    <section className="bg-darkgrey overflow-hidden">
      <div className="container">
        
        {/* --- Section Header (Now OUTSIDE the animated gallery) --- */}
        <div className="mb-24 md:mb-32">
          <div className="flex items-center py-3 gap-4 md:gap-8 w-full mb-6">
              <span className="bg-primary text-white py-1.5 px-3 text-base font-medium rounded-full">
                  {galleryData.sectionNumber}
              </span>
              <div className="h-px w-16 bg-black/12" />
              <p className="section-bedge py-1.5 px-4 rounded-full">
                  {galleryData.sectionBadge}
              </p>
          </div>
          <h2 className="text-4xl md:text-5xl text-primary">
              {galleryData.title}
          </h2>
        </div>

        {/* --- Parallax Gallery Grid (Wrapped separately for animation) --- */}
        <div ref={galleryRef}>
          <div className="achievers-gallery-grid">
            <GalleryColumn colRef={col1Ref} images={galleryData.column1} />
            <GalleryColumn colRef={col2Ref} images={galleryData.column2} />
            <GalleryColumn colRef={col3Ref} images={galleryData.column3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievers;