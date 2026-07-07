"use client";

import { processSteps } from "@/lib/content";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProcessSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-32 md:py-44 bg-[var(--color-bg)]">
      <div className="section-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Process</p>
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            How we work
          </h2>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28 grid md:grid-cols-5 gap-8 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative"
            >
              <span className="text-[11px] font-mono tracking-[0.15em] text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3
                className="text-xl md:text-2xl font-display tracking-[-0.01em] mt-4 mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-6 text-[var(--color-text-dim)] opacity-30">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical list */}
        <div className="md:hidden mt-16 space-y-12">
          {processSteps.map((step) => (
            <div key={step.number} className="border-t border-white/[0.04] pt-8">
              <span className="text-[11px] font-mono tracking-[0.15em] text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3
                className="text-xl font-display mt-3 mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
