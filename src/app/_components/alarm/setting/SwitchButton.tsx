import React from "react";

import type { AlarmSettingProps } from "../alarmType";

export default function SwitchButton({ active, setActive }: AlarmSettingProps) {
	return (
		<button
			onClick={setActive}
			className={`relative inline-flex items-center h-[28px] rounded-full w-[52px] transition-colors duration-300 ${
				active ? "bg-primary" : "bg-dark-8"
			}`}
		>
			<span
				className={`inline-block w-[21px] h-[21px] transform bg-white rounded-full transition-transform duration-300 ${
					active ? "translate-x-[26px]" : "translate-x-[4px]"
				}`}
			/>
		</button>
	);
}
