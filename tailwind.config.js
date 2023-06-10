/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js, jsx, ts, tsx}",
    "./src/components/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["'Poppins', sans-serif"]
      }
    },
  },
  plugins: [],
}

