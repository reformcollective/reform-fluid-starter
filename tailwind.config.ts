import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px", // Custom breakpoint for large screens
      },
      spacing: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        28: "7rem",
      },
      colors: {
        baseGray: "#EEEEEE", 
        lightGray: "#E5E5E5", 
        darkText: "#1A1A1A", 
        grayText: "#606060", 
      },
      fontFamily: {
        sans: ["InterVariable", "sans-serif"], // Matching Figma typography
      },
    },
    container: {
      center: true, // Centers the container for consistent alignment
      padding: {
        DEFAULT: "1rem", // Default padding for small screens
        lg: "2rem", // Padding for large screens
      },
    },
  },
  plugins: [],
};

export default config;
