import type { CardTagList } from "../common/card/cardType";

export const TagSliceFn = (arr: CardTagList[]): CardTagList[] => {
	if (arr.length <= 2) return arr;

	const sliceArr = arr.slice(0, 2);
	const newItem = {
		label: "...",
		onClick: () => {
			console.log("...");
		},
	};
	return sliceArr.concat(newItem);
};
