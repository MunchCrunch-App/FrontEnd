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
      },
    },
  },
  plugins: [],
};
