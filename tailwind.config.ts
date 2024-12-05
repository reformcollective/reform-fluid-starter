import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1440px", // Custom breakpoint for large screens
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
