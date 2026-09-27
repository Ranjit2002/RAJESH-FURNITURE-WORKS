import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajesh Furniture Works | Master Woodcraft & Bespoke Interiors",
  description:
    "Rajesh Furniture Works handcrafts 100% solid teakwood master beds, sacred carved mandirs, luxury modular kitchens, sliding wardrobes, and turnkey wooden interiors with a 15-year warranty.",
  keywords: [
    "Rajesh Furniture Works",
    "Bespoke Furniture",
    "Solid Teak Wood Bed",
    "Carved Temple Mandir",
    "Modular Kitchen",
    "Custom Wardrobes",
    "Indian Woodcraft",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('rfw_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans bg-[#0c0908] text-[#f5f5f4] dark:bg-[#0c0908] dark:text-[#f5f5f4] selection:bg-amber-500 selection:text-zinc-950`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
