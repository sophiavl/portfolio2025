/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        light: "#EAEAEA",
        dark: "#1b2422",
        section: "#FEFFFF",
      },
      fontFamily: {
        phudu: ["Phudu", "sans-serif"],
        gelion: ["Gelion", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
    screens: {
      xs: "460px",
      sm: "660px",
      md: "900px",
      lg: "1250px",
      xl: "1495",
      "2xl": "",
    },
  },
  plugins: [],
};
