import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2D2E32",
        backgroundAlt: "#25262A",
        primaryGreen: "#64F4AC",
        textPrimary: "#FFFFFF",
        textAlt: "#808186",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
    },
    boxShadow: {
      badgeShadow: "10px 10px 25px 0 rgba(24,24,26, 0.35)",
    },
  },
  plugins: [],
};
export default config;
