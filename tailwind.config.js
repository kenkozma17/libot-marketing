/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "libot-blue": "#1559EE",
        "libot-green": "#273232",
        "libot-yellow": "#ffcd33",
        "libot-light-yellow": "#FFF9E4",
        "libot-lighter-yellow": "#FFFDF6",
        "libot-black": "#131313",
        "libot-lavender": "#EBEBEB",
        "libot-light-blue": "#E8F2FF",
      },
    },
  },
  plugins: [],
};
