/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-20px)" },
    },
  },
  animation: {
    "float-slow": "float 6s ease-in-out infinite",
  },
    },
  },
  plugins: [],
};
