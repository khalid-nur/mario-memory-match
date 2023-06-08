/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      rotate: {
        "y-45": "45deg",
        "y-0": "0deg",
      },
    },
  },
  plugins: [],
};
