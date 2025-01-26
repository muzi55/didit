import dayjs from "dayjs";
import React from "react";

import { icons } from "@/shared/libs/common/icons";

import Button from "../common/Button";

interface SpaceDetailHeadProps {
	date: Date;
	startIt: Date;
}
export default function SpaceDetailHead({
	date,
	startIt,
}: SpaceDetailHeadProps) {
	const days = {
		year: dayjs(date).format("YYYY"),
		month: dayjs(date).format("MM"),
		day: dayjs(date).format("DD"),
	};
	return (
		<div className="flex justify-between w-full">
			<div className="flex flex-col gap-[7px] px-[20px] border-l-[3px] border-primary text-dark-5 text-bodyMedium500">
				<p>
					기록기간:&nbsp;
					<span className="text-textColor text-bodyMedium600">
						{days.year}년 {days.month}개월 {days.day}일
					</span>
				</p>
				<p>
					시작 일자:&nbsp;
					<span className="text-textColor text-bodyMedium600">
						{dayjs(startIt).format("YYYY.MM.DD")}
					</span>
				</p>
			</div>
			<div>
				<Button onClick={() => {}} color="secondary">
					<span className="flex items-center gap-[10px]">
						등록하기 {icons.writeSpacePlus()}
					</span>
				</Button>
			</div>
		</div>
	);
}
