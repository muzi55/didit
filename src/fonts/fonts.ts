import localFont from "next/font/local";

const suitRegular = localFont({
	src: "../../public/static/fonts/suit/SUIT-Regular.woff2",
	variable: "--suit-regular",
});
const suitMedium = localFont({
	src: "../../public/static/fonts/suit/SUIT-Medium.woff2",
	variable: "--suit-medium",
});
const suitBold = localFont({
	src: "../../public/static/fonts/suit/SUIT-Bold.woff2",
	variable: "--suit-bold",
});
const suitSemiBold = localFont({
	src: "../../public/static/fonts/suit/SUIT-SemiBold.woff2",
	variable: "--suit-semiBold",
});

export { suitBold, suitMedium, suitRegular, suitSemiBold };
