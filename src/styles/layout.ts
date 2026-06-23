export const breakpoints = {
  md: 768,
  lg: 1024,
} as const;

export const zIndex = {
  noise: 9999,
  cursor: 10000,
  preloader: 9998,
  header: 50,
  mobileMenu: 40,
  whatsapp: 50,
} as const;

export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const layout = {
  container: {
    maxWidth: "1280px",
    padding: {
      mobile: "1.5rem",
      md: "3rem",
      lg: "5rem",
    },
  },
  section: {
    paddingY: "clamp(4rem, 10vw, 8rem)",
  },
  hero: {
    paddingTop: "140px",
    paddingBottom: "100px",
    headingMaxWidth: "90vw",
  },
  nav: {
    height: {
      mobile: "64px",
      desktop: "80px",
    },
    linkGap: "2rem",
    ctaGap: "1.5rem",
  },
  grid: {
    services: {
      columns: 1,
      gap: "1.5rem",
      gapMd: "3rem",
      itemPaddingY: "2rem",
      itemPaddingYMd: "2.5rem",
    },
    portfolio: {
      columns: 2,
      gap: "2.5rem",
      gapMd: "4rem",
      spacing: "8rem",
      spacingMd: "12rem",
    },
    portfolioListing: {
      columnsMobile: 1,
      columnsMd: 2,
      columnsLg: 3,
      gap: "1.5rem",
    },
    footer: {
      columnsMobile: 1,
      columnsMd: 4,
      gap: "3rem",
    },
  },
  marquee: {
    height: "auto",
    paddingY: "1.25rem",
    gap: "3rem",
  },
} as const;
