import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hammer,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Compass,
  TreePine,
  CheckCircle2,
  PhoneCall,
  Clock,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us | Rajesh Furniture Works - Heritage Woodcraft & Bespoke Interiors",
  description:
    "Learn about the 25-year heritage of Rajesh Furniture Works, our master artisans, kiln-seasoned timber, and commitment to 100% solid hardwood craftsmanship.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: TreePine,
      title: "100% Genuine Timber",
      desc: "We exclusively hand-select Grade-A CP Teakwood, Indian Sheesham, and European White Oak. We never cut corners with cheap particle board or hollow cardboard cores.",
    },
    {
      icon: Hammer,
      title: "Generational Joinery",
      desc: "Our senior carpenters employ age-old mortise-and-tenon pegged joints, sliding dovetails, and precision lap joints that maintain structural rigidity for decades.",
    },
    {
      icon: ShieldCheck,
      title: "15-Year Comprehensive Warranty",
      desc: "Every custom creation is pressure-treated against wood-borers and termites, backed by our rock-solid 15-year structural warranty.",
    },
    {
      icon: Award,
      title: "Bespoke Customization",
      desc: "No cookie-cutter molds. Dimensions, storage layouts, wood stains, and upholstery are individually engineered to harmonize with your home’s architecture.",
    },
  ];

  const masters = [
    {
      name: "Rajesh Vishwakarma",
      role: "CEO & Company Head",
      experience: "35+ Years of Experience",
      brotherTitle: "Elder Brother & CEO",
      bio: "As CEO, Rajesh Vishwakarma runs the company, guiding strategic vision, client partnerships, and large-scale architectural wood projects with over 35 years of timber leadership.",
      specialty: "Company Leadership & Turnkey Architectural Projects",
    },
    {
      name: "Ramesh Vishwakarma",
      role: "Master Craftsman & Head of Woodcraft",
      experience: "28+ Years of Experience",
      brotherTitle: "Brother & Master Craftsman",
      bio: "The master craftsman of the family, Ramesh Vishwakarma commands 28+ years of hand-chiseling artistry, specializing in sacred temple mandirs, floral door reliefs, and solid teak joinery.",
      specialty: "Hand-Carved Sacred Mandirs & Traditional Teak Joinery",
    },
    {
      name: "Bijendra Vishwakarma",
      role: "Precision Working & Modular Specialist",
      experience: "10+ Years of Experience",
      brotherTitle: "Brother & Precision Specialist",
      bio: "Renowned for his exceptional skill of precision working, Bijendra Vishwakarma brings millimeter accuracy to modern modular kitchens, luxury wardrobes, and high-tolerance CNC craftsmanship.",
      specialty: "Precision Woodworking, Modular Kitchens & Wardrobes",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-20 overflow-x-hidden">
      {/* Hero Story Banner */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <ScrollReveal direction="left" duration={750} distance={45} className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5" />
            Our Heritage & Story
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Crafting Heirlooms from Raw Hardwood Since 2001
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
            At Rajesh Furniture Works, we believe that true luxury is not manufactured on mass assembly lines — it is sculpted with patient human hands, seasoned timber, and uncompromised joinery.
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Over the past quarter-century, our workshop has transformed from a modest local carpentry shed into a celebrated bespoke furniture studio. We have delivered over 3,500 custom commissions across luxury villas, modern apartments, and private sanctuaries, all while holding steadfast to our core creed: honest timber, zero synthetic fillers, and lifelong durability.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#16120f] border border-zinc-200 dark:border-amber-950/40">
              <span className="font-serif font-black text-2xl sm:text-3xl text-amber-600 dark:text-amber-400 block">
                2001
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Year Founded
              </span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#16120f] border border-zinc-200 dark:border-amber-950/40">
              <span className="font-serif font-black text-2xl sm:text-3xl text-amber-600 dark:text-amber-400 block">
                3,500+
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Homes Transformed
              </span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-[#16120f] border border-zinc-200 dark:border-amber-950/40 col-span-2 sm:col-span-1">
              <span className="font-serif font-black text-2xl sm:text-3xl text-amber-600 dark:text-amber-400 block">
                100%
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                Solid Wood Focus
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Image Banner */}
        <ScrollReveal direction="right" duration={750} distance={45} className="lg:col-span-5">
          <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-amber-950/50 bg-zinc-900 group">
            <Image
              src="/furniture/hall_1.jpg"
              alt="Rajesh Furniture Works Craftsmanship Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 space-y-1">
              <span className="text-amber-400 font-serif font-bold text-lg block">
                The Rajesh Furniture Standard
              </span>
              <p className="text-xs text-zinc-300">
                Every curve hand-sculpted, every surface hand-buffed to perfection.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Craftsmanship Pillars */}
      <section className="space-y-10">
        <ScrollReveal direction="up" duration={650}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Our Guiding Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Why Our Furniture Endures for Generations
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              In an era of disposable flat-pack furniture, we proudly champion timeless timber integrity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            // Pillars 0 & 1 from left, 2 & 3 from right
            const direction = idx < 2 ? "left" : "right";
            const delay = (idx % 2) * 120;

            return (
              <ScrollReveal
                key={idx}
                direction={direction}
                delay={delay}
                duration={700}
                distance={35}
              >
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#14100d] border border-zinc-200/80 dark:border-amber-950/40 hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Meet the Master Craftsmen - The Vishwakarma Brothers */}
      <section className="space-y-10">
        <ScrollReveal direction="up" duration={650}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              The Vishwakarma Brothers
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Brothers in Woodcraft & Leadership
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Rajesh Furniture Works is proudly driven by the three Vishwakarma brothers — uniting over 73 combined years of business stewardship, heirloom hand-carving, and modern precision engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {masters.map((master, idx) => {
            // Rajesh (CEO) from left, Ramesh (Craftsman) from up, Bijendra (Precision) from right
            const direction = idx === 0 ? "left" : idx === 2 ? "right" : "up";
            const delay = idx * 120;

            return (
              <ScrollReveal
                key={idx}
                direction={direction}
                delay={delay}
                duration={750}
                distance={40}
              >
                <div className="p-7 rounded-2xl bg-white dark:bg-[#16120f] border border-zinc-200/80 dark:border-amber-950/40 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-serif font-black text-xl">
                        {master.name.charAt(0)}
                      </div>
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        {master.brotherTitle}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-zinc-900 dark:text-zinc-100">
                        {master.name}
                      </h3>
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 block mt-0.5">
                        {master.role}
                      </span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-medium">
                        {master.experience}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {master.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-xs">
                    <span className="text-zinc-500 dark:text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">
                      Core Mastery:
                    </span>
                    <span className="font-medium text-amber-700 dark:text-amber-400/90 mt-0.5 block">
                      {master.specialty}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Workshop Visit Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-amber-600 via-amber-700 to-amber-800 text-zinc-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <ScrollReveal direction="left" duration={700} className="space-y-2 max-w-xl text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-zinc-950">
            Visit Our Workshop & Touch the Seasoned Timber
          </h3>
          <p className="text-sm text-zinc-900/90 leading-relaxed">
            Nothing compares to smelling freshly milled teak shavings and inspecting timber grain in person. Schedule a walkthrough of our workshop.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="right" duration={700} className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm tracking-wide shadow-xl transition-all"
          >
            <Clock className="w-4 h-4 text-amber-400" />
            Book Workshop Visit
          </Link>
          <Link
            href="/furniture"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 text-zinc-950 font-bold text-sm backdrop-blur-md border border-zinc-950/20 transition-all"
          >
            Browse Catalog
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
