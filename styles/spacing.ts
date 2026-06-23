export const spacing = {
  section: {
    paddingY: "clamp(4rem, 10vw, 8rem)",
    paddingX: "1.5rem",
    paddingXDesktop: "3rem",
    paddingXWide: "5rem",
  },
  container: {
    maxWidth: "80rem",
    narrowMaxWidth: "75rem",
  },
  nav: {
    height: "4rem",
    heightDesktop: "5rem",
    paddingX: "1.5rem",
  },
  hero: {
    paddingTop: "140px",
    paddingBottom: "80px",
    paddingX: "6vw",
  },
  card: {
    padding: "2rem",
    paddingDesktop: "3rem",
  },
  gutter: {
    section: "6rem",
    sectionDesktop: "8rem",
  },
} as const;
