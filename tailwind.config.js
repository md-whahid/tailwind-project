/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: "377px",
      // => @media (min-width: 377px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      navbr: "1055px",
      // => @media (min-width: 1055px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "custom-blue": "#183DB8",
        "custom-violet": "#7477FB",
        "custom-black": "#333333",
        "custom-white": "#E4E9FC",
        "custom-violet-002": "#4350C9",
      },
      fontFamily: {
        Quicksand: "'Quicksand', 'sans serif'",
        "Gilroy-Bold": "'Gilroy-Bold','sans serif'",
        "Gilroy-Black": "'Gilroy-Black', 'sans serif'",
        "Gilroy-Medium": "'Gilroy-Medium', 'sans serif'",
        "Gilroy-Thin": "'Gilroy-Thin', 'sans serif'",
      },
    },
  },
  plugins: [],
};
