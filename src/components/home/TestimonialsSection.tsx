"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-8 md:px-12 lg:px-20 py-28 md:py-36 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label mb-5">✦ Client Stories</p>
        </motion.div>

        <div className="relative min-h-[200px] md:min-h-[180px] mt-10">
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-[120px] md:text-[180px] font-[var(--font-display)] leading-none text-[var(--color-accent)]/5 select-none pointer-events-none" aria-hidden="true">
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote
                className="heading-md max-w-3xl mx-auto font-[var(--font-display)] italic relative"
                style={{ color: "var(--color-text-primary)" }}
              >
                {testimonials[active].quote}
              </blockquote>
              <div className="mt-8">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {testimonials[active].name}
                </p>
                <p className="text-sm mt-1 text-[var(--color-text-muted)]">
                  {testimonials[active].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-500 rounded-full"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                background: i === active ? "var(--color-accent)" : "var(--color-text-dim)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
