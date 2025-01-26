import dayjs from "dayjs";
import React, { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

const CalendarUI = () => {
	// const currentDay = dayjs().format("YYYY-MM-DD");
	const currentDay = dayjs().format("YYYY");
	const MIN_YEAR = 2020;
	const MAX_YEAR = +currentDay;
	const [year, setYear] = useState(+dayjs().format("YYYY")); // 기본 연도
	const [month, setMonth] = useState(+dayjs().format("MM") - 1); // 기본 월 (0-11)

	const months = [
		"1월",
		"2월",
		"3월",
		"4월",
		"5월",
		"6월",
		"7월",
		"8월",
		"9월",
		"10월",
		"11월",
		"12월",
	];

	const handlePrevYear = () => {
		if (year <= MIN_YEAR) return;
		setYear(prev => prev - 1);
	};

	const handleNextYear = () => {
		if (year >= MAX_YEAR) return;
		setYear(prev => prev + 1);
	};

	const handleMonthClick = (index: number) => {
		setMonth(index);
	};

	const calendarBtnStyle = {
		disable: "DFDFE0",
		active: "323232",
	};

	return (
		<div className="flex flex-col items-center">
			{/* 상단 연도 선택 */}
			<div className="flex items-center space-x-[60px] text-dark-6 text-bodyLarge600 mt-[10px]">
				<button
					className="text-gray-500 hover:text-black rotate-180"
					onClick={handlePrevYear}
					disabled={year <= MIN_YEAR}
				>
					{icons.angleRight(
						year <= MIN_YEAR
							? calendarBtnStyle.disable
							: calendarBtnStyle.active,
					)}
				</button>

				<button
					onClick={handlePrevYear}
					className={`${year === MIN_YEAR ? "text-textColor" : ""}`}
				>
					{year - 1}
				</button>
				<button
					className={`${year !== MIN_YEAR && year !== MAX_YEAR ? "text-textColor" : ""}`}
				>
					{year}
				</button>
				<button
					onClick={handleNextYear}
					className={`${year === MAX_YEAR ? "text-textColor" : ""}`}
				>
					{year + 1}
				</button>
				<button
					className="text-gray-500 hover:text-black"
					onClick={handleNextYear}
					disabled={year >= MAX_YEAR}
				>
					{icons.angleRight(
						year >= MAX_YEAR
							? calendarBtnStyle.disable
							: calendarBtnStyle.active,
					)}
				</button>
			</div>

			{/* 월 선택 */}
			<div className="flex justify-around my-[43px] max-w-[834px] text-bodyLarge600">
				{months.map((monthName, index) => (
					<button
						key={index}
						className={`px-4 py-2 rounded-md ${
							month === index
								? "bg-primary-50 text-textColor text-bodyLarge700"
								: "text-gray-500 hover:text-black"
						}`}
						onClick={() => handleMonthClick(index)}
					>
						{monthName}
					</button>
				))}
			</div>
		</div>
	);
};

export default CalendarUI;
