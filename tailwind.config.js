/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { "off-white": "#FAF9F6" },
      height: {
        128: "40rem",
      },
    },
  },
  plugins: [],
};
