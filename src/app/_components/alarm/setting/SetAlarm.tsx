import React from "react";

import { icons } from "@/shared/libs/common/icons";

export default function SetAlarm() {
	return (
		<div className="flex justify-between px-[16px] pt-[20px] pb-[30px]">
			<div className="text-dark-6">
				<p className="text-bodySmall500 mb-[5px]">월, 화, 수, 목</p>
				<p className="text-bodySmall400">오후 10:00</p>
			</div>
			<button className="ml-[10px]">{icons.angleRight("9CA3AF")}</button>
		</div>
	);
}
