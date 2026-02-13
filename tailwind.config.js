/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a1a1f',
        'bg-secondary': '#0f2a32',
        'text-primary': '#e2e8f0',
        'text-secondary': '#7a9a9e',
        'gold': '#a07c3a',
        'gold-dark': '#a07c3a',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
