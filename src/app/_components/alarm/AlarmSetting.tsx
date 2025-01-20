import React, { useState } from "react";

export default function AlarmSetting() {
	const [active, setActive] = useState<boolean>(false);
	return (
		<div className="py-[30px] px-[20px]">
			<AlarmSetting.Header active={active} setActive={setActive} />
		</div>
	);
}

const AlarmSettingHeader = ({ active, setActive }) => {
	return (
		<div className="flex justify-between items-start">
			<div>
				<h3 className="text-bodyMedium500 mb-[10px]">회고록 알림</h3>
				<p className="text-bodyExtraSmall400">
					등록된 메일로 회고록 알림을 받습니다.
				</p>
			</div>
			<div className="ml-[9px]">switch</div>
		</div>
	);
};

AlarmSetting.Header = AlarmSettingHeader;
