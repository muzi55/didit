import dayjs from "dayjs";
import React from "react";

import { 시간변수 } from "../search/constant";

export default function SpaceWeekCard() {
	return (
		<div className="">
			<SpaceWeekCard.Header
				weekIndex={1}
				weekDate={{
					startAt: new Date(시간변수),
					endAt: new Date(),
				}}
			/>
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

SpaceWeekCard.Header = SpaceWeekCardHeading;
