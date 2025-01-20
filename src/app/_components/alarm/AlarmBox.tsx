"use client";
import React, { useState } from "react";

import { crossMedium, icons } from "@/shared/libs/common/icons";

import { AlarmTabs } from "./AlarmTabs";
import MyAlarmSection from "./MyAlarmSection";

const textArr = [
	{
		projectTitle: "디딧",
		content: "디딧 프로젝트내용",
		time: "5분",
		img: "",
		onClick: () => {},
	},
	{
		projectTitle: "디딧1",
		content:
			"디딧 프로젝트내용디딧프로젝트내용디딧 프로젝트내용디딧 프로젝트내용",
		time: "12분",
		img: "",
		onClick: () => {},
	},
	{
		projectTitle: "디딧55",
		content: "디딧 프로젝디딧 프로젝트내용트내용",
		time: "5분",
		img: "",
		onClick: () => {},
	},
];

export default function AlarmBox() {
	const [tab, setTab] = useState<number>(0);
	return (
		<div className="absolute top-0 right-0 alarmBox shadow-shadow1">
			<AlarmBox.AlarmHeader onClick={() => {}} />

			<AlarmTabs activeIndex={tab} setActiveIndex={setTab}>
				<AlarmTabs.Tab title="나에게 온 알림">
					<MyAlarmSection alarmList={textArr} sectionTitle="나에게 온 알림" />
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
			<h2 className="text-H6">알림</h2>
			<button onClick={onClick}>{icons.cross(crossMedium)}</button>
		</div>
	);
};

AlarmBox.AlarmHeader = AlarmHeader;
AlarmBox.AlarmTabs = AlarmTabs;
