"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  "Selrahc Architects",
  "The Boma Café",
  "JKJ SolarTech",
  "Gauteng Business Hub",
  "Sandton Chamber",
  "Jozi Tech Startups",
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[var(--color-bg)] overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col justify-center flex-1"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="px-8 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-32 md:pt-40 pb-16 md:pb-24">
          {/* Est./years row */}
          <motion.div
            className="flex items-center gap-6 mb-12 md:mb-16"
            variants={fadeUp}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-dim)] font-mono">
              Est. 2021
            </span>
            <span className="w-px h-4 bg-[var(--color-text-dim)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-dim)] font-mono">
              Johannesburg
            </span>
          </motion.div>

          {/* Editorial headline */}
          <div className="max-w-5xl">
            <motion.h1
              className="heading-hero text-[var(--color-text-primary)] select-none"
              variants={fadeUp}
            >
              Websites that
              <br />
              <span className="italic" style={{ color: "var(--color-accent)" }}>
                grow
              </span>
              {" "}your business
            </motion.h1>
          </div>

          {/* Supporting row */}
          <motion.div
            className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl"
            variants={fadeUp}
          >
            <p className="text-base md:text-lg leading-relaxed max-w-md text-[var(--color-text-muted)]">
              Johannesburg-based web design studio creating premium websites that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="btn-accent"
              >
                Start Your Project
                <span className="text-base opacity-60 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Client trust bar */}
      <motion.div
        className="border-t border-white/[0.04] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {clients.map((name) => (
                <span
                  key={name}
                  className="text-[10px] uppercase tracking-[0.25em] whitespace-nowrap text-[var(--color-text-dim)]"
                >
                  {name}
                  <span className="ml-12 opacity-20">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
