// 00 05 10 15 20
export const 영부터십이 = Array.from(
	{ length: 12 },
	(_, i) => `${i < 2 ? `0${i * 5}` : i * 5}`,
);
