/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: {
          light: "hsl(222deg, 22%, 5%)",
          dark: "hsl(0deg, 0%, 100%)",
        },
        background: {
          light: "hsl(0deg, 0%, 100%)",
          dark: "hsl(210deg, 30%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
