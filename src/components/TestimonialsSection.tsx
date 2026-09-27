import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Dr. Arvind & Sunita Sharma",
      role: "Villa Owners, Palm Meadows",
      project: "Custom Teakwood King Bed & Hand-Carved Mandir",
      quote:
        "Rajesh Furniture Works built our master bedroom bed and pooja mandir. The carving on the mandir's shikhara is nothing short of divine temple art. You can feel the sheer density and quality of genuine solid teak. Five years later, it still looks as pristine as day one.",
      rating: 5,
    },
    {
      name: "Meera Raghunathan",
      role: "Principal Interior Architect, Studio Forma",
      project: "Turnkey Modular Kitchen & Fluted Living Console",
      quote:
        "As an architect, I am exceedingly strict about joinery, veneer grain matching, and tolerances. Rajesh Furniture Works executed my bespoke kitchen and living room wall unit to millimeter perfection. Their Blum fittings and PU polish quality rival European luxury imports.",
      rating: 5,
    },
    {
      name: "Vikram Singhania",
      role: "Penthouse Owner",
      project: "Floor-to-Ceiling Wardrobes & 8-Seater Teak Dining",
      quote:
        "We ordered the tinted glass wardrobe with internal sensor lighting and a solid teak 8-seater dining table. The craftsmanship blew everyone away during our housewarming. The team was polite, respectful of our home during installation, and delivered right on schedule.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0c0907] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Client Accolades
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Trusted by Connoisseurs of Fine Wood
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Over 3,500 homeowners, interior designers, and architects have entrusted their dream furniture commissions to our workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#14100d] border border-zinc-200/80 dark:border-amber-950/40 hover:border-amber-500/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-500/30" />
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  {rev.name}
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {rev.role}
                </p>
                <div className="mt-2 inline-block px-2.5 py-1 text-[11px] font-medium rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                  Project: {rev.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
