import type { Config } from "tailwindcss";

const Config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/assets/**/*.png",
  ],
  theme: {
		extend: {
			backgroundImage: {
				"bg-desktop": "url('/assets/bg-desktop.webp')",
        "bg-mobile":"url('/assets/bg-mobile.png')",
        "bg-tablet":"url('/assets/bg-tablet.png')"
			},
      backgroundColor: {
        "dark1": "#201F22",
        "dark2": "#3A393E",
        "green": '#C1FD35',
        "gray-1": '#EEEAEA',
        "gray-2": '#D9D9D9',
        "error-1": "#EE3737",
        "error-2": "#E81010",
        "select-1": "#D2FFEC",
        "button1": "#CECECE",
        "black": "#000",
        "white": "#FFF"
      },
		},
    colors: {
      "dark1": "#201F22",
      secondary: "#3A393E",
      "green": '#C1FD35',
      "gray1": '#EEEAEA',
      "gray-2": '#D9D9D9',
      "error1": "#EE3737",
      "error2": "#E81010",
      "select1": "#D2FFEC",
      "button1": "#CECECE",
      black: "#000",
      white: "#FFF"
    },
    borderRadius: {
      "xl": "25px",
      "2xl": "30px",
      "md": "5px",
      "sm": "5px",
    },
    screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
	},
  plugins: [],

} 

export default Config;



