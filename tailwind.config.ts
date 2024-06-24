import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          0: "hsl(var(--color-primary-0) / <alpha-value>)",
          100: "hsl(var(--color-primary-100) / <alpha-value>)",
          200: "hsl(var(--color-primary-200) / <alpha-value>)",
          300: "hsl(var(--color-primary-300) / <alpha-value>)",
          400: "hsl(var(--color-primary-400) / <alpha-value>)",
        },
        secondary: {
          0: "hsl(var(--color-secondary-0) / <alpha-value>)",
          100: "hsl(var(--color-secondary-100) / <alpha-value>)",
          200: "hsl(var(--color-secondary-200) / <alpha-value>)",
          300: "hsl(var(--color-secondary-300) / <alpha-value>)",
          400: "hsl(var(--color-secondary-400) / <alpha-value>)",
        },
        neutral: {
          100: "hsl(var(--color-neutral-100) / <alpha-value>)",
          200: "hsl(var(--color-neutral-200) / <alpha-value>)",
          300: "hsl(var(--color-neutral-300) / <alpha-value>)",
          400: "hsl(var(--color-neutral-400) / <alpha-value>)",
          500: "hsl(var(--color-neutral-500) / <alpha-value>)",
          600: "hsl(var(--color-neutral-600) / <alpha-value>)",
          700: "hsl(var(--color-neutral-700) / <alpha-value>)",
          800: "hsl(var(--color-neutral-800) / <alpha-value>)",
          900: "hsl(var(--color-neutral-900) / <alpha-value>)",
          950: "hsl(var(--color-neutral-950) / <alpha-value>)",
        },
        info: {
          0: "hsl(var(--color-info-0) / <alpha-value>)",
          100: "hsl(var(--color-info-100) / <alpha-value>)",
          200: "hsl(var(--color-info-200) / <alpha-value>)",
          300: "hsl(var(--color-info-300) / <alpha-value>)",
          400: "hsl(var(--color-info-400) / <alpha-value>)",
        },
        success: {
          0: "hsl(var(--color-success-0) / <alpha-value>)",
          100: "hsl(var(--color-success-100) / <alpha-value>)",
          200: "hsl(var(--color-success-200) / <alpha-value>)",
          300: "hsl(var(--color-success-300) / <alpha-value>)",
          400: "hsl(var(--color-success-400) / <alpha-value>)",
        },
        warning: {
          0: "hsl(var(--color-warning-0) / <alpha-value>)",
          100: "hsl(var(--color-warning-100) / <alpha-value>)",
          200: "hsl(var(--color-warning-200) / <alpha-value>)",
          300: "hsl(var(--color-warning-300) / <alpha-value>)",
          400: "hsl(var(--color-warning-400) / <alpha-value>)",
        },
        error: {
          0: "hsl(var(--color-error-0) / <alpha-value>)",
          100: "hsl(var(--color-error-100) / <alpha-value>)",
          200: "hsl(var(--color-error-200) / <alpha-value>)",
          300: "hsl(var(--color-error-300) / <alpha-value>)",
          400: "hsl(var(--color-error-400) / <alpha-value>)",
        },
        indigo: {
          0: "hsl(var(--color-indigo-0) / <alpha-value>)",
          100: "hsl(var(--color-indigo-100) / <alpha-value>)",
          200: "hsl(var(--color-indigo-200) / <alpha-value>)",
          300: "hsl(var(--color-indigo-300) / <alpha-value>)",
          400: "hsl(var(--color-indigo-400) / <alpha-value>)",
        },
        cobaltBlue: {
          0: "hsl(var(--color-cobalt-blue-0) / <alpha-value>)",
          100: "hsl(var(--color-cobalt-blue-100) / <alpha-value>)",
          200: "hsl(var(--color-cobalt-blue-200) / <alpha-value>)",
          300: "hsl(var(--color-cobalt-blue-300) / <alpha-value>)",
          400: "hsl(var(--color-cobalt-blue-400) / <alpha-value>)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        "collapse-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapse-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapse-down": "collapse-down 0.2s ease-out",
        "collapse-up": "collapse-up 0.2s ease-out",
      },
      aria: {
        invalid: "invalid='true'",
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover-active", ["&:hover", "&:active"]);
    }),
    require("tailwindcss-animate"),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(["healthicons", "ri", "ph", "mdi"]),
    }),
  ],
};
