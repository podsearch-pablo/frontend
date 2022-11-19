/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"]
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}