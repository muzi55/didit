"use client";
import React, { useState } from "react";

import { crossMedium, icons } from "@/shared/libs/common/icons";

import { AlarmTabs } from "./AlarmTabs";

export default function AlarmBox() {
	const [tab, setTab] = useState<number>(0);
	return (
		<div className="absolute top-0 right-0 alarmBox shadow-shadow1">
			<AlarmBox.AlarmHeader onClick={() => {}} />

			<AlarmTabs activeIndex={tab} setActiveIndex={setTab}>
				<AlarmTabs.Tab title="나에게 온 알림">
					<div>알림1</div>
				</AlarmTabs.Tab>
				<AlarmTabs.Tab title="알림 설정">
					<div>알림2</div>
				</AlarmTabs.Tab>
			</AlarmTabs>
		</div>
	);
}

const AlarmHeader = ({ onClick }: { onClick: () => void }) => {
	return (
		<div className="flex justify-between py-[30px] border-b border-stroke px-[20px]">
			<h4 className="text-H6">알림</h4>
			<button onClick={onClick}>{icons.cross(crossMedium)}</button>
		</div>
	);
};

AlarmBox.AlarmHeader = AlarmHeader;
AlarmBox.AlarmTabs = AlarmTabs;
