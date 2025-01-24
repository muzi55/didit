import React from "react";

import { icons } from "@/shared/libs/common/icons";

import CardBookMark from "../common/card/CardBookMark";
import type { CardTagList } from "../common/card/cardType";
import DailyCard from "../common/card/DailyCard";
import type { SpaceCardList } from "./spaceType";

// SpaceCardTagList

const TagSliceFn = (arr: CardTagList[]): CardTagList[] => {
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

interface SpaceCardSectionProps {
	title: string;
	cardList: SpaceCardList[];
}

export default function SpaceCardSection({
	title,
	cardList,
}: SpaceCardSectionProps) {
	return (
		<div className="mt-[43px]">
			<div className="flex items-center justify-between max-w-[306px] mb-[31px] px-[10px]">
				<CardBookMark active={false}>{title}</CardBookMark>

				<button className="w-[30px] h-[30px] bg-gray-3 flex justify-center items-center rounded-full">
					<span className="text-[15px] scale-75">
						{icons.angleRight("323232")}
					</span>
				</button>
			</div>

			<ul className="flex flex-wrap gap-[24px]">
				{cardList.map((el: SpaceCardList) => (
					<li className="min-w-[306px]" key={el.title}>
						<DailyCard>
							<DailyCard.Header>헤더</DailyCard.Header>
							<DailyCard.Body>바디</DailyCard.Body>
							{/* 여기서는 2개의 List만 내려주기 */}
							<DailyCard.TagList
								viewFirstTag={false}
								listItem={TagSliceFn(el.tagList)}
							/>
						</DailyCard>
					</li>
				))}
			</ul>
		</div>
	);
}
