module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  /* darkMode: true, */
  theme: { 
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#7029B7',
        secondary: '#FFFFFF',
        accent0: '#FDA647',
        accent1: '#3D3A7C',
        navBg: '#261430',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },   
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
