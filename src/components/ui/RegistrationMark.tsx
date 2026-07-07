"use client";

import { motion } from "framer-motion";

interface RegistrationMarkProps {
  className?: string;
  length?: number;
  strokeWidth?: number;
  color?: string;
  corner?: "tl" | "tr" | "bl" | "br";
  animate?: boolean;
}

export function RegistrationMark({
  className = "",
  length = 24,
  strokeWidth = 1.5,
  color = "var(--color-graphite, #8B8579)",
  corner = "tl",
  animate = false,
}: RegistrationMarkProps) {
  const getPath = () => {
    switch (corner) {
      case "tl":
        return `M 0 ${length} L 0 0 L ${length} 0`;
      case "tr":
        return `M ${length} ${length} L ${length} 0 L 0 0`;
      case "bl":
        return `M 0 0 L 0 ${length} L ${length} ${length}`;
      case "br":
        return `M ${length} 0 L ${length} ${length} L 0 ${length}`;
    }
  };

  if (animate) {
    return (
      <motion.svg
        className={className}
        width={length}
        height={length}
        viewBox={`0 0 ${length} ${length}`}
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <path d={getPath()} stroke={color} strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
      </motion.svg>
    );
  }

  return (
    <svg
      className={className}
      width={length}
      height={length}
      viewBox={`0 0 ${length} ${length}`}
      fill="none"
    >
      <path d={getPath()} stroke={color} strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
