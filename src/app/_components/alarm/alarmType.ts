export interface MyAlarmContentProps {
	projectTitle: string;
	content: string;
	onClick: () => void;
	time: string;
	img?: string;
}

export interface AlarmSettingProps {
	active: boolean;
	setActive: () => void;
}

type TimeUnion =
	| "00"
	| "05"
	| "10"
	| "15"
	| "20"
	| "25"
	| "30"
	| "35"
	| "40"
	| "45"
	| "50"
	| "55";

export interface AlarmCheckDatetime {
	day: {
		mon: boolean;
		tue: boolean;
		wed: boolean;
		thu: boolean;
		fri: boolean;
	};
	time: {
		amPm: "am" | "pm";
		hour: TimeUnion;
		minute: TimeUnion;
	};
}
