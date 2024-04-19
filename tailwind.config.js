/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "one" : {
          "100" : "#FFF2E1",
          "200" : "#EAD8C0",
          "300" : "#D1BB9E",
          "400" : "#A79277",
        }, 
        "two" : {
          "100" : "#B99470",
          "200" : "#DEAC80",
          "300" : "#F7DCB9",
          "400" : "#B5C18E",
        },  
        "three" : {
          "100" : "#F6F5F2",
          "200" : "#F3D0D7",
          "300" : "#F0EBE3",
          "400" : "#F6F5F2",
        },  
        "four" : {
          "100" : "#76ABAE",
          "200" : "#76ABAE",
          "300" : "#31363F",
          "400" : "#503C3C",
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}