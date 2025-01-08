import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffa124",
        netflixRed: "#E50914",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        courier: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [daisyui],
};
