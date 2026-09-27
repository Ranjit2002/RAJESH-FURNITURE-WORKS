"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FURNITURE_DATA, CATEGORIES, FurnitureItem } from "@/data/furniture";
import { FurnitureCard } from "@/components/FurnitureCard";
import { FurnitureModal } from "@/components/FurnitureModal";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Layers,
  ArrowRight,
  X,
  CheckCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

function FurnitureCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("cat") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);

  const filteredItems = useMemo(() => {
    return FURNITURE_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.woodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10 overflow-hidden">
      {/* Header Banner */}
      <ScrollReveal direction="down" duration={2000}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Workshop Catalog
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            Handcrafted Furniture Collection
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Explore all 36 bespoke masterworks created by Rajesh Furniture Works. Click any item card to open the technical specifications modal with dimensions, wood type, joinery, and customization details.
          </p>
        </div>
      </ScrollReveal>

      {/* Search & Category Filter Controls */}
      <ScrollReveal direction="up" delay={100} duration={2000}>
        <div className="space-y-4 bg-zinc-50 dark:bg-[#15110e] p-4 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-amber-950/40 shadow-sm">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by furniture name, teak, sheesham, mandir, bed, wardrobe, kitchen..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              const count =
                category === "All"
                  ? FURNITURE_DATA.length
                  : FURNITURE_DATA.filter((i) => i.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/20"
                      : "bg-white dark:bg-[#0e0a08] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-zinc-950/20 text-zinc-950 font-extrabold"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <span>
              Showing <strong className="text-zinc-900 dark:text-zinc-100">{filteredItems.length}</strong> of{" "}
              <strong>{FURNITURE_DATA.length}</strong> master pieces
            </span>
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-amber-600 dark:text-amber-400 font-medium hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Furniture Cards - Maximum grid-cols-3 with scroll-triggered animations */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            // Alternating entrance animation for luxury look:
            // Column 1 comes from left, Column 2 rises up, Column 3 comes from right
            const col = idx % 3;
            const direction = col === 0 ? "left" : col === 2 ? "right" : "up";
            const delay = col * 90;

            return (
              <ScrollReveal
                key={item.id}
                direction={direction}
                delay={delay}
                duration={2000}
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
      ) : (
        <div className="p-12 text-center bg-zinc-50 dark:bg-[#14100d] rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-4">
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            No furniture pieces matched &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider"
          >
            Show All 36 Catalog Creations
          </button>
        </div>
      )}

      {/* Modal with full specifications */}
      <FurnitureModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default function FurnitureCatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-zinc-500">
          Loading furniture gallery...
        </div>
      }
    >
      <FurnitureCatalogContent />
    </Suspense>
  );
}
