/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(86deg, rgba(38, 51, 6, 1) 36%, rgba(18, 24, 1, 1) 73%)",
      },
      fontFamily: {
        "custom-font-playfair": ["Playfair Display", "serif"],
        "custom-font-roboto": ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "custom-green": "#293211",
        "background-gradient-button":
          "linear-gradient(to top, #ae884aff, #b08a4bff, #b18c4dff, #b28d4eff, #b48f50ff, #b59051ff, #b79252ff, #b89454ff, #ba9555ff, #bb9756ff)",
      },
    },
  },
  plugins: [],
};
