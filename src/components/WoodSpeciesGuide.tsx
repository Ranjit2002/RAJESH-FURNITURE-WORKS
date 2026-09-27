import React from "react";
import { TreePine, Check, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WoodSpeciesGuide() {
  const woods = [
    {
      name: "Grade-A Indian CP Teak",
      origin: "Madhya Pradesh / Nilambur",
      durability: "50+ Years (Natural Oils)",
      bestFor: "Master Beds, Temple Mandirs, Main Doors",
      description:
        "Renowned as the king of hardwoods. High natural silica and teak oil content make it naturally immune to termites, moisture warping, and wood rot. Rich golden-brown patina that grows deeper with age.",
    },
    {
      name: "Indian Sheesham (Rosewood)",
      origin: "North & Central India",
      durability: "35+ Years High Hardness",
      bestFor: "Dining Tables, Coffee Tables, Heavy Consoles",
      description:
        "Celebrated for its dramatic dark-and-light grain contrast and exceptional load-bearing density. Perfect for heavy structural furniture and dining surfaces where natural grain depth is desired.",
    },
    {
      name: "BWP High-Density Marine Core",
      origin: "IS:710 Certified Marine Grade",
      durability: "25+ Years 100% Boiling Waterproof",
      bestFor: "Modular Kitchens, Wardrobe Internals, Vanities",
      description:
        "Bonded with unextended phenol formaldehyde resin under intense hydraulic pressure. Guaranteed zero delamination, zero fungal rot, and zero swelling even in humid coastal or kitchen environments.",
    },
    {
      name: "European White Oak & Beech",
      origin: "Sustainably Harvested FSC Timber",
      durability: "30+ Years Medium-Dense Grain",
      bestFor: "Scandinavian Slatted Panels, Modern Chairs",
      description:
        "Straight open-grain structure that absorbs modern matte stains beautifully. Imparts a breezy, contemporary European atmosphere favored by modern interior architects.",
    },
  ];

  return (
    <section className="py-20 bg-zinc-50 dark:bg-[#0f0c0a] border-y border-zinc-200/80 dark:border-amber-950/40 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal direction="left" duration={1000} className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <TreePine className="w-3.5 h-3.5" />
              Material Authenticity
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Our Wood Selection Guide
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              We never use particle board, hollow honeycomb cardboard, or low-grade MDF. Every creation starts with genuine kiln-dried logs.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={1000}>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 shrink-0 self-start md:self-auto">
              100% Non-Toxic & Termite Proof
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {woods.map((wood, idx) => {
            // Alternate left and right
            const direction = idx % 2 === 0 ? "left" : "right";
            const delay = Math.floor(idx / 2) * 120;

            return (
              <ScrollReveal
                key={idx}
                direction={direction}
                delay={delay}
                duration={1000}
                distance={35}
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-[#16120f] border border-zinc-200/80 dark:border-amber-950/40 hover:border-amber-500/40 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                          {wood.name}
                        </h3>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                          Sourced: {wood.origin}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 ml-2">
                        {wood.durability}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                      {wood.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                    <span className="text-zinc-500 dark:text-zinc-400">Prime Recommendation:</span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right ml-2">
                      {wood.bestFor}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
