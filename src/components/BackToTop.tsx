"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Only show if user has scrolled down past 150px
      if (scrollPosition > 150) {
        setIsVisible(true);

        // Clear any pending hide timer
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // When user stops scrolling, hide button with animation after 1.8 seconds
        scrollTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 1800);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll back to top"
        title="Scroll back to top"
        className="group relative flex items-center justify-center p-3.5 sm:px-4 sm:py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 border border-amber-300/60 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        {/* Mobile shows ONLY upward arrow, larger screens show text + arrow */}
        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
        <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-extrabold ml-1.5">
          Top
        </span>

        {/* Subtle glowing ring pulse */}
        <span className="absolute -inset-1 rounded-full bg-amber-400/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}
