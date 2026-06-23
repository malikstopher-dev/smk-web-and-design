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

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0F]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse at center, rgba(191, 255, 0, 0.06) 0%, transparent 60%)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03) 0%, transparent 60%)", filter: "blur(100px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />
      </div>

      <div className="relative z-10" style={{ padding: "140px 6vw 100px" }}>
        <div className="max-w-[95vw] md:max-w-[90vw]">
          <div className="overflow-hidden">
            <motion.span
              className="block heading-hero select-none"
              style={{ color: "var(--color-text-dim)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              WE DESIGN
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block heading-hero select-none"
              style={{ color: "var(--color-text-primary)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              DIGITAL
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block heading-hero select-none"
              style={{ color: "var(--color-accent)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              EXPERIENCES
            </motion.span>
          </div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-10 mt-14 md:mt-20 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-base leading-relaxed md:text-lg max-w-lg" style={{ color: "var(--color-text-muted)" }}>
            Johannesburg-based web design studio creating premium websites that convert visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="btn-accent" data-cursor="cta" href="/contact">
              Book a Consultation →
            </a>
            <a className="btn-outline" href="/portfolio">
              View Work →
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-[var(--color-border)] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {clients.map((name) => (
                <span
                  key={name}
                  className="text-[11px] uppercase tracking-[0.2em] whitespace-nowrap"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  {name}
                  <span className="ml-12 opacity-20">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
