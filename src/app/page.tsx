"use client";

import dayjs from "dayjs";
import { useState } from "react";

import TitleHeading from "./_components/common/heding/TitleHeading";
import { 시간변수 } from "./_components/search/constant";
import Space from "./_components/space/Space";
import SpaceDetailHead from "./_components/space/SpaceDetailHead";
import SpaceWeekCard from "./_components/space/SpaceWeekCard";
import CalendarUI from "./_components/space/WriteCalendar";
import WriteForm from "./_components/write/WriteForm";

export default function Home() {
	const [active, setActive] = useState<boolean>(false);
	const closeActive = () => {
		setActive(false);
	};

	const openActive = () => {
		setActive(true);
	};

	const [year, setYear] = useState(+dayjs().format("YYYY")); // 기본 연도
	const [month, setMonth] = useState(+dayjs().format("MM") - 1); // 기본 월 (0-11)

	// console.log(year, month);
	return (
		<>
			<div>test</div>

			<SpaceDetailHead date={new Date(시간변수)} startIt={new Date(시간변수)} />
			<CalendarUI
				year={year}
				setYear={setYear}
				month={month}
				setMonth={setMonth}
				minYear={2021}
				maxYear={2022}
			/>
			<SpaceWeekCard />
			<WriteForm />

			<button onClick={openActive}>모달 열기</button>
			<TitleHeading>전체 스페이스</TitleHeading>

			<Space />

			<hr />

			{/* {active && (
				<Modal closeModal={closeActive}>
					<Search />
				</Modal>
			)}
			<SearchResult /> */}
			{/* <div className="absolute top-0 left-0 w-full h-full bg-[#20202020] z-10 flex justify-center items-center">
				
			</div> */}
		</>
	);
}
