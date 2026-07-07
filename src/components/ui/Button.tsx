"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base = "inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300";

  const variants = {
    primary: "bg-[var(--color-accent)] text-[#171410] hover:bg-white",
    outline: "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)]",
    ghost: "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
