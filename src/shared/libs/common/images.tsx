interface Images {
	[key: string]: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
}

export const images: Images = {
	dailyEmpty: {
		src: "/static/images/empty/daily_empty.png",
		alt: "회고록이 없음을 나타내는 아이콘",
		width: 72,
		height: 85,
	},
};
