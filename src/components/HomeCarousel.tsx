"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FurnitureItem, HERO_CAROUSEL_ITEMS } from "@/data/furniture";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Pause,
  Play,
  Maximize2,
} from "lucide-react";

interface HomeCarouselProps {
  onOpenModal: (item: FurnitureItem) => void;
}

export function HomeCarousel({ onOpenModal }: HomeCarouselProps) {
  const slides = HERO_CAROUSEL_ITEMS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  if (!slides || slides.length === 0) return null;

  const currentItem = slides[currentIndex];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden border border-amber-900/30 dark:border-amber-500/20 shadow-2xl bg-zinc-950 text-white group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Aspect Ratio Container */}
      <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px]">
        {/* Background Images for all slides with cross-fade */}
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center transform scale-102 transition-transform duration-10000"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/30 sm:to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-12 sm:pb-16 pt-20">
          <div className="max-w-2xl space-y-4 animate-fadeIn">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{currentItem.badge || "Featured Masterpiece"}</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span className="text-zinc-200">{currentItem.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight drop-shadow-lg">
              {currentItem.name}
            </h1>

            {/* Narrative Description written on image */}
            <p className="text-sm sm:text-base text-zinc-200/90 leading-relaxed font-light drop-shadow line-clamp-3 max-w-xl">
              {currentItem.shortDescription}
            </p>

            {/* Quick Specs Highlight */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-amber-200/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                {currentItem.warranty}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {currentItem.woodType.split("&")[0].trim()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => onOpenModal(currentItem)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:scale-102 cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                View Full Specifications
              </button>
              <Link
                href="/furniture"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all"
              >
                Explore All 36 Pieces
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Play/Pause & Slide Count Bar */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-zinc-300">
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            className="hover:text-amber-400 transition-colors"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <span className="font-mono text-amber-400 font-semibold">
            0{currentIndex + 1}
          </span>
          <span className="text-zinc-500">/</span>
          <span className="font-mono text-zinc-400">0{slides.length}</span>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 right-6 z-20 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-amber-400 shadow-md shadow-amber-400/50"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
