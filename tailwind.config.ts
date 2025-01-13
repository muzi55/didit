import type { Config } from "tailwindcss";

import boxShadow from "./config/boxShadow";
import colors from "./config/color";
import fontSize from "./config/fontSize";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize,
			colors,
			boxShadow,
			width: {
				inherit: "inherit",
			},
		},
	},
	darkMode: "class",
	plugins: [],
} satisfies Config;
