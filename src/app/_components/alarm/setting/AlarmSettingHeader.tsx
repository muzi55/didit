import type { AlarmSettingProps } from "../alarmType";
import SwitchButton from "./SwitchButton";

export const AlarmSettingHeader = ({
	active,
	setActive,
}: AlarmSettingProps) => {
	return (
		<div className="flex justify-between items-start pb-[20px]">
			<div>
				<h3 className="text-bodyMedium500 mb-[10px]">회고록 알림</h3>
				<p className="text-bodyExtraSmall400">
					등록된 메일로 회고록 알림을 받습니다.
				</p>
			</div>
			<div className="ml-[9px]">
				<SwitchButton active={active} setActive={setActive} />
			</div>
		</div>
	);
};
