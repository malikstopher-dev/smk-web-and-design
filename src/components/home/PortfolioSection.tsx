"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { AnimatedReveal, SectionLabel } from "@/components/ui/AnimatedReveal";

const featured = portfolioProjects.slice(0, 3);

export function PortfolioSection() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48">
      <div className="section-light-2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <AnimatedReveal>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="heading-lg mb-24" style={{ color: "var(--color-text-primary)" }}>
            Our projects
          </h2>
        </AnimatedReveal>

        <div className="space-y-32 md:space-y-48">
          {featured.map((project, i) => (
            <AnimatedReveal key={project.id} delay={i * 0.15}>
              <div className={`grid gap-10 md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? "direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Link href={`/portfolio/${project.slug}`} data-cursor="project">
                    <div className="relative overflow-hidden rounded-3xl bg-[var(--color-surface)] group" style={{ aspectRatio: "16/11" }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-image"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="project-overlay" />
                      <div className="absolute bottom-6 left-6 z-10">
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="text-[13px] font-mono" style={{ color: "var(--color-text-dim)" }}>
                    {project.number}
                  </span>
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] mt-5 mb-4 font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {project.category}
                  </p>
                  <h3 className="heading-lg mb-5" style={{ color: "var(--color-text-primary)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-10 max-w-sm" style={{ color: "var(--color-text-muted)" }}>
                    {project.description}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Case Study →
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
