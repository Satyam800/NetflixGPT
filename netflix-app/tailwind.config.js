/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "360px",
        // => @media (min-width: 992px) { ... }
      },
      height: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
