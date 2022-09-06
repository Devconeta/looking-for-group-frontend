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
      colors: {
        primary: "#f59e0b", // amber-500
        primaryLight: "#fffbeb", // amber-50
      },
      opacity: {
        15: ".15",
      },
    },
  },
  plugins: [],
};
