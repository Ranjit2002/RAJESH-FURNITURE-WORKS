"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FURNITURE_DATA, FurnitureItem } from "@/data/furniture";
import { HomeCarousel } from "@/components/HomeCarousel";
import { FurnitureCard } from "@/components/FurnitureCard";
import { FurnitureModal } from "@/components/FurnitureModal";
import { StatsSection } from "@/components/StatsSection";
import { CraftsmanshipJourney } from "@/components/CraftsmanshipJourney";
import { WoodSpeciesGuide } from "@/components/WoodSpeciesGuide";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BespokeBanner } from "@/components/BespokeBanner";
import {
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Award,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Bedroom",
    "Living Room",
    "Mandir / Temple",
    "Modular Kitchen",
    "Wardrobes",
  ];

  const displayedItems =
    activeCategory === "All"
      ? FURNITURE_DATA.slice(0, 6)
      : FURNITURE_DATA.filter((item) => item.category === activeCategory).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Carousel Section - Full Screen Edge-to-Edge (Zero Gaps Left & Right) */}
      <section className="relative w-full overflow-hidden p-0 m-0">
        <HomeCarousel onOpenModal={(item) => setSelectedItem(item)} />
      </section>

      {/* Stats Counter Section */}
      <StatsSection />

      {/* Featured Furniture Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <ScrollReveal direction="left" duration={1000} className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              Handcrafted Masterpieces
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Curated Furniture Gallery
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Each creation is sculpted from kiln-seasoned hardwoods. Click any piece to inspect technical specifications, joinery, dimensions, and wood species.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={1000}>
            <Link
              href="/furniture"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 group self-start md:self-auto shrink-0"
            >
              <span>View All 36 Works</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Filter Pills */}
        <ScrollReveal direction="left" delay={100} duration={1000}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/25"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Furniture Grid - Max grid-cols-3 with scroll-triggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, idx) => {
            const col = idx % 3;
            const direction = col === 0 ? "left" : col === 2 ? "right" : "up";
            const delay = col * 100;

            return (
              <ScrollReveal
                key={item.id}
                direction={direction}
                delay={delay}
                duration={1000}
                distance={40}
              >
                <FurnitureCard
                  item={item}
                  onOpenModal={(selected) => setSelectedItem(selected)}
                />
              </ScrollReveal>
            );
          })}
        </div>

        {/* View All Button */}
        <ScrollReveal direction="up" delay={150} duration={1000} className="mt-12 text-center">
          <Link
            href="/furniture"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-sm tracking-wide shadow-xl hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-zinc-950 hover:text-zinc-950 transition-all hover:scale-102"
          >
            <span>Explore All 36 Catalog Creations with Full Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* Craftsmanship Journey Process */}
      <CraftsmanshipJourney />

      {/* Timber & Materials Guide */}
      <WoodSpeciesGuide />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to action Banner */}
      <BespokeBanner />

      {/* Technical Specifications Modal */}
      <FurnitureModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
