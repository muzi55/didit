import React from "react";

import AlarmBox from "./AlarmBox";

export default function Alarm() {
	return <div className="absolute top-0 right-0 alarmBox shadow-shadow1 flex flex-col h-[100dvh]">
		<AlarmBox />
	</div>;
}
