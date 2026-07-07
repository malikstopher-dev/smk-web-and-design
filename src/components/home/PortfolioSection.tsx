"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { motion } from "framer-motion";

const featured = portfolioProjects.slice(0, 3);

export function PortfolioSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-28 md:py-36 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Selected Work</p>
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            Our projects
          </h2>
        </motion.div>

        <div className="mt-16 md:mt-24 space-y-28 md:space-y-36">
          {featured.map((project, i) => {
            const isOdd = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className={`md:col-span-7 ${isOdd ? "md:order-2 md:col-start-6" : ""}`}>
                    <Link href={`/portfolio/${project.slug}`} data-cursor="project">
                      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)]" style={{ aspectRatio: "16/11" }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 60vw"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={`md:col-span-4 ${isOdd ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                      {project.category}
                    </p>
                    <h3
                      className="text-3xl md:text-4xl font-[var(--font-display)] tracking-[-0.02em] leading-tight mb-4"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-8 text-[var(--color-text-muted)]">
                      {project.description}
                    </p>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
