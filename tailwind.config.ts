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
	// Body Large Text
	bodyLarge400: [
		"1.125rem",
		{
			lineHeight: "1.625rem",
			fontWeight: "400",
		},
	],
	bodyLarge500: [
		"1.125rem",
		{
			lineHeight: "1.625rem",
			fontWeight: "500",
		},
	],
	bodyLarge600: [
		"1.125rem",
		{
			lineHeight: "1.625rem",
			fontWeight: "600",
		},
	],
	bodyLarge700: [
		"1.125rem",
		{
			lineHeight: "1.625rem",
			fontWeight: "700",
		},
	],
	// Body Medium Text
	bodyMedium400: [
		"1rem",
		{
			lineHeight: "1.5rem",
			fontWeight: "400",
		},
	],
	bodyMedium500: [
		"1rem",
		{
			lineHeight: "1.5rem",
			fontWeight: "500",
		},
	],
	bodyMedium600: [
		"1rem",
		{
			lineHeight: "1.5rem",
			fontWeight: "600",
		},
	],
	bodyMedium700: [
		"1rem",
		{
			lineHeight: "1.5rem",
			fontWeight: "700",
		},
	],
	// Body Small Text
	bodySmall400: [
		"0.875rem",
		{
			lineHeight: "1.375rem",
			fontWeight: "400",
		},
	],
	bodySmall500: [
		"0.875rem",
		{
			lineHeight: "1.375rem",
			fontWeight: "500",
		},
	],
	bodySmall600: [
		"0.875rem",
		{
			lineHeight: "1.375rem",
			fontWeight: "600",
		},
	],
	bodySmall700: [
		"0.875rem",
		{
			lineHeight: "1.375rem",
			fontWeight: "700",
		},
	],
	// Body Extra Small Regular
	bodyExtraSmall400: [
		"0.75rem",
		{
			lineHeight: "1.25rem",
			fontWeight: "400",
		},
	],
	bodyExtraSmall500: [
		"0.75rem",
		{
			lineHeight: "1.25rem",
			fontWeight: "500",
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
