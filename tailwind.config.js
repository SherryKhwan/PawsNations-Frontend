const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "movie-poster": "url('/images/movie_image.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3F51B5",
            },
            secondary: {
              DEFAULT: "#FF9800",
            },
            background: {
              DEFAULT: "#FFFFFF",
            },
            foreground: {
              DEFAULT: "#333333",
            },
            accent: {
              DEFAULT: "#FFC107",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#3F51B5",
            },
            secondary: {
              DEFAULT: "#FF9800",
            },
            background: {
              DEFAULT: "#121212",
            },
            foreground: {
              DEFAULT: "#E0E0E0",
            },
            accent: {
              DEFAULT: "#FFD740",
            },
          },
        },
      },
    }),
  ],
};
