/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // colors: {
      //   darkBlue: 'hsl(209, 23 %, 22 %)',
      //   doubleDarkBlue: 'hsl(207, 26%, 17%)',
      //   lightText: 'hsl(200, 15%, 8%)',
      //   darkGray: 'hsl(0, 0%, 52%)',
      //   bg: 'hsl(0, 0%, 98%)',
      //   darkText: 'hsl(0, 0%, 100%)'
      // },

      colors: {
        background: {
          dark: "hsl(207, 26%, 17%)",
          light: "hsl(0, 0%, 98%)",
        },
        element: {
          dark: "hsl(209, 23%, 22%)",
          light: "hsl(0, 0%, 100%)",
        },
        text: {
          dark: "hsl(0, 0%, 100%)",
          light: "hsl(200, 15%, 8%)",
        },
        input: {
          light: "hsl(0, 0%, 52%)",
        },
        light: '#ffffff',
        bg: 'hsl(0, 0%, 98%)',
      },

      fontSize: {
        hi: '14px',
        dp: '16px'
      }
    },
  },
  plugins: [],
}
