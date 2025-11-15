import { Metadata } from "next";

// --- Component 1 ---
import HeroSection from "./components/home/hero"; 
import ExplorePrograms from "./components/home/explore-programs"; 
import Services from "./components/home/services"; 
import HolidayPrograms from "./components/home/holiday-programs"; 
import NewCourses from "./components/home/new-courses"; 
import FeaturedArtists from "./components/home/featured-artists"; 
import FounderSection from "./components/home/founder-section";
import StatsFacts from "./components/home/stats-facts"; 
import AwardsSection from "./components/home/awards-section";
import Testimonial from "./components/home/testimonial"; 
import WhatsGoingOn from "./components/home/whats-going-on";
import Resources from "./components/home/resources"; 

export const metadata: Metadata = {
    title: "Little Artists Studio | Home",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (NEW WebGL Carousel) */}
      <HeroSection /> 
      
      {/* 2. Explore Our Programs (Text/Image + Parallax) */}
      <ExplorePrograms />

      {/* 3. Highlight Programs (8-Card Grid) */}
      <Services />

      {/* 4. Holiday Programs (50/50 Section + Parallax) */}
      <HolidayPrograms />

      {/* 5. New Courses (50/50 Section + Parallax) */}
      <NewCourses />

      {/* 6. Featured Artists (Marquee + Parallax) */}
      <FeaturedArtists />

      {/* 7. Founder Section (50/50 Section + Parallax) */}
      <FounderSection />

      {/* 8. Stats Section (Original theme layout + Parallax) */}
      <StatsFacts />

      {/* 9. Awards and Recognition (Static) */}
      <AwardsSection />

      {/* 10. Testimonials + Video (Combined) */}
      <Testimonial />

      {/* 11. "What's going on" (Carousel + Parallax) */}
      <WhatsGoingOn />

      {/* 12. Latest News (List layout + Parallax) */}
      <Resources />
    </>
  );
}