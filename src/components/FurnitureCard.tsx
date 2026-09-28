"use client";

import React from "react";
import Image from "next/image";
import { FurnitureItem } from "@/data/furniture";
import { getAssetPath } from "@/utils/imagePath";
import { Sparkles, Eye, ArrowUpRight, ShieldCheck, Hammer } from "lucide-react";

interface FurnitureCardProps {
  item: FurnitureItem;
  onOpenModal: (item: FurnitureItem) => void;
}

export function FurnitureCard({ item, onOpenModal }: FurnitureCardProps) {
  return (
    <div
      onClick={() => onOpenModal(item)}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white dark:bg-[#15110e] border border-zinc-200/80 dark:border-amber-950/40 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5"
    >
      {/* Visual Image Container - Big & High-Impact */}
      <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden bg-zinc-900">
        <Image
          src={getAssetPath(item.image)}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/20 group-hover:from-black/90 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-black/55 backdrop-blur-md text-amber-300 border border-white/15">
            {item.category}
          </span>
          {item.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-amber-500 text-zinc-950 shadow-md">
              <Sparkles className="w-3 h-3" />
              {item.badge}
            </span>
          )}
        </div>

        {/* Content written directly on the image */}
        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight drop-shadow-md group-hover:text-amber-300 transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-1 text-xs text-zinc-200/95 leading-relaxed line-clamp-2 drop-shadow-sm font-light">
            {item.shortDescription}
          </p>

          {/* Guarantee & Craftsmanship badge on image (NO dimensions written on image) */}
          <div className="mt-2.5 flex items-center gap-3 text-[11px] text-amber-300/90 font-medium">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              {item.warranty.split(" ")[0]} {item.warranty.split(" ")[1]}
            </span>
            <span className="inline-flex items-center gap-1">
              <Hammer className="w-3.5 h-3.5 text-amber-400" />
              Solid Woodcraft
            </span>
          </div>
        </div>

        {/* Floating Hover Indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <span className="p-2 rounded-full bg-amber-500 text-zinc-950 shadow-lg flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white dark:bg-[#16120f] transition-colors">
        <div className="space-y-2">
          <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span className="font-semibold text-amber-700 dark:text-amber-400/90">
              Primary Timber:
            </span>
            <span className="text-right truncate max-w-[65%] font-medium text-zinc-800 dark:text-zinc-200">
              {item.woodType.split("&")[0].trim()}
            </span>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span className="font-semibold text-amber-700 dark:text-amber-400/90">
              Finish:
            </span>
            <span className="text-right truncate max-w-[65%] text-zinc-700 dark:text-zinc-300">
              {item.finish.split("with")[0].trim()}
            </span>
          </div>
        </div>

        {/* Interactive CTA trigger */}
        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 group-hover:underline flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            Click for Full Specifications
          </span>
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            {item.priceTag}
          </span>
        </div>
      </div>
    </div>
  );
}
