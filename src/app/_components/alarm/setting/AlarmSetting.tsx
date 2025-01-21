import React, { useState } from "react";

import type { AlarmCheckDatetime } from "../alarmType";
import AlarmDateButton from "./AlarmDateButton";
import AlarmSettingBox from "./AlarmSettingBox";
import { AlarmSettingHeader } from "./AlarmSettingHeader";
import { 영부터십이 } from "./constant";
import DateSelect from "./DateSelect";

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
	const [open, setOpen] = useState<boolean>(false);
	const handleSwitchOpen = () => {
		setOpen(!open);
	};

	const [dateCheck, setDateCheck] = useState<AlarmCheckDatetime>({
		day: {
			mon: false,
			tue: false,
			wed: false,
			thu: false,
			fri: false,
		},
		time: {
			amPm: "AM",
			hour: "00",
			minute: "00",
		},
	});

	const handleCheckDate = (day: keyof AlarmCheckDatetime["day"]) => {
		// TODO refactor
		setDateCheck({
			...dateCheck,
			day: {
				...dateCheck.day,
				[day]: !dateCheck.day[day],
			},
		});
	};

	const handleCheckAllDate = () => {
		const allChecked = Object.values(dateCheck.day).every(value => value);
		const anyChecked = Object.values(dateCheck.day).some(value => value);

		setDateCheck({
			...dateCheck,
			day: {
				mon: !allChecked && anyChecked ? true : !allChecked,
				tue: !allChecked && anyChecked ? true : !allChecked,
				wed: !allChecked && anyChecked ? true : !allChecked,
				thu: !allChecked && anyChecked ? true : !allChecked,
				fri: !allChecked && anyChecked ? true : !allChecked,
			},
		});
	};

	const handleSelectAmPm = (value: string) => {
		if (value === "AM" || value === "PM") {
			setDateCheck({
				...dateCheck,
				time: {
					...dateCheck.time,
					amPm: value,
				},
			});
		}
	};

	const handleSelectHour = (value: string) => {
		if (
			value === "00" ||
			value === "05" ||
			value === "10" ||
			value === "15" ||
			value === "20" ||
			value === "25" ||
			value === "30" ||
			value === "35" ||
			value === "40" ||
			value === "45" ||
			value === "50" ||
			value === "55"
		) {
			setDateCheck({
				...dateCheck,
				time: {
					...dateCheck.time,
					hour: value,
				},
			});
		}
	};

	const handleSelectMinute = (value: string) => {
		if (
			value === "00" ||
			value === "05" ||
			value === "10" ||
			value === "15" ||
			value === "20" ||
			value === "25" ||
			value === "30" ||
			value === "35" ||
			value === "40" ||
			value === "45" ||
			value === "50" ||
			value === "55"
		) {
			setDateCheck({
				...dateCheck,
				time: {
					...dateCheck.time,
					minute: value,
				},
			});
		}
	};

	return (
		<section className="flex flex-col gap-[20px] pt-[20px] border-t border-stroke">
			<div>
				<h4 className="text-bodySmall500 mb-[10px]">반복 알림 설정</h4>
				<p className="text-bodyExtraSmall400">
					설정한 날짜 및 시간으로 반복 알림을 받습니다.
				</p>
			</div>

			<AlarmSettingBox title="날짜 설정">
				<div>
					<AlarmDateButton
						active={
							dateCheck.day.mon &&
							dateCheck.day.tue &&
							dateCheck.day.wed &&
							dateCheck.day.thu &&
							dateCheck.day.fri
						}
						onClick={handleCheckAllDate}
					>
						{"평일 (월-금)"}
					</AlarmDateButton>
				</div>

				<p className="text-bodySmall400 text-dark-5">날짜별 선택</p>

				<div className="flex gap-2">
					<AlarmDateButton
						active={dateCheck.day.mon}
						onClick={() => handleCheckDate("mon")}
					>
						{"월"}
					</AlarmDateButton>
					<AlarmDateButton
						active={dateCheck.day.tue}
						onClick={() => handleCheckDate("tue")}
					>
						{"화"}
					</AlarmDateButton>
					<AlarmDateButton
						active={dateCheck.day.wed}
						onClick={() => handleCheckDate("wed")}
					>
						{"수"}
					</AlarmDateButton>
					<AlarmDateButton
						active={dateCheck.day.thu}
						onClick={() => handleCheckDate("thu")}
					>
						{"목"}
					</AlarmDateButton>
					<AlarmDateButton
						active={dateCheck.day.fri}
						onClick={() => handleCheckDate("fri")}
					>
						{"금"}
					</AlarmDateButton>
				</div>
			</AlarmSettingBox>

			<AlarmSettingBox title="시간 설정">
				<div className="flex items-center justify-around text-bodySmall400">
					<DateSelect
						title={dateCheck.time.amPm}
						open={open}
						setOpen={handleSwitchOpen}
						selectList={["AM", "PM"]}
						onSelect={handleSelectAmPm}
					/>
					{"/"}
					<DateSelect
						title={dateCheck.time.hour}
						open={open}
						setOpen={handleSwitchOpen}
						selectList={영부터십이}
						onSelect={handleSelectHour}
					/>
					시
					<DateSelect
						title={dateCheck.time.minute}
						open={open}
						setOpen={handleSwitchOpen}
						selectList={영부터십이}
						onSelect={handleSelectMinute}
					/>
					분
				</div>
			</AlarmSettingBox>
		</section>
	);
};

AlarmSetting.Header = AlarmSettingHeader;
AlarmSetting.Section = AlarmSettingSection;
