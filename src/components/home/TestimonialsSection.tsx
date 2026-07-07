"use client";

import { testimonials } from "@/lib/content";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TestimonialsSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-28 md:py-36 bg-[var(--color-bg)] overflow-hidden">
      <div className="section-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-label mb-5">✦ Social Proof</p>
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            What Clients Say
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-[var(--color-surface)]/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent-border)]"
            >
              <span className="absolute top-4 right-6 text-5xl font-[var(--font-display)] leading-none text-[var(--color-accent)]/5 select-none pointer-events-none" aria-hidden="true">
                &ldquo;
              </span>
              <div className="text-[var(--color-accent)] text-xs tracking-[0.15em] mb-5 select-none">
                ★★★★★
              </div>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.name}
                </p>
                <p className="text-[11px] font-mono tracking-[0.1em] text-[var(--color-text-dim)] mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
