export const colors = {
  bg: "#0A0A0F",
  surface: "#121214",
  surface2: "#1A1A1E",
  border: "rgba(255, 255, 255, 0.06)",
  borderHover: "rgba(255, 255, 255, 0.14)",
  accent: "#C8FF00",
  accentHover: "#a8d600",
  accentSoft: "rgba(200, 255, 0, 0.08)",
  text: {
    primary: "#F5F2EC",
    muted: "rgba(255, 255, 255, 0.65)",
    dim: "rgba(255, 255, 255, 0.35)",
    accent: "#C8FF00",
  },
  whatsapp: "#25D366",
  whatsappHover: "#20bd5a",
} as const;

export type ColorKey = keyof typeof colors;
