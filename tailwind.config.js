/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
      },
    },
  },
  plugins: [],
};
