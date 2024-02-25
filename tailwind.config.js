/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
 
  theme: {
    extend: {
      colors:{
        'primary': "#00A550",
        'ggreen': "#32de84",
        'secondary':"#FFA500",
        'tartiary':"#120503",
        'green':"#EDFFEF",
        'gree':"#DBFEDF "
      },

      backgroundImage :{
        'hero-pattern': "url('../src/assets/Image/backgroundCompany.jpg')",
        'bg-gradient': "linear-gradient(to right top, #afe0b0, #93d794, #77cd77, #58c358, #31b936);",
        'contactpattern': "url('../src/assets/Image/bgContact.jpeg')",

      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-gradients'),
  ]
  ,
}

