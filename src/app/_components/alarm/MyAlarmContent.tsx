import Image from "next/image";
import React from "react";

import { AlarmImg } from "./AlarmImage";
import type { MyAlarmContentProps } from "./alarmType";

export const MyAlarmContent = ({
	projectTitle,
	content,
	onClick,
	time,
	img,
}: MyAlarmContentProps) => {
	const { AlarmLogo } = AlarmImg;
	const checkImg = img ? { ...AlarmImg, src: img } : AlarmLogo;

	return (
		<div className="flex items-center py-[10px]">
			<div className="mr-[20px]">
				<Image {...checkImg} alt={AlarmLogo.alt} />
			</div>

			<div className="flex-1">
				<div className="flex justify-between mb-[5px]">
					<h4 className="text-bodyMedium500 text-textColor-secondary">
						{projectTitle}
					</h4>
					<button onClick={onClick}>x</button>
				</div>

				<div className="flex justify-between">
					<div className="text-bodySmall400 line-clamp-2 mr-[9px]">
						{content}
					</div>
					<p className="self-end whitespace-nowrap text-bodyExtraSmall400 text-textColor-secondary">
						{time} 전
					</p>
				</div>
			</div>
		</div>
	);
};
