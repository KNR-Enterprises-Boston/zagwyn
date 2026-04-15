import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1C1C1C",
          900: "#141414",
          800: "#1C1C1C",
          700: "#2A2A2A",
          600: "#3A3A3A",
        },
        amber: {
          DEFAULT: "#C8912E",
          light: "#DDA94A",
          dark: "#9F7422",
        },
        offwhite: {
          DEFAULT: "#F5F2ED",
          dark: "#E8E3D8",
        },
        forest: {
          DEFAULT: "#2A3D2E",
          dark: "#1E2C21",
        },
      },
      fontFamily: {
        // "serif" variable name kept for backward compat with existing classes —
        // now maps to Oswald (condensed sans display font).
        serif: ["var(--font-serif)", "Oswald", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};

export default config;
