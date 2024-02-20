/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)",
        },
        gray: {
          dark: "#1E2124",
          light: "hsl(205, 16%, 71%)",
          extralight: "hsl(205, 25%, 91%)",
          lightest: "hsl(204, 33%, 97%)",
          siu: "#8899ac",
          extradark:"#192734"
        },
        black: "hsl(210, 13%, 9%)",
      },
    },
  },
  plugins: [],
};
