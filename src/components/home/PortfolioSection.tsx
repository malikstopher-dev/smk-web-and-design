"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { motion } from "framer-motion";

const featured = portfolioProjects.slice(0, 3);

export function PortfolioSection() {
  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-32 md:py-44 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Selected Work</p>
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            Our projects
          </h2>
        </motion.div>

        <div className="mt-20 md:mt-28 space-y-32 md:space-y-44">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Link href={`/portfolio/${project.slug}`} data-cursor="project">
                    <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)] group" style={{ aspectRatio: "16/11" }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                        <span className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-[0.15em] border border-white/20">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Details */}
                <div className={`md:col-span-4 md:col-start-${i % 2 === 1 ? 1 : 10} ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                    {project.category}
                  </p>
                  <h3
                    className="text-3xl md:text-4xl font-display tracking-[-0.02em] leading-tight mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8 text-[var(--color-text-muted)]">
                    {project.description}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="btn-ghost"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
