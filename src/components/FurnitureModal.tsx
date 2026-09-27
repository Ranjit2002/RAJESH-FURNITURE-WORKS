"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FurnitureItem } from "@/data/furniture";
import {
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  Ruler,
  Layers,
  Wrench,
  CheckCircle2,
  PhoneCall,
  MessageSquareShare,
  SlidersHorizontal,
} from "lucide-react";

interface FurnitureModalProps {
  item: FurnitureItem | null;
  onClose: () => void;
}

export function FurnitureModal({ item, onClose }: FurnitureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl max-h-[92vh] flex flex-col my-auto bg-white dark:bg-[#14100d] border border-amber-900/20 dark:border-amber-500/20 rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-[#1b1612]/90 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              {item.category}
            </span>
            {item.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <Sparkles className="w-3 h-3" />
                {item.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* BIG Image Showcase on Top */}
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl group">
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-contain sm:object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-center justify-between">
              <span className="font-serif font-bold text-amber-300">
                Rajesh Furniture Works Masterpiece
              </span>
              <span className="text-zinc-300 text-xs">100% Solid Seasoned Wood</span>
            </div>
          </div>

          {/* Title, Narrative, and Quick Actions directly Below the Image */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                  {item.name}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                  {item.longDescription}
                </p>
              </div>

              {/* Price Tag & Lead Time Pill */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-500/20 shrink-0 min-w-[200px]">
                <span className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold block">
                  Commission Status
                </span>
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 block mt-0.5">
                  {item.priceTag}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 mt-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.craftTime}</span>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={`/contact?item=${encodeURIComponent(item.name)}`}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Request Custom Quote for This Piece
              </Link>
              <a
                href={`https://wa.me/919820879871?text=${encodeURIComponent(
                  `Hello Rajesh Furniture Works, I am interested in inquiring about this piece: ${item.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-600/40 hover:border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-all"
              >
                <MessageSquareShare className="w-4 h-4" />
                WhatsApp Direct (+91 9820879871)
              </a>
            </div>
          </div>

          {/* Full Technical Specifications Written Below the Image */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-amber-500" />
              Technical Specifications & Craft Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <Layers className="w-4 h-4" />
                  Wood Type & Core
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.woodType}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  Finish & Polish
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.finish}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <Ruler className="w-4 h-4" />
                  Dimensions
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.dimensions}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <Wrench className="w-4 h-4" />
                  Hardware & Joinery
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.hardware}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  Warranty & Longevity
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.warranty}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  <Clock className="w-4 h-4" />
                  Handcrafting Time
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {item.craftTime}
                </p>
              </div>
            </div>
          </div>

          {/* Key Handcrafted Highlights */}
          {item.features && item.features.length > 0 && (
            <div className="p-5 rounded-xl bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/15">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Artisan Quality Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bespoke Customization Notice */}
          <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 p-4 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-zinc-800 dark:text-zinc-200">Bespoke Customization Guarantee: </strong>
              {item.customization} Every piece at Rajesh Furniture Works is built to order. We adjust dimensions, timber selection (Teak, Sheesham, Oak, Rosewood), storage configurations, and polish sheen to match your home&apos;s architectural layout.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#181310] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
          <span>Item Ref: {item.id}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium transition-colors cursor-pointer"
          >
            Close Specifications
          </button>
        </div>
      </div>
    </div>
  );
}
