/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        softOrange: "hsl( 35, 77%, 62% )",
        softRed: "hsl( 5, 85%, 63% )",

        // Neutral colors
        offWhite: "hsl( 36, 100%, 99% )",
        grayishBlue: "hsl( 233, 8%, 79% )",
        darkGrayishBlue: "hsl( 236, 13%, 42% )",
        veryDarkBlue: "hsl( 240, 100%, 5% )"
      },
      fontFamily: {
        inter: [ "Inter", "sans-serif" ]
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        extraBold: "800"
      }
    },
    screens: {
      xs: "450px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}