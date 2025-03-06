import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        // Flat custom colors
        test: "#e8e6e6",
        customRed: "#ff0000",
        customBlue: "#0000ff",
        customGreen: "#00ff00",

        // Brand colors with variants (flattened for Tailwind usage)
        primary: "#ff4500",
        "primary-light": "#ff6933",
        "primary-dark": "#cc3700",

        secondary: "#0088cc",
        "secondary-light": "#33a3e1",
        "secondary-dark": "#006699",

        dark: "#1a1a1a",
        "dark-light": "#333333",
        "dark-dark": "#000000",

        light: "#f5f5f5",
        "light-light": "#ffffff",
        "light-dark": "#e0e0e0",

        neutral: "#a0a0a0",
        "neutral-light": "#d0d0d0",
        "neutral-dark": "#707070",

        warning: "#e53e3e",
        "warning-light": "#fc8181",
        "warning-dark": "#c53030",
      },
    },
  },
  plugins: [],
};

export default config;
