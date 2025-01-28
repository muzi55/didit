import dayjs from "dayjs";
import React, { useState } from "react";

import TitleHeading from "../common/heding/TitleHeading";
import { 시간변수 } from "../search/constant";
import WriteForm from "../write/WriteForm";
import { CreateNewSpace } from "./CreateNewSpace";
import SpaceCardSection from "./SpaceCardSection";
import {
	cardSectionList,
	cardSectionList2,
	newSpaceList,
} from "./SpaceConstant";
import SpaceDetailHead from "./SpaceDetailHead";
import SpaceWeekCard from "./spaceWeek/SpaceWeekCard";
import CalendarUI from "./WriteCalendar";

export default function Space() {
	const [year, setYear] = useState(+dayjs().format("YYYY")); // 기본 연도
	const [month, setMonth] = useState(+dayjs().format("MM") - 1); // 기본 월 (0-11)

	return (
		<div>
			<TitleHeading>전체 스페이스</TitleHeading>

			<SpaceCardSection title="DIDIT" cardList={cardSectionList} />
			<SpaceCardSection title="DIDIT1" cardList={cardSectionList2} />

			<CreateNewSpace />

			<SpaceDetailHead date={new Date(시간변수)} startIt={new Date(시간변수)} />
			<CalendarUI
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
				minYear={2021}
				maxYear={2022}
			/>
			<SpaceWeekCard>
				<SpaceWeekCard.Header
					weekIndex={1}
					weekDate={{
						startAt: new Date(시간변수),
						endAt: new Date(),
					}}
				/>
				<SpaceWeekCard.Body cardList={newSpaceList(3)} />
				<SpaceWeekCard.Header
					weekIndex={2}
					weekDate={{
						startAt: new Date(시간변수),
						endAt: new Date(),
					}}
				/>
				<SpaceWeekCard.Body cardList={newSpaceList(0)} />
			</SpaceWeekCard>
			<hr />
			<WriteForm />
		</div>
	);
}
