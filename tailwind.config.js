/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['Pretendard'],
            },
            colors: {
                beRed: '#E50014',
                beRed2: '#f75765',
                beGray: '#F5F5F5',
                beGray2: '#848484',
                beGray3: '#dedede',
                beGray4: '#707070',
                beGray5: 'rgb(24, 24, 24, 0.1)',
                beGreen: '#E1FC89',
                bePink: '#fad0ff ',
                bePink2: '#f194fc',
                beBlack: '#2c2c2c',
            },
        },
    },
    plugins: [],
};
