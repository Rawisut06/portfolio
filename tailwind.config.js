/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "clr-primary": "rgba(var(--clr-primary))",
        "clr-secondary": "rgba(var(--clr-secondary))"
      }
    },
  },
  plugins: [],
}

