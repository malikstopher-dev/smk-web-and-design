"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
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

export function PortfolioSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-28 md:py-36 bg-[var(--color-bg)]">
      <div className="section-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-label mb-5">✦ Portfolio</p>
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            Featured Projects
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mt-6 leading-relaxed max-w-lg mx-auto">
            Real websites built for real businesses across South Africa and beyond. Each designed to generate enquiries and rank on Google.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {portfolioProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[var(--color-surface)] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-accent-border)] hover:shadow-[0_24px_64px_rgba(0,0,0,0.4),0_0_0_1px_var(--color-accent-border)]"
                data-cursor="project"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:saturate-[1.1]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]/80" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[var(--color-accent-soft)] border border-[var(--color-accent-border)] backdrop-blur-sm text-[10px] font-mono tracking-[0.14em] uppercase text-[var(--color-accent)]">
                    {project.tags?.[0] ?? project.category}
                  </span>
                  <div className="absolute inset-0 bg-[var(--color-accent)]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] text-[11px] font-mono tracking-[0.12em] uppercase font-bold">
                      View Site →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-2 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono tracking-[0.08em] text-[var(--color-text-dim)] px-1.5 py-0.5 bg-white/[0.04] rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="w-7 h-7 rounded-full border border-white/[0.15] flex items-center justify-center text-[var(--color-text-dim)] transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-bg)] group-hover:rotate-45">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m7 17 10-10M7 7h10v10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
