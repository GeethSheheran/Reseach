/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7B68EE",
        "secondary": "#7B68EE",
        "thernary": "#222222"
      }
    },
  },
  plugins: [],
}

