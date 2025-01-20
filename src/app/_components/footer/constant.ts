export type FooterContentType = "DIDIT 소개" | "이용약관" | "개인정보처리방침";
export interface FooterMenuItem {
	title: FooterContentType;
	link: string;
	html: string;
}

export const footerMenu: FooterMenuItem[] = [
	{
		title: "DIDIT 소개",
		link: "/about",
		html: "<h1>Didit 소개</h1><p>Didit은...</p>",
	},
	{
		title: "이용약관",
		link: "/terms",
		html: "<h1>이용약관</h1><p>이용약관은...</p>",
	},
	{
		title: "개인정보처리방침",
		link: "/privacy",
		html: "<h1>개인정보처리방침</h1><p>개인정보처리방침은...</p>",
	},
];

export const COPYRIGHT = "COPYRIGHT (C) 2024 ALL RIGHTS RESERVED";
