import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Raised one step from Tailwind's defaults (12px / 14px): most copy on the site uses text-xs and text-sm
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.3rem' }],
        sm: ['0.9375rem', { lineHeight: '1.55rem' }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
