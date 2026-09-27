import React from "react";
import { Compass, Hammer, Sparkles, Truck, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CraftsmanshipJourney() {
  const steps = [
    {
      num: "01",
      title: "Consultation & 3D Blueprinting",
      desc: "We discuss your spatial needs, architectural aesthetics, lifestyle preferences, and take laser-accurate site measurements to generate bespoke 3D renders.",
      icon: Compass,
      tag: "Concept & Dimensions",
    },
    {
      num: "02",
      title: "Kiln-Seasoned Hardwood Curation",
      desc: "Each plank of Grade-A CP Teakwood, Sheesham, or Oak is hand-inspected for natural grain continuity, vacuum pressure-treated, and kiln-dried to optimal 8-12% moisture.",
      icon: CheckCircle2,
      tag: "Moisture & Termite Shield",
    },
    {
      num: "03",
      title: "Artisan Joinery & Hand-Carving",
      desc: "Our senior master carpenters sculpt mortise-and-tenon interlocking joints, dovetails, fluted acoustic panels, and intricate relief carvings with zero synthetic fillers.",
      icon: Hammer,
      tag: "Generational Skill",
    },
    {
      num: "04",
      title: "Multi-Coat Polish & Home Fitting",
      desc: "Finished with premium Italian Polyurethane silk matte or organic Danish wax oils, transported in protective multi-layer packaging, and fitted seamlessly by our install crew.",
      icon: Sparkles,
      tag: "Flawless Delivery",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0c0907] transition-colors relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Creation Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              How Your Masterpiece Is Born
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              From raw forest timber to your living sanctuary — every piece at Rajesh Furniture Works is an unhurried labor of love and generational precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            // Steps 1 & 2 come from left, steps 3 & 4 come from right
            const direction = index < 2 ? "left" : "right";
            const delay = (index % 2) * 120;

            return (
              <ScrollReveal
                key={index}
                direction={direction}
                delay={delay}
                duration={700}
                distance={35}
              >
                <div className="relative p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-[#15110e] border border-zinc-200/80 dark:border-amber-950/40 hover:border-amber-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-serif font-black text-2xl sm:text-3xl text-amber-500/40 group-hover:text-amber-500 transition-colors">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400/90">
                      {step.tag}
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
