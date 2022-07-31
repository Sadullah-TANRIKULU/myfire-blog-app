/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        ffKanit:['Kanit', 'monospace']
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["acid",],
  },
}
