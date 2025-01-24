import type { CardTagList } from "../common/card/cardType";

export const spaceTagList: CardTagList[] = [
	{
		label: "태그1",
		onClick: () => {
			console.log("태그1");
		},
	},
	{
		label: "태그2",
		onClick: () => {
			console.log("태그2");
		},
	},
	{
		label: "태그3",
		onClick: () => {
			console.log("태그3");
		},
	},
];
