import React from "react";
import Link from "next/link";
import {
  Hammer,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ArrowRight,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0706] text-zinc-300 border-t border-amber-950/60 transition-colors">
      {/* Top Banner: Value Pillars */}
      <div className="border-b border-zinc-800/80 bg-[#0d0908]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">15-Year Warranty</h4>
                <p className="text-xs text-zinc-400">Termite & structural guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">100% Solid Wood</h4>
                <p className="text-xs text-zinc-400">Kiln-seasoned teak & hardwoods</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Master Artisans</h4>
                <p className="text-xs text-zinc-400">25+ years woodcraft heritage</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Bespoke Fitting</h4>
                <p className="text-xs text-zinc-400">Made to measure for your space</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-zinc-950 font-bold shadow-md">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">
                  Rajesh<span className="text-amber-400 ml-1">Furniture Works</span>
                </span>
                <p className="text-[10px] uppercase tracking-wider text-amber-400/80">
                  Master Woodcraft & Bespoke Interiors
                </p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Rajesh Furniture Works is a bespoke woodworking and furniture design workshop. We handcraft heirloom solid teakwood beds, grand carved temple mandirs, luxury modular kitchens, wardrobes, and architectural wooden interiors built to endure for generations.
            </p>
            <div className="pt-2">
              <Link
                href="/furniture"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Browse All 36 Catalog Masterpieces
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/furniture" className="hover:text-amber-400 transition-colors">
                  Furniture Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Our Craft
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/furniture?cat=Bedroom" className="hover:text-amber-400 transition-colors">
                  Master Beds & Suites
                </Link>
              </li>
              <li>
                <Link href="/furniture?cat=Living Room" className="hover:text-amber-400 transition-colors">
                  Living Hall Consoles & Sofas
                </Link>
              </li>
              <li>
                <Link href="/furniture?cat=Mandir / Temple" className="hover:text-amber-400 transition-colors">
                  Hand-Carved Mandir Temples
                </Link>
              </li>
              <li>
                <Link href="/furniture?cat=Modular Kitchen" className="hover:text-amber-400 transition-colors">
                  Waterproof Modular Kitchens
                </Link>
              </li>
              <li>
                <Link href="/furniture?cat=Wardrobes" className="hover:text-amber-400 transition-colors">
                  Floor-to-Ceiling Wardrobes
                </Link>
              </li>
              <li>
                <Link href="/furniture?cat=Doors & Architectural" className="hover:text-amber-400 transition-colors">
                  Royal Carved Doors & Wood Walls
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-serif">
              Workshop & Studio
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  204, 2nd Floor, D-2, Shree Ganesh Residency, Maitri Park, Kasheli, Bhiwandi, Maharashtra 421302
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:+919820879871" className="hover:text-amber-400 transition-colors block">
                    +91 9820879871
                  </a>
                  <a href="tel:+919920706036" className="hover:text-amber-400 transition-colors block">
                    +91 9920706036
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 break-all">
                  <a href="mailto:vishwakarmaranjit8109@gmail.com" className="hover:text-amber-400 transition-colors block">
                    vishwakarmaranjit8109@gmail.com
                  </a>
                  <a href="mailto:rv9766444@gmail.com" className="hover:text-amber-400 transition-colors block">
                    rv9766444@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-zinc-500">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 8:30 PM<br />Sunday: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/80 bg-black/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Rajesh Furniture Works. All rights reserved. Handcrafted with pride.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Request Visit
            </Link>
            <span>•</span>
            <Link href="/furniture" className="hover:text-zinc-300 transition-colors">
              Product Catalog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
