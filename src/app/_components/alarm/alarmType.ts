export interface MyAlarmContentProps {
	projectTitle: string;
	content: string;
	onClick: () => void;
	time: string;
	img?: string;
}

export interface AlarmSettingProps {
	active: boolean;
	setActive: (value: boolean) => void;
}
