"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/content";
import { AnimatedReveal, SectionLabel } from "@/components/ui/AnimatedReveal";
import { motion, AnimatePresence } from "framer-motion";

const dotColors = [
  "var(--color-spot-cobalt, #2C4A8A)",
  "var(--color-spot-moss, #5C6B3F)",
  "var(--color-spot-plum, #5C2E4A)",
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 text-center overflow-hidden bg-[var(--color-bg)]">
      <div className="mx-auto max-w-4xl relative z-10">
        <AnimatedReveal>
          <SectionLabel>Client Stories</SectionLabel>
        </AnimatedReveal>

        <div className="relative min-h-[200px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote
                className="heading-md leading-[1.15] max-w-3xl mx-auto text-balance"
                style={{ color: "var(--color-text-primary)" }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="mt-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: dotColors[active] }}>
                  {testimonials[active].name}
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background: i === active ? dotColors[i] : "var(--color-text-dim)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
