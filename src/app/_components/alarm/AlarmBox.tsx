"use client";
import React, { useState } from "react";

import { crossMedium, icons } from "@/shared/libs/common/icons";

import { AlarmTabs } from "./AlarmTabs";
import MyAlarmSection from "./MyAlarmSection";
import AlarmSetting from "./setting/AlarmSetting";

const textArr = [
	{
		projectTitle: "디딧10",
		content: "디딧 프로젝트내용",
		time: "5분",
		img: "",
		onClick: () => {},
	},
	{
		projectTitle: "디딧23",
		content: "디딧 프로젝트내용",
		time: "5분",
		img: "",
		onClick: () => {},
	},
	{
		projectTitle: "디딧51",
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
		<div className="">
			<AlarmBox.AlarmHeader onClick={() => {}} />

			<AlarmTabs activeIndex={tab} setActiveIndex={setTab}>
				<AlarmTabs.Tab title="나에게 온 알림">
					{[].length > 0 ? (
						<>
							<MyAlarmSection
								alarmList={[textArr[0]]}
								sectionTitle="나에게 온 알림"
							/>
							<MyAlarmSection
								alarmList={textArr}
								sectionTitle="나에게 온 알림"
							/>
						</>
					) : (
						<AlarmEmpty />
					)}
				</AlarmTabs.Tab>
				<AlarmTabs.Tab title="알림 설정">
					<AlarmSetting />
				</AlarmTabs.Tab>
			</AlarmTabs>
		</div>
	);
}

const AlarmHeader = ({ onClick }: { onClick: () => void }) => {
	return (
		<div className="sticky top-0 flex justify-between py-[30px] border-b border-stroke px-[20px] bg-white">
			<h2 className="text-H6">알림</h2>
			<button onClick={onClick}>{icons.cross(crossMedium)}</button>
		</div>
	);
};

const AlarmEmpty = () => {
	return (
		<div className="flex flex-col items-center text-center py-[50px]">
			<div className="mb-[10px]">{icons.emptyAlarm}</div>
			<p className="text-bodyMedium700">아직 알림이 없네요. </p>
			<p className="text-bodySmall400">새로운 소식이 생기면 알려드릴게요!</p>
		</div>
	);
};
AlarmBox.AlarmHeader = AlarmHeader;
AlarmBox.AlarmTabs = AlarmTabs;
