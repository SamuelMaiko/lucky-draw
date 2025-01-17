/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F48B18",
        // main bg
        // beige: "#F1D9B0",
        beige: "#FFEFD5",
        // footer bg
        lightGray: "#E3E3E3",
        // text color
        darkGray: "#4A4A4A",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
