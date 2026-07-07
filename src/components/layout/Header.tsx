"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#0A0A0F]/80 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-display tracking-[0.15em] text-[var(--color-text-primary)] font-medium hover:opacity-70 transition-opacity duration-500"
        >
          SMK
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-all duration-500 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[#0A0A0F] text-[12px] font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-accent-hover)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(191,255,0,0.2)]"
          >
            Start a Project
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#0A0A0F]/98 flex flex-col items-center justify-center gap-12 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-display tracking-[-0.02em] text-white/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 px-8 py-4 rounded-full bg-[var(--color-accent)] text-[#0A0A0F] text-sm font-semibold uppercase tracking-wider"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
