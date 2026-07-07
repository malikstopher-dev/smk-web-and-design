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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function ServicesSection() {
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
          <p className="text-label mb-5">✦ Services</p>
          <h2 className="heading-xl max-w-3xl" style={{ color: "var(--color-text-primary)" }}>
            What we build
          </h2>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, i) => (
            <motion.div key={service.id} variants={item}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-10 md:py-12 border-t border-white/[0.04] transition-all duration-500"
                data-cursor="link"
              >
                <span className="text-[11px] font-mono tracking-[0.15em] text-[var(--color-text-dim)] shrink-0 md:w-12">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-2xl md:text-4xl font-display tracking-[-0.02em] transition-all duration-500 group-hover:translate-x-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                    <span className="inline-block ml-3 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">→</span>
                  </h3>
                  <p className="text-sm mt-2 max-w-xl leading-relaxed text-[var(--color-text-muted)]">
                    {shortDescriptions[service.id]}
                  </p>
                </div>
                <div className="hidden lg:flex flex-wrap gap-2 shrink-0">
                  {service.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-white/[0.06] text-[var(--color-text-dim)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/services"
            className="btn-ghost"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
