/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(calc(-100% - 20px))' },
        },
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        instrument: ['"Instrument Serif"', 'serif'],
      }
    },
  },
  plugins: [],
}