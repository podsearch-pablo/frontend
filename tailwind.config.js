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
    extend: {
      gridTemplateColumns: {
        // Simple 50 column grid
        '50': 'repeat(50, minmax(0, 1fr))',

      },
      borderRadius: {
        '3xl': '40px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}




