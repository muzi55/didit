import React from "react";

interface AlarmSettingBoxProps {
	children: React.ReactNode;
	title: string;
}
export default function AlarmSettingBox({
	children,
	title,
}: AlarmSettingBoxProps) {
	return (
		<div className="flex flex-col gap-[10px] border rounded-lg p-[20px]">
			<h5 className="text-bodyMedium500">{title}</h5>
			{children}
		</div>
	);
}
