import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0%",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.6%",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-1.1%",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-1.4%",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-1.7%",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-1.9%",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-2.1%",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-2.2%",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "1",
          letterSpacing: "-2.2%",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
          letterSpacing: "-2.2%",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1",
          letterSpacing: "-2.2%",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
          letterSpacing: "-2.2%",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
          letterSpacing: "-2.2%",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 8px 32px 4px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        primary: "oklch(69.88% 0.2421 41.13 / <alpha-value>)",
        secondary: "oklch(85.59% 0.2937 154.59 / <alpha-value>)",
        tertiary:
          "oklch(65.49% 0.1937998046114747 239.2963644488785 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
