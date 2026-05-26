import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        pearl: "#F8F5F1",
        linen: "#EFE8DE",
        graphite: "#6B6B6B",
        champagne: "#B08D57",
        border: "#DDD6CB",
        night: "#111111",
        moss: "#536854",
        oxblood: "#6f3030"
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "Arial", "Helvetica", "sans-serif"],
        display: ["Cormorant Garamond", "Playfair Display", "Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        luxe: "0 26px 80px rgba(17, 17, 17, 0.16)",
        hush: "0 16px 44px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
