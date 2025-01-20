import React from "react";

import { crossMedium, icons } from "@/shared/libs/common/icons";

export default function AlarmBox() {
	return (
		<div className="absolute top-0 right-0 alarmBox">
			<AlarmBox.AlarmHeader onClick={() => {}} />
		</div>
	);
}

const AlarmHeader = ({ onClick }: { onClick: () => void }) => {
	return (
		<div className="flex justify-between">
			<h4 className="text-H6">알림</h4>
			<button onClick={onClick}>{icons.cross(crossMedium)}</button>
		</div>
	);
};

AlarmBox.AlarmHeader = AlarmHeader;
