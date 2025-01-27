import dayjs from "dayjs";
import React from "react";

import DailyCard from "../common/card/DailyCard";
import { 시간변수 } from "../search/constant";
import type { SpaceCardList } from "./spaceType";
import { TagSliceFn } from "./spaceUtils";

interface SpaceWeekCard {
	cardList: SpaceCardList[];
}

export default function SpaceWeekCard({ cardList }: SpaceWeekCard) {
	return (
		<div className="">
			<SpaceWeekCard.Header
				weekIndex={1}
				weekDate={{
					startAt: new Date(시간변수),
					endAt: new Date(),
				}}
			/>
			<SpaceWeekCard.Body cardList={cardList} />
		</div>
	);
}

interface SpaceWeekStartAtAndEndAt {
	startAt: Date;
	endAt: Date;
}

interface SpaceWeekCardProps {
	weekIndex: number;
	weekDate: SpaceWeekStartAtAndEndAt;
}

const SpaceWeekCardHeading = ({ weekIndex, weekDate }: SpaceWeekCardProps) => {
	const { startAt, endAt } = weekDate;
	const startAtDate = dayjs(startAt).format("MM / DD");
	const endDate = dayjs(endAt).format("MM / DD");

	return (
		<div className="mt-[43px]">
			<h4 className="text-secondary">
				<span className="text-bodyLarge700">
					Week&nbsp;<span>{weekIndex}</span>
				</span>
				&nbsp;
				<span className="text-bodyLarge500">
					({startAtDate} ~ {endDate})
				</span>
			</h4>
		</div>
	);
};

const SpaceWeekCardBody = ({ cardList }: { cardList: SpaceCardList[] }) => {
	return (
		<div className="mt-[31px]">
			<ul className="flex flex-wrap gap-x-[24px] gap-y-[31px]">
				{cardList.slice(0, 8).map(el => (
					<li className="w-[306px] h-[242px]" key={el.title}>
						<DailyCard>
							<DailyCard.Header>{el.title}</DailyCard.Header>
							<DailyCard.Body>{el.content}</DailyCard.Body>
							<DailyCard.TagList
								viewFirstTag={false}
								listItem={TagSliceFn(el.tagList)}
							/>
						</DailyCard>
					</li>
				))}
			</ul>
			{cardList.length > 8 && (
				<button className="px-[28px] py-[13px] mt-[30px] rounded-[6px] w-full bg-gray-2 text-tertiary text-bodyMedium600">
					더보기
				</button>
			)}
		</div>
	);
};

SpaceWeekCard.Header = SpaceWeekCardHeading;
SpaceWeekCard.Body = SpaceWeekCardBody;
