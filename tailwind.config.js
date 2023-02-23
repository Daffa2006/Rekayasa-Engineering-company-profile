/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'inter':['"Inter"', 'sans-serif'],
      },
      colors: {
        primary: "#2E457A",
        secondary: "#F07B17",
        tertiary: "#7EB93A",
        orange400: "#FF9942",
        orange500: "#F07B17",
        neutral200: "#DEDEDE",
        neutral400: "#BFBFBF",
        neutral500: "#737373",
        neutral700: "#262626",
        neutral600: "#404040",
        neutral900: "#3B3B3B",
        tertiary500: "#FF7B42",
        white:"#FFFFFF",
        black: "#000000",
        blue50: "#F5F8FF",
        blue700: "#445E9C",
        "blue-fade": "#ECF1FF",
        blue900:"#1C2E58",
      },
    },
  },
  plugins: [],
}
