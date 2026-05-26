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
        ink: "#171717",
        pearl: "#f7f4ee",
        graphite: "#343434",
        champagne: "#c7a66a",
        moss: "#536854",
        oxblood: "#6f3030"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        luxe: "0 20px 60px rgba(23, 23, 23, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
