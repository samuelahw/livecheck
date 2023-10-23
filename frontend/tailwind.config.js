/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        bgblack: '#191b21',
        // bgblack: '#323333',
        bgbrown: '#1A120B',
        bglgbrown: '#3C2A21',
        bgbeige: '#D5CEA3',
        bgwhitebeige: '#E5E5CB'
      },
    },
  },
  plugins: [],
}

