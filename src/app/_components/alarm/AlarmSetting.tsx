import React, { useState } from "react";

import AlarmSettingBox from "./AlarmSettingBox";
import { AlarmSettingHeader } from "./AlarmSettingHeader";

export default function AlarmSetting() {
	const [active, setActive] = useState<boolean>(false);
	return (
		<div className="py-[30px] px-[20px]">
			<AlarmSetting.Header active={active} setActive={setActive} />
			{active && <AlarmSetting.Form />}
		</div>
	);
}

const AlarmSettingForm = () => {
	return (
		<div className="flex flex-col gap-[20px] pt-[20px] border-t border-stroke">
			<div>
				<h4 className="text-bodySmall500 mb-[10px]">반복 알림 설정</h4>
				<p className="text-bodyExtraSmall400">
					설정한 날짜 및 시간으로 반복 알림을 받습니다.
				</p>
			</div>

			<AlarmSettingBox title="알림 시간">123</AlarmSettingBox>
			<AlarmSettingBox title="시간 설정">123</AlarmSettingBox>
		</div>
	);
};

AlarmSetting.Header = AlarmSettingHeader;
AlarmSetting.Form = AlarmSettingForm;
