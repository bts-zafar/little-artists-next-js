"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  // Use a ref to track the hover state to prevent re-rendering
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // Create fast-tracking functions using GSAP
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

    // Function to handle the animation
    const animateCursor = (isHovering: boolean) => {
      // Check if state has actually changed
      if (isHovering !== isHoveringRef.current) {
        isHoveringRef.current = isHovering;
        gsap.to(cursor, {
          scale: isHovering ? 6 : 1, // 6x size for 30% opacity (adjust as needed)
          opacity: isHovering ? 0.3 : 1, // 30% opacity on hover
          duration: 0.3,
          ease: "power3",
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Check if target is a link or button
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        animateCursor(true); // Expand
      } else {
        animateCursor(false); // Default
      }
    };

    // Hide/show cursor on mouse leave/enter
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    // Add event listeners
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  // We only render this on the client
  return <div ref={cursorRef} className="cursor-dot"></div>;
};

export default CustomCursor;