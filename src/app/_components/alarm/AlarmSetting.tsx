import React, { useState } from "react";

import { AlarmSettingHeader } from "./AlarmSettingHeader";

export default function AlarmSetting() {
	const [active, setActive] = useState<boolean>(false);
	return (
		<div className="py-[30px] px-[20px]">
			<AlarmSetting.Header active={active} setActive={setActive} />
		</div>
	);
}

AlarmSetting.Header = AlarmSettingHeader;
