export const fonts = {
  body: "'Space Grotesk', system-ui, sans-serif",
  display: "'Fraunces', Georgia, serif",
} as const;

export const fontWeights = {
  body: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  display: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

export const typography = {
  hero: {
    fontSize: "clamp(72px, 10vw, 160px)",
    lineHeight: 0.88,
    letterSpacing: "-0.06em",
    fontWeight: 700,
    fontFamily: "var(--font-display)",
  },
  headingXl: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    fontFamily: "var(--font-display)",
  },
  headingLg: {
    fontSize: "clamp(2rem, 4.5vw, 4rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    fontFamily: "var(--font-display)",
  },
  headingMd: {
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    fontFamily: "var(--font-display)",
  },
  headingSm: {
    fontSize: "1.5rem",
    lineHeight: 1.2,
    fontFamily: "var(--font-display)",
  },
  sectionLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.25em",
    color: "var(--color-text-dim)",
  },
  bodyLg: {
    fontSize: "1.125rem",
    lineHeight: 1.625,
  },
  bodyBase: {
    fontSize: "1rem",
    lineHeight: 1.625,
  },
  bodySm: {
    fontSize: "0.875rem",
    lineHeight: 1.625,
  },
  navLink: {
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
  },
  buttonText: {
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
} as const;
