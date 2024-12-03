import type { Config } from "tailwindcss";

interface FontSizeConfig {
	lineHeight: string;
	fontWeight: string;
}
interface FontSize {
	[key: string]: [string, FontSizeConfig];
}

const fontSize: FontSize = {
	// Special headings
	H1: [
		"3.75rem", // 60px
		{
			lineHeight: "4.5rem", // 72px
			fontWeight: "700", // bold
		},
	],
	H2: [
		"3rem", // 48px
		{
			lineHeight: "3.625rem", // 58px
			fontWeight: "700", // bold
		},
	],
	H3: [
		"2.5rem", // 40px
		{
			lineHeight: "3rem", // 48px
			fontWeight: "700", // bold
		},
	],
	H4: [
		"1.875rem", // 30px
		{
			lineHeight: "2.375rem", // 38px
			fontWeight: "700", // bold
		},
	],
	H5: [
		"1.75rem", // 28px
		{
			lineHeight: "2.5rem", // 40px
			fontWeight: "600", // semiBold
		},
	],
	H6: [
		"1.5rem", // 24px
		{
			lineHeight: "1.875rem", // 32px
			fontWeight: "600", // semiBold
		},
	],
};

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontSize,
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
} satisfies Config;
