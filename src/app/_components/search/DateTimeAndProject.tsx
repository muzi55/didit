import dayjs from "dayjs";
import React from "react";

// TODO 해당 DATE 값이 무엇이 오는지 모르기 때문에 추후 time 태그 속성 수정
export function DateTimeAndProject({
	dateTime,
	project,
}: {
	dateTime: Date;
	project: string;
}) {
	return (
		<div className="flex text-bodyExtraSmall500 gap-[10px]">
			<time
				className="text-[var(--search-datetime)]"
				dateTime={dateTime.toISOString()}
			>
				{dayjs().format("YYYY. MM. DD")}
			</time>
			<p className="text-bodyExtraSmall400 text-[var(--search-project)]">
				{project}
			</p>
		</div>
	);
}
