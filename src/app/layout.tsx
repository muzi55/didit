import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import {
	suitBold,
	suitMedium,
	suitRegular,
	suitSemiBold,
} from "../fonts/fonts";
import Header from "./_components/header/header";

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
				<ThemeProvider attribute="class">
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
