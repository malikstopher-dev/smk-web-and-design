export const spacing = {
  section: {
    vertical: "clamp(4rem, 10vw, 8rem)",
    horizontal: {
      mobile: "1.5rem",
      md: "3rem",
      lg: "5rem",
    },
  },
  container: {
    max: "1280px",
    narrow: "1200px",
  },
  nav: {
    mobile: "64px",
    desktop: "80px",
  },
  hero: {
    paddingTop: "140px",
    paddingBottom: "100px",
  },
  cta: {
    vertical: "clamp(5rem, 10vw, 12rem)",
  },
} as const;
