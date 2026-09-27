"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquareShare,
  Calendar,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledItem = searchParams.get("item") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    furnitureType: prefilledItem || "Master Bedroom Bed",
    budget: "Custom / Flexible",
    roomDimensions: "",
    message: prefilledItem
      ? `Hello Rajesh Furniture Works, I would like to receive a custom quote and timeline for: ${prefilledItem}.`
      : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledItem) {
      setFormData((prev) => ({
        ...prev,
        furnitureType: prefilledItem,
        message: `Hello Rajesh Furniture Works, I would like to receive a custom quote and timeline for: ${prefilledItem}.`,
      }));
    }
  }, [prefilledItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const faqs = [
    {
      q: "Do you offer on-site space measurement visits?",
      a: "Yes. Our senior carpenter or space consultant visits your residence to take precision laser measurements, check electrical points, and assess room lighting before starting production.",
    },
    {
      q: "Can I choose my own wood species, polish shade, and upholstery?",
      a: "Absolutely. Every piece at Rajesh Furniture Works is completely bespoke. You can select between Grade-A Teakwood, Sheesham, Oak, or Marine Ply, along with 10+ polish shades and hundreds of fabric choices.",
    },
    {
      q: "How does payment and warranty work?",
      a: "We work on a transparent milestone basis (initial deposit upon 3D approval, mid-phase joinery inspection, and balance upon installation). All solid wood pieces come backed by our 15-year structural warranty.",
    },
    {
      q: "Do you deliver and install outside your home city?",
      a: "Yes! We regularly crate and transport bespoke furniture across the country with protective shock-absorbing packaging and send our installation technicians for seamless setup.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          Direct Workshop Contact
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
          Request a Custom Furniture Quote
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Tell us about your spatial requirements, preferred wood species, or specific piece you wish to commission. We will prepare an itemized estimate and 3D concept.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white dark:bg-[#14100d] p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-amber-950/40 shadow-xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-zinc-900 dark:text-zinc-100">
                Inquiry Received!
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-amber-500">{formData.name || "valued client"}</strong>. Master Craftsman Rajesh and our design team will review your specifications for{" "}
                <strong>{formData.furnitureType}</strong> and contact you within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                  Custom Woodwork Consultation
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Fill in your details below. We guarantee 100% privacy and zero spam.
                </p>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              {/* Email & Furniture Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Furniture Category / Item
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Master Bed, Mandir, Kitchen, Wardrobe..."
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              {/* Room Dimensions & Preferred Timber */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Approx Room / Wall Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 14ft x 12ft Bedroom or 8ft TV wall"
                    value={formData.roomDimensions}
                    onChange={(e) => setFormData({ ...formData, roomDimensions: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Budget Expectation
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  >
                    <option value="Single Piece Bespoke">Single Piece Bespoke (Bed / Mandir / Sofa)</option>
                    <option value="Room Complete Suite">Full Room Suite (Bed + Wardrobe + Wall)</option>
                    <option value="Modular Kitchen Turnkey">Complete Modular Kitchen Turnkey</option>
                    <option value="Full House Turnkey Woodwork">Full Villa / Flat Turnkey Woodwork</option>
                    <option value="Custom / Flexible">Custom / Let&apos;s Discuss</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Project Description or Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your design preferences, wood type (Teak/Sheesham/Oak), polish shade, or any questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-[#0e0a08] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Custom Furniture Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Cards Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Workshop Details Card */}
          <div className="p-7 rounded-3xl bg-zinc-50 dark:bg-[#15110e] border border-zinc-200/80 dark:border-amber-950/40 shadow-lg space-y-5">
            <h3 className="font-serif font-bold text-xl text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              Workshop & Studio Details
            </h3>

            <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-base text-zinc-900 dark:text-zinc-50 font-bold block">
                    Workshop & Display Studio
                  </strong>
                  <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/25 text-sm text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed">
                    204, 2nd Floor, D-2,<br />
                    Shree Ganesh Residency, Maitri Park,<br />
                    Kasheli, Bhiwandi, Maharashtra 421302
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shree+Ganesh+Residency+Maitri+Park+Kasheli+Bhiwandi+Maharashtra+421302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:text-amber-500 font-semibold pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <MapPin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-zinc-900 dark:text-zinc-100 block">
                    Direct Phone Numbers
                  </strong>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 space-y-0.5">
                    <p>
                      <a href="tel:+919820879871" className="hover:text-amber-500 transition-colors font-medium">
                        +91 9820879871
                      </a>
                    </p>
                    <p>
                      <a href="tel:+919920706036" className="hover:text-amber-500 transition-colors font-medium">
                        +91 9920706036
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-zinc-900 dark:text-zinc-100 block">
                    Email Inquiries
                  </strong>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 space-y-0.5">
                    <p>
                      <a href="mailto:vishwakarmaranjit8109@gmail.com" className="hover:text-amber-500 transition-colors font-medium break-all">
                        vishwakarmaranjit8109@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:rv9766444@gmail.com" className="hover:text-amber-500 transition-colors font-medium break-all">
                        rv9766444@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-zinc-900 dark:text-zinc-100 block">
                    Operating Timings
                  </strong>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Monday &ndash; Saturday: 9:00 AM &ndash; 8:30 PM<br />
                    Sunday: 9:00 AM &ndash; 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href="https://wa.me/919820879871?text=Hello%20Rajesh%20Furniture%20Works,%20I%20would%20like%20to%20discuss%20custom%20woodwork."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <MessageSquareShare className="w-4 h-4" />
                Chat on WhatsApp (+91 9820879871)
              </a>
            </div>
          </div>

          {/* Workshop Location & Physical Visit Card */}
          <div className="p-7 rounded-3xl bg-zinc-900 text-white border border-zinc-800 space-y-4 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Workshop Location
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                Open for Visits
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                Visit Us at Our Studio
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                Clients are welcome to inspect seasoned timber stock, joinery techniques, and discuss custom floorplans in person.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-800/90 border border-amber-500/30 flex items-start gap-2.5 text-xs text-zinc-200">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span className="font-medium leading-relaxed">
                204, 2nd Floor, D-2, Shree Ganesh Residency, Maitri Park, Kasheli, Bhiwandi, Maharashtra 421302
              </span>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shree+Ganesh+Residency+Maitri+Park+Kasheli+Bhiwandi+Maharashtra+421302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MapPin className="w-4 h-4" />
                Open Location on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <section className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#14100d] border border-zinc-200/80 dark:border-amber-950/40 space-y-2"
            >
              <h4 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-zinc-500">Loading contact page...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
