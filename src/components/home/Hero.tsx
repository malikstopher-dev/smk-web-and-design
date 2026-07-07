"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RegistrationMark } from "@/components/ui/RegistrationMark";

const clients = [
  "Selrahc Architects",
  "The Boma Café",
  "JKJ SolarTech",
  "Gauteng Business Hub",
  "Sandton Chamber",
  "Jozi Tech Startups",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-bg)]">
      <motion.div
        className="relative z-10 flex flex-col justify-center flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* registration marks framing the hero */}
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex justify-between">
            <motion.div variants={itemVariants}>
              <RegistrationMark corner="tl" length={20} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <RegistrationMark corner="tr" length={20} />
            </motion.div>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full py-8 md:py-12">
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-6"
            variants={itemVariants}
          >
            Proof Sheet — SMK
          </motion.p>

          <div className="overflow-hidden">
            <motion.span
              className="block heading-hero select-none"
              style={{ color: "var(--color-text-dim)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
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
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              DIGITAL
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block heading-hero select-none"
              style={{ color: "var(--color-text-primary)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              EXPERIENCES
            </motion.span>
          </div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-start gap-10 mt-14 md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
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

        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex justify-between">
            <motion.div variants={itemVariants}>
              <RegistrationMark corner="bl" length={20} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <RegistrationMark corner="br" length={20} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-[var(--color-border)] py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {clients.map((name) => (
                <span
                  key={name}
                  className="text-[10px] uppercase tracking-[0.25em] whitespace-nowrap font-mono"
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
