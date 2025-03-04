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
        background: "#F1EEE9",
        backgroundAlt: "#25262A",
        primaryYellow: "#F6D814",
        textPrimary: "#000000",
        textAlt: "#5d5d5d",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
    boxShadow: {
      badgeShadow: "10px 10px 25px 0 rgba(24,24,26, 0.35)",
      btnShadow: "3px 3px 10px 0 rgba(0,0,0, 0.2)",
      imageShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
    },
    keyframes: {
      "border-spin": {
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
    },
    animation: {
      "border-spin": "border-spin 7s linear infinite",
    },
  },
  plugins: [],
};
export default config;
