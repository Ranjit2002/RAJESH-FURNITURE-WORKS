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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl xl:max-w-6xl max-h-[94vh] flex flex-col my-auto bg-white dark:bg-[#14100d] border border-amber-900/20 dark:border-amber-500/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-[#1b1612]/90 shrink-0">
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

        {/* Modal Scrollable Body: Image on LEFT, Specifications on RIGHT */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-7 max-h-[calc(94vh-105px)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT SIDE: Full Image Showcase (Shows the WHOLE image without clipping) */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 shadow-xl flex items-center justify-center p-3 sm:p-4 group">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle caption overlay at the bottom */}
                <div className="absolute bottom-3 inset-x-3 text-white text-xs bg-black/70 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="font-serif font-bold text-amber-300 truncate mr-2">
                    Rajesh Furniture Works Masterpiece
                  </span>
                  <span className="text-zinc-300 text-[11px] shrink-0">100% Solid Seasoned Wood</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Specifications & Details */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Title & Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                  {item.name}
                </h2>
                <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.longDescription}
                </p>
              </div>

              {/* Pricing & Craft Time Banner */}
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-500/25 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold block">
                    Commission Status
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 block mt-0.5">
                    {item.priceTag}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>{item.craftTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/contact?item=${encodeURIComponent(item.name)}`}
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  Request Custom Quote
                </Link>
                <a
                  href={`https://wa.me/919820879871?text=${encodeURIComponent(
                    `Hello Rajesh Furniture Works, I am interested in inquiring about this piece: ${item.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-600/40 hover:border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-sm transition-all"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              {/* Specifications Grid */}
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-3.5">
                <h3 className="text-base font-serif font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-amber-500" />
                  Technical Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <Layers className="w-3.5 h-3.5" />
                      Wood Type & Core
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.woodType}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      Finish & Polish
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.finish}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <Ruler className="w-3.5 h-3.5" />
                      Dimensions
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.dimensions}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <Wrench className="w-3.5 h-3.5" />
                      Hardware & Joinery
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.hardware}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Warranty & Longevity
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.warranty}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                      <Clock className="w-3.5 h-3.5" />
                      Handcrafting Time
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item.craftTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Handcrafted Highlights */}
              {item.features && item.features.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    Artisan Quality Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bespoke Customization Notice */}
              <div className="text-xs text-zinc-500 dark:text-zinc-400 p-3.5 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-zinc-800 dark:text-zinc-200">Bespoke Customization Guarantee: </strong>
                  {item.customization} Every piece at Rajesh Furniture Works is built to order. We adjust dimensions, timber selection (Teak, Sheesham, Oak, Rosewood), storage configurations, and polish sheen to match your room blueprint.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-7 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#181310] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
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
