/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
        },
      },
    ],
  },
}
