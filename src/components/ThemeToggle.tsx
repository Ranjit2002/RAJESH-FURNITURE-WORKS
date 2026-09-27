"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-full border border-amber-500/20 bg-zinc-900/60 flex items-center justify-center ${className}`}
      >
        <Moon className="w-5 h-5 text-amber-400" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
        isDark
          ? "border-amber-500/30 bg-zinc-900/90 text-amber-400 hover:bg-zinc-800 hover:border-amber-400/60 shadow-lg shadow-amber-950/20"
          : "border-amber-600/20 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:border-amber-600/40 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100 -rotate-12" />
        )}
      </div>
    </button>
  );
}
