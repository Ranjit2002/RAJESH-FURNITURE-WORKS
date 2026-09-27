import React from "react";
import { Award, CheckCircle, Clock, ShieldCheck, Sparkles, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function StatsSection() {
  const stats = [
    {
      icon: Clock,
      value: "25+",
      label: "Years of Master Woodcraft",
      sub: "Founded in 2001, carrying heirloom timber traditions",
    },
    {
      icon: CheckCircle,
      value: "3,500+",
      label: "Bespoke Projects Completed",
      sub: "Villas, luxury apartments, and sacred sanctuaries",
    },
    {
      icon: Award,
      value: "100%",
      label: "Seasoned Solid Hardwood",
      sub: "Kiln-dried timber with zero synthetic fillers",
    },
    {
      icon: ShieldCheck,
      value: "15-Yr",
      label: "Comprehensive Warranty",
      sub: "Termite, borer, and structural integrity cover",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-zinc-100/70 dark:bg-[#110d0b]/80 border-y border-zinc-200 dark:border-amber-950/40 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            // First 2 come from left, last 2 come from right
            const direction = idx < 2 ? "left" : "right";
            const delay = (idx % 2) * 120;

            return (
              <ScrollReveal
                key={idx}
                direction={direction}
                delay={delay}
                duration={1000}
                distance={35}
              >
                <div className="relative p-6 rounded-2xl bg-white dark:bg-[#181310] border border-zinc-200/80 dark:border-amber-900/30 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-serif font-black text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {stat.sub}
                  </div>
                  <div className="absolute top-4 right-4 text-amber-500/20 group-hover:text-amber-500/40 transition-colors">
                    <Sparkles className="w-4 h-4" />
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
