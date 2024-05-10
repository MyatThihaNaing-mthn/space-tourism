/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "10vh" : "10vh",
        "7vh" : "7vh",
        "45vh" : "45vh",
        "11/20" : "55%",
      },
      width: {
        "11/20" : "55%",
      },
      margin: {
        "2vh" : "2vh",
      },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    backgroundImage :{
      'home-mobile': "url('/background-home-mobile.jpg')",
      'home-tablet': "url('/background-home-tablet.jpg')",
      'home-desktop': "url('/background-home-desktop.jpg')",
      'destination-mobile': "url('/background-destination-mobile.jpg')",
      'destination-tablet': "url('/background-destination-tablet.jpg')",
      'destination-desktop': "url('/background-destination-desktop.jpg')",
      'crew-mobile' : "url('/crews/background-crew-mobile.jpg')",
      'crew-tablet' : "url('/crews/background-crew-tablet.jpg')",
      'crew-desktop' : "url('/crews/background-crew-desktop.jpg')",
      'tech-mobile' : "url('/technology/background-technology-mobile.jpg')",
      'tech-tablet' : "url('/technology/background-technology-tablet.jpg')",
      'tech-desktop' : "url('/technology/background-technology-desktop.jpg')",
    },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    }
  },
  plugins: [],
}