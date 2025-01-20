import Image from "next/image";
import React from "react";

import { AlarmImg } from "./AlarmImage";
import { MyAlarmContentProps } from "./alarmType";
import { MyAlarmContent } from "./MyAlarmContent";

interface MyAlarmSectionProps {
	sectionTitle: string;
	alarmList: MyAlarmContentProps[];
}

export default function MyAlarmSection({
	sectionTitle,
	alarmList,
}: MyAlarmSectionProps) {
	return (
		<section className="px-[20px]">
			<MyAlarmSection.Header>{sectionTitle}</MyAlarmSection.Header>
			<ul className="flex flex-col gap-[20px]">
				{alarmList.map(alarm => (
					<MyAlarmSection.Content
						key={alarm.projectTitle}
						projectTitle={alarm.projectTitle}
						content={alarm.content}
						onClick={alarm.onClick}
						time={alarm.time}
						img={alarm.img}
					/>
				))}
			</ul>
		</section>
	);
}

const MyAlarmHeader = ({ children }: { children: string }) => {
	return <h3 className="text-bodyMedium700 my-[20px]">{children}</h3>;
};

MyAlarmSection.Header = MyAlarmHeader;
MyAlarmSection.Content = MyAlarmContent;
