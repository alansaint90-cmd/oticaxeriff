import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Montserrat", "sans-serif"]
      },
      colors: {
        navy: {
          50: "#eef6ff",
          100: "#d9ecff",
          500: "#2f529e",
          700: "#143967",
          900: "#102b54",
          950: "#0c1d3b"
        },
        gold: {
          50: "#fff8eb",
          100: "#ffedc6",
          500: "#d69a2d",
          700: "#9b6818"
        },
        ink: "#102033",
        mist: "#f7f9fc",
        line: "#d8e4ef"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 29, 59, 0.04), 0 10px 26px rgba(12, 29, 59, 0.07)",
        lift: "0 18px 42px rgba(12, 29, 59, 0.12)"
      },
      borderRadius: {
        app: "8px"
      }
    }
  },
  plugins: []
};

export default config;
