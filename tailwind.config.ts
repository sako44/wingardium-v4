import { Rotate } from "hamburger-react";
import { Rotate3d, Rotate3D } from "lucide-react";
import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#548977",
        secondary: "#1f3232",
        bgColor: "#e3e5d8",
        textColor: "#a0a0a0",
        textColorDark: "#f0f0f0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        progress: "progress 3s linear forwards",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        progress: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
      },
      screens: {
        xs: "450px",
        "3xl": "1760px",
      },
    },
    fontFamily: {
      fontNunito: ["var(--font-nunito)"],
      fontRaleway: ["var(--font-raleway)"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
