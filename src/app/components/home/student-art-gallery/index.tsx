"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import Marquee from "react-fast-marquee";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

// --- NEW: Simplified Lightbox Modal ---
// This modal just shows the image on a blurred backdrop.
const GalleryModal = ({ item, onClose }: { item: GalleryItem, onClose: () => void }) => {
  return (
    <div 
      className="fixed inset-0 z-[998] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose} // Click backdrop to close
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-[1000]"
        aria-label="Close image"
      >
        <X size={32} />
      </button>

      {/* Image container: stop propagation so clicking image doesn't close modal */}
      <div 
        className="relative w-full h-full max-w-5xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        <Image
          src={item.src}
          alt={item.title} // Use title for alt text
          layout="fill"
          objectFit="contain" // Use 'contain' to show the whole image
          className="rounded-md"
        />
      </div>
    </div>
  );
};


// --- Main Gallery Component ---
const StudentArtGallery = () => {
  const [galleryData, setGalleryData] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setGalleryData(data?.studentArtGalleryData);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };
    fetchData();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedItem]);


  if (!galleryData) {
    return <section className="bg-white py-20 md:py-40"></section>; // Loading state
  }

  return (
    <>
      <section className="bg-darkgrey -mt-52 overflow-hidden">
        <div className="container mb-16">
          {/* --- Section Header --- */}
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

        {/* --- Scrolling Marquee Gallery --- */}
        <div className="flex flex-col gap-4">
          <Marquee speed={40} gradient={false} pauseOnHover>
            <div className="art-gallery-row">
              {galleryData.row1.map((item: GalleryItem, index: number) => (
                <div key={`r1-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
              {/* --- FIX: Duplicate items to fill gaps --- */}
              {galleryData.row1.map((item: GalleryItem, index: number) => (
                <div key={`r1-clone-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee speed={30} gradient={false} pauseOnHover direction="right">
            <div className="art-gallery-row">
              {galleryData.row2.map((item: GalleryItem, index: number) => (
                <div key={`r2-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
              {/* --- FIX: Duplicate items to fill gaps --- */}
              {galleryData.row2.map((item: GalleryItem, index: number) => (
                <div key={`r2-clone-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee speed={50} gradient={false} pauseOnHover>
            <div className="art-gallery-row">
              {galleryData.row3.map((item: GalleryItem, index: number) => (
                <div key={`r3-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
              {/* --- FIX: Duplicate items to fill gaps --- */}
              {galleryData.row3.map((item: GalleryItem, index: number) => (
                <div key={`r3-clone-${index}`} className="art-gallery-item" onClick={() => setSelectedItem(item)}>
                  <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* --- Render Modal --- */}
      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

export default StudentArtGallery;