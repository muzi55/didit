import React from "react";

import { icons } from "@/shared/libs/common/icons";
import { AmPmUnion, TimeUnion } from "../alarmType";

interface SetAlarmProps {
    title: string;
    amPm: AmPmUnion
    hour: TimeUnion
    minute: TimeUnion
    onClick: ()=>void
}
export default function SetAlarm({
    title,
    amPm,
    hour,
    minute,
    onClick
}: SetAlarmProps) {
	return (
		<div className="flex justify-between px-[16px] pt-[20px] pb-[30px]">
			<div className="text-dark-6">
				<p className="text-bodySmall500 mb-[5px]">{title}</p>
				<p className="text-bodySmall400">{amPm} {hour}:{minute}</p>
			</div>
			<button onClick={onClick} className="ml-[10px]">{icons.angleRight("9CA3AF")}</button>
		</div>
	);
}
