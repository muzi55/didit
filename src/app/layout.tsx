import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import {
	suitBold,
	suitMedium,
	suitRegular,
	suitSemiBold,
} from "../fonts/fonts";

export const metadata: Metadata = {
	title: "Didit",
	description: "Didit Site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body
				className={`${suitRegular.variable} ${suitMedium.variable} ${suitBold.variable} ${suitSemiBold.variable}`}
			>
				<ThemeProvider attribute="class">{children}</ThemeProvider>
				<div id="modal-root"></div>
			</body>
		</html>
	);
}
