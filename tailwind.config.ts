import type { Config } from "tailwindcss";

const Config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			backgroundImage: {
				"landing-image-desktop": "url('/assets/bg-desktop.webp')",
        'landing-image-mobile':"url('assets/bg-mobile.png')",
        'landing-image-tablet':"url('assets/bg-table.png')"
			},
		},
    colors: {
      "dark-1": "#201F22",
      "dark-2": '#3A393E',
      "green": '#C1FD35',
      "gray-1": '#EEEAEA',
      "gray-2": '#D9D9D9',
      "error-1": "#DA0000",
      "error-2": "#EE3838",
      "select-1": "#D2FFEC",
      "button-1": "#CECECE",
      "black": "#000",
      "white": "#FFF"
    },
		fontSize: {
			base: "1rem", // 16px
      sx: "0.75rem" , //12px
			sm: "0.875rem", // 14px
			md: "1.125rem", // 18px
			lg: "1.25rem", // 20px
			xl: "1.375rem", // 22px
			"2xl": "1.5rem", // 24px
			"3xl": "1.75rem", // 28px
			"4xl": "2rem", // 32px
			"5xl": "2.25rem",// 36px
			"6xl": "2.5rem", // 40px
		},
	},
  plugins: [],

} 

export default Config;
