module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: "Poppins, sans-serif",
        krona: '"Krona One", sans-serif',
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#ffc94b",
        pink: "#fed2d1",
        "dark-grey": "#B8B8B8",
        "light-grey": "#ECECEC",
        light: "#FAFAFA",
        blur: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        white: "#fff",
        black: "#222",
        nav: "#f5f5f5",
        color: "#777",
        icon: "rgba(0, 0, 0, 0.65)",
        ads: "rgba(0, 0, 0, 0.75)",
        category: "rgba(0, 0, 0, 0.15)",
        products: "rgba(0, 0, 0, 0.3)",
        arrow: "transparent transparent white transparent",
      },
      zIndex: {
        "-1": -1,
      },
      container: {
        padding: "1rem",
      },
      animation: {
        fadeUp: "fade .2s linear backwards ",
        fadeUpSlow: "fade .6s linear backwards",
        fadeUpMedium: "fade .4s linear backwards",
        fadeUpHard: "fade .8s linear backwards",
        SlideIn: "SlideIn .5s alternate",
        SlideOut: "SlideOut .5s alternate",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
        },
        SlideIn: {
          "0%": { transform: "translateX(450px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        SlideOut: {
          "0%": { transform: "translateX(-450px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      screens: {
        xl: { min: "740px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
