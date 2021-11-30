module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: "25rem",
        120: "30rem",
        140: "35rem",
        160: "40rem",
        180: "45rem",
        200: "50rem",
      },
      colors: {
        myGray: {
          950: "hsl(0, 0%, 95%)",
          900: "hsl(0, 0%, 90%)",
          850: "hsl(0, 0%, 85%)",
          800: "hsl(0, 0%, 80%)",
          750: "hsl(0, 0%, 75%)",
          700: "hsl(0, 0%, 70%)",
          650: "hsl(0, 0%, 65%)",
          600: "hsl(0, 0%, 60%)",
          550: "hsl(0, 0%, 55%)",
          500: "hsl(0, 0%, 50%)",
          450: "hsl(0, 0%, 45%)",
          400: "hsl(0, 0%, 40%)",
          350: "hsl(0, 0%, 35%)",
          300: "hsl(0, 0%, 30%)",
          250: "hsl(0, 0%, 25%)",
          200: "hsl(0, 0%, 20%)",
          150: "hsl(0, 0%, 15%)",
          100: "hsl(0, 0%, 10%)",
          50: "hsl(0, 0%, 5%)",
        },
        face: {
          blue: "#2e89ff",
          "blue-light": "#2e89ff33",
        },
      },
      fontFamily: {
        face: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        tiny: ".9375rem",
      },
      screens: {
        "mobile-y": "320px",
        "mobile-x": "568px",
        laptop: "1366px",
        desktop: "1680px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
