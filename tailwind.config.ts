import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
          50: "#fdf8e8",
          100: "#f9ecc5",
          200: "#f3d98e",
          300: "#ecc04f",
          400: "#e4a91f",
          500: "#d4af37",
          600: "#b8942a",
          700: "#8a6e1f",
          800: "#6e581d",
          900: "#5c4a1c",
        },
        sepia: "hsl(var(--sepia))",
        crimson: "hsl(var(--crimson))",
        rizal: {
          cream: "#f5e6c8",
          sepia: "#704214",
          brown: "#3c2415",
          gold: "#c9a84c",
          navy: "#0a1628",
          crimson: "#8b1a1a",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        "slow-spin": "spin 20s linear infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        stamp: "stamp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
