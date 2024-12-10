import "./globals.css";

import type { Metadata } from "next";

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
		<html lang="ko">
			<body
				className={`${suitRegular.variable} ${suitMedium.variable} ${suitBold.variable} ${suitSemiBold.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
