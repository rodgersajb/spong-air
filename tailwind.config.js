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
      },
      colors: {
        lightBrown: "#655853",
        spongBlue: " #1e4055",
        spongDarkBlue: "#143452",
        spongWhite: "#f5f5f5",
        spongBlack: "#1a1a1a",
        spongGrey: "#d1d1d1",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },

          "100%": { transform: "scaleX(1)" },
        },
        "close-menu": {
          "0%": { transform: "scaleX(1)" },

          "100%": { transform: "scaleX(0)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.3s ease-in-out forwards",
        "close-menu": "close-menu 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
