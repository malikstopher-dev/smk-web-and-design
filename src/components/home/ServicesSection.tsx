"use client";

import Link from "next/link";
import { services } from "@/lib/content";
import { motion } from "framer-motion";

const shortDescriptions: Record<string, string> = {
  "web-design": "Custom, high-performance websites built to convert visitors into paying customers.",
  ecommerce: "Secure, conversion-optimised online stores that drive sales from day one.",
  seo: "Rank on Google with technical SEO, local search optimisation, and content strategy.",
  maintenance: "Ongoing care, security updates, and performance monitoring to keep your site at its best.",
};

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
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ServicesSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-28 md:py-36 bg-[var(--color-bg)]">
      <div className="section-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Services</p>
          <h2 className="heading-xl max-w-3xl" style={{ color: "var(--color-text-primary)" }}>
            What we build
          </h2>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 md:py-10 border-t border-white/[0.04] transition-all duration-500 hover:opacity-90 hover:bg-[var(--color-accent-soft)] hover:px-6 -mx-6 rounded-lg"
                data-cursor="link"
              >
                <span className="text-[11px] font-mono tracking-[0.15em] text-[var(--color-text-dim)] shrink-0 md:w-12">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-2xl md:text-3xl font-[var(--font-display)] tracking-[-0.02em]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                    <span className="inline-block ml-3 text-[var(--color-accent)] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">→</span>
                  </h3>
                  <p className="text-sm mt-2 max-w-xl leading-relaxed text-[var(--color-text-muted)]">
                    {shortDescriptions[service.id]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
