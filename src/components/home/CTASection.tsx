"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--color-bg)] overflow-hidden">
      <div className="section-light" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Let&apos;s Work Together</p>
          <h2 className="heading-xl max-w-3xl mx-auto" style={{ color: "var(--color-text-primary)" }}>
            Ready to grow your business?
          </h2>
          <div className="mt-10">
            <a className="btn-accent text-base px-12 py-5" href="/contact">
              Book a Free Consultation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
