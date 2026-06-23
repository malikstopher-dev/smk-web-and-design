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
  const base = "inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300";

  const variants = {
    primary: "bg-[var(--color-accent)] text-[#0A0A0F] hover:bg-white shadow-[0_0_40px_rgba(200,255,0,0.25)]",
    outline: "border border-white/15 text-white/60 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]",
    ghost: "text-[var(--color-accent)] hover:opacity-80",
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
