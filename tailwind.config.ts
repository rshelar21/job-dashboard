import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open_sans: "var(--display-open_Sans)",
      },
      colors: {
        primary: "#DC4A2D",
        gray: {
          neutral: "#E7E7E7",
          100: "#D1D1D1",
          150 : "#D0D5DD",
          200 : "#B0B0B0",
          350 : "#888888",
          500 : "#3D3D3D",
          550 : "#6E6D6D",
          600 : "#5D5D5D",
          700 : "#4F4F4F",
          
        },
        orange: {
          light: "#FCB4A5",
          100 : "#FED3CA",
        },
        green : {
          100 : "#ECFDF3",
          200 : "#ABEFC6",
          300 : "#17B26A",
          400 : "#067647",
        },
        slate : {
          200 : "#344054"
        },
        white_light : "#FCFCFC"
      },
    },
  },
  plugins: [],
};
export default config;
