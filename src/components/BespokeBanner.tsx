import React from "react";
import Link from "next/link";
import { Sparkles, PhoneCall, MessageSquareQuote, ArrowRight, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BespokeBanner() {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-b from-zinc-900 to-black text-white relative overflow-hidden border-t border-amber-950/40">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <ScrollReveal direction="down" duration={1000}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            Turn Your Spatial Vision Into Timeless Woodcraft
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={1000}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
            Have a Custom Furniture Concept in Mind?
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="right" duration={1000} delay={100}>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Whether you need a custom-dimensioned teak master bed, an architecturally carved temple mandir, or a complete turnkey home interior woodwork package — we bring master craftsmanship directly to your doorstep.
          </p>
        </ScrollReveal>

        {/* Action CTAs */}
        <ScrollReveal direction="up" duration={1000} delay={150}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-103 cursor-pointer"
            >
              <MessageSquareQuote className="w-5 h-5" />
              Request Free Estimation & 3D Consult
            </Link>
            <a
              href="https://wa.me/919820879871?text=Hello%20Rajesh%20Furniture%20Works,%20I%20would%20like%20to%20inquire%20about%20custom%20woodwork."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-medium text-sm border border-zinc-700 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              WhatsApp (+91 9820879871)
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={250} duration={1000}>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              15-Year Structural Warranty
            </span>
            <span>•</span>
            <span>100% Genuine Solid Teak & Hardwood</span>
            <span>•</span>
            <span>Doorstep Delivery & Precision Fitting</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
