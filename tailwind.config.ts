import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url(/assets/hero/hero-bg.png)",
      },
      maxWidth() {
        // start from max-w-96: 24rem / 384px next max-w-112: 28rem / 448px ... max-w-384: 96rem / 1536px
        return new Array(4).fill(0).reduce((acc, _, i) => {
          const start = 96;
          const startRem = 24;
          const rem = (startRem + (i + 1) * 4).toFixed(1);
          acc[start + (i + 1) * 16] = `${rem}rem`;
          return acc;
        }, {});
      },
      letterSpacing: {
        // ex: tracking-1: 0.1px tracking-2: 0.2px ... tracking-40: 4px
        ...new Array(40).fill(0).reduce((acc, _, i) => {
          acc[i + 1] = `${((i + 1) * 0.1).toFixed(1)}px`;
          return acc;
        }, {}),
      },
      lineHeight: {
        // ex: leading-1: 0.25rem leading-2: 0.5rem ... leading-20: 5rem
        ...new Array(20).fill(0).reduce((acc, _, i) => {
          acc[i + 1] = `${(i + 1) * 0.25}rem`;
          return acc;
        }, {}),
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
