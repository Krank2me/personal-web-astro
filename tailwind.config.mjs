import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Light Theme - Cyber Purple Palette
        primary: "#FAFAFA",
        secondary: "#F4F4F5",
        accent: "#8B5CF6",
        text: "#18181B",
        "text-secondary": "#52525B",
        border: "#E4E4E7",
        surface: "#FFFFFF",

        // Dark Theme - Cyber Purple Palette
        "dk-primary": "#09090B",
        "dk-secondary": "#18181B",
        "dk-accent": "#A855F7",
        "dk-text": "#FAFAFA",
        "dk-text-secondary": "#A1A1AA",
        "dk-border": "#27272A",
        "dk-surface": "#18181B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    typography({
      theme: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#18181B",
            a: {
              color: "#8B5CF6",
              "&:hover": {
                color: "#7C3AED",
              },
            },
          },
        },
        dark: {
          css: {
            color: "#FAFAFA",
            a: {
              color: "#A855F7",
              "&:hover": {
                color: "#8B5CF6",
              },
            },
            h1: { color: "#FAFAFA" },
            h2: { color: "#FAFAFA" },
            h3: { color: "#FAFAFA" },
            h4: { color: "#FAFAFA" },
            strong: { color: "#FAFAFA" },
            blockquote: { color: "#A1A1AA" },
          },
        },
      },
    }),
  ],
};
