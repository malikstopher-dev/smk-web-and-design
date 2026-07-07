"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/BlogCard";
import { AnimatedReveal, SectionLabel } from "@/components/ui/AnimatedReveal";

const CATEGORIES = [
  "All",
  "Web Design",
  "SEO",
  "Business Growth",
  "Case Studies",
  "Branding",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const post of blogPosts) {
      counts[post.category] = (counts[post.category] || 0) + 1;
    }
    return counts;
  }, []);

  const featuredPost = useMemo(
    () => blogPosts.find((p) => p.featured),
    []
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts.filter((p) => p !== featuredPost);
    return blogPosts.filter(
      (p) => p.category === activeCategory && p !== featuredPost
    );
  }, [activeCategory, featuredPost]);

  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>SMK Web Design Blog</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h1 className="heading-hero max-w-4xl" style={{ color: "var(--color-text-primary)" }}>
              SMK Web Design Blog
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "var(--color-text-muted)" }}>
              Expert guides on web design, SEO, and digital marketing to help
              your South African business grow online.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {featuredPost && (
        <section className="section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
          <div className="section-light-2" aria-hidden="true" />
          <div className="mx-auto max-w-7xl relative z-10">
            <AnimatedReveal>
              <p className="text-label mb-6">Featured Article</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <BlogCard post={featuredPost} featured />
            </AnimatedReveal>
          </div>
        </section>
      )}

      <section className="section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? blogPosts.length
                    : categoryCounts[cat] || 0;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-[12px] font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--color-accent)] text-[#171410] border-[var(--color-accent)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                    }`}
                    style={!isActive ? { borderColor: "var(--color-border)" } : undefined}
                  >
                    {cat}
                    <span
                      className={`ml-2 text-[11px] ${
                        isActive
                          ? "text-[#171410]/60"
                          : "text-[var(--color-text-dim)]"
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, i) => (
              <AnimatedReveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} />
              </AnimatedReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
