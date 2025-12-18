/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#35A4DC",
        secondary: "#17497C",
        blob: "#F0F4F9",

        siemensPrimary: "#019997",
        siemensSecondary: "#FFFFFF",
        siemensBlob: "#F0F4F9",

        boschPrimary: "#F80000",
        boschSecondary: "#2D3033",
        boschBlob: "#F0F1F2",

        samsungPrimary: "#1428A0",
        samsungSecondary: "#FFFFFF",
        samsungBlob: "#F7F7F7",

        lgPrimary: "#A50034",
        lgSecondary: "#000000",
        lgBlob: "#F6F3EB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
