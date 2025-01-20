import React, { useState } from "react";

import type { AlarmCheckDatetime } from "../alarmType";
import AlarmDateButton from "./AlarmDateButton";
import AlarmSettingBox from "./AlarmSettingBox";
import { AlarmSettingHeader } from "./AlarmSettingHeader";

export default function AlarmSetting() {
	const [active, setActive] = useState<boolean>(false);

	const handleSwitchActive = () => {
		setActive(!active);
	};
	return (
		<div className="py-[30px] px-[20px]">
			<AlarmSetting.Header active={active} setActive={handleSwitchActive} />
			{active && <AlarmSetting.Section />}
		</div>
	);
}

const AlarmSettingSection = () => {
	const [dateCheck, setDateCheck] = useState<AlarmCheckDatetime>({
		day: {
			mon: false,
			tue: false,
			wed: false,
			thu: false,
			fri: false,
		},
		time: {
			amPm: "am",
			hour: "00",
			minute: "00",
		},
	});

	return (
		<section className="flex flex-col gap-[20px] pt-[20px] border-t border-stroke">
			<div>
				<h4 className="text-bodySmall500 mb-[10px]">반복 알림 설정</h4>
				<p className="text-bodyExtraSmall400">
					설정한 날짜 및 시간으로 반복 알림을 받습니다.
				</p>
			</div>

			<AlarmSettingBox title="알림 시간">
				123
				<div>
					<AlarmDateButton onClick={() => {}}>{"평일 (월-금)"}</AlarmDateButton>
				</div>
			</AlarmSettingBox>
			<AlarmSettingBox title="시간 설정">123</AlarmSettingBox>
		</section>
	);
};

AlarmSetting.Header = AlarmSettingHeader;
AlarmSetting.Section = AlarmSettingSection;
