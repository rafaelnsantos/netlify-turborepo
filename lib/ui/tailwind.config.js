const height = require("./tailwind/height")

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../lib/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height,
      minHeight: height,
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#661AE6",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#191D24",
          "base-100": "#2A303C",
        },
      },
    ],
  },
}
