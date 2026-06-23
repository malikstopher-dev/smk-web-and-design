export const easing = {
  spring: [0.16, 1, 0.3, 1] as const,
  smooth: [0.65, 0, 0.35, 1] as const,
  linear: [0, 0, 1, 1] as const,
};

export const duration = {
  fast: 0.2,
  base: 0.3,
  reveal: 0.7,
  slow: 1.25,
};

export const motion = {
  reveal: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: duration.reveal,
      ease: easing.spring,
    },
  },
  stagger: {
    container: {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-50px" },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration.reveal,
          ease: easing.spring,
        },
      },
    },
  },
  hero: {
    line: {
      initial: { y: "100%" },
      animate: { y: 0 },
      transition: {
        duration: 0.8,
        ease: easing.spring,
      },
    },
    content: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.7,
        delay: 0.6,
        ease: easing.spring,
      },
    },
    marquee: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: 0.7,
        delay: 1,
      },
    },
  },
  testimonial: {
    enter: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: {
        duration: 0.5,
        ease: easing.spring,
      },
    },
    interval: 5000,
  },
  header: {
    duration: duration.base,
  },
  hover: {
    service: {
      duration: 0.5,
    },
    portfolio: {
      duration: 0.7,
    },
    link: {
      duration: 0.2,
    },
  },
} as const;
