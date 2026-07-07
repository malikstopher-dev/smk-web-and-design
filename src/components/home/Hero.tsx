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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[var(--color-bg)] overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center flex-1">
        <div className="px-8 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-36 md:pt-48 pb-16 md:pb-24">
          <motion.div
            className="flex items-center gap-6 mb-10 md:mb-14"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              Est. 2021
            </span>
            <span className="w-px h-4 bg-[var(--color-text-dim)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              Johannesburg
            </span>
          </motion.div>

          <div className="max-w-5xl">
            <motion.h1
              className="heading-hero text-[var(--color-text-primary)] select-none"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              Websites that
              <br />
              <span className="italic" style={{ color: "var(--color-accent)" }}>
                grow
              </span>
              {" "}your business
            </motion.h1>
          </div>

          <motion.div
            className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          >
            <div className="flex-1">
              <p className="text-base md:text-lg leading-relaxed max-w-md text-[var(--color-text-muted)]">
                Johannesburg-based web design studio creating premium websites that convert visitors into customers.
              </p>
              <div className="hidden md:block w-20 h-px bg-[var(--color-accent)]/30 mt-8" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn-accent">
                Start Your Project →
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="border-t border-white/[0.04] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
