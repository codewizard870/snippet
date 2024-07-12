/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Mulish: ["Mulish", "sans-serif"]
    },
    colors: {
      "primary-default": "#009379",
      "secondary-default": "#333333",
      "third-default": "#BFAFF2",
      white: "#FFFFFF",
      black: "#2B2B2B",
      "gray-1": "#1E1E1E",
      'gray-2': "#F7F9FD"
    },
    backgroundImage: {
      "vision-bg-mobile": "url('../public/images/vision_bg_mobile.svg')",
      "vision-bg": "url('../public/images/vision_bg.svg')",
      "vision-bg-tablet": "url('../public/images/vision_bg_tablet.svg')",
      L2: "url('../public/images/L2.svg')",
      L3: "url('../public/images/L3.svg')",
      L5: "url('../public/images/L5.svg')",
      L6: "url('../public/images/L6.svg')",
      L7: "url('../public/images/L7.svg')",
      web: "url('../public/images/home/left_web.svg')",
      "feature-line": "url('../public/images/features/feature_line_1.svg')",
    },
  },
  plugins: [],
};
