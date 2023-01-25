/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretend: ["Pretendard-Regular"],
      },
      colors: {
        beRed: "#E50014",
        beRed2: "#EF6672",
        beGray: "#F5F5F5",
        beGreen: "#E1FC89",
      },
    },
  },
  plugins: [],
};
