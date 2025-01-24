import Link from "next/link";
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

			<WriteSpaceCard href="#" />

			<ul className="flex flex-wrap gap-[24px]">
				{cardList.map((el: SpaceCardList) => (
					<li className="min-w-[306px] h-[242px]" key={el.title}>
						<DailyCard>
							<DailyCard.Header>{el.title}</DailyCard.Header>
							<DailyCard.Body>{el.content}</DailyCard.Body>
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

const WriteSpaceCard = ({ href }: { href: string }) => {
	return (
		<Link
			href={href}
			className={`rounded-[16px] flex justify-center items-center max-w-[306px] h-[242px]`}
			style={{
				backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E8E8E8FF' stroke-width='4' stroke-dasharray='5%2c 8' stroke-dashoffset='33' stroke-linecap='square'/%3e%3c/svg%3e")`,
				borderRadius: `16px`,
			}}
		>
			{icons.writePlus}
		</Link>
	);
};
