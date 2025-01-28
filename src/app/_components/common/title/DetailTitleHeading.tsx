import React, { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

import type { DetailTitleHeadingProps } from "./titleType";

export default function DetailTitleHeading({
	trigger,
	children,
}: DetailTitleHeadingProps) {
	const [isShow, setIsShow] = useState<boolean>(false);

	const toggleShowHandler = () => {
		setIsShow(!isShow);
	};
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<button className="rotate-180 bg-gray-3 rounded-full w-[30px] h-[30px] flex justify-center items-center">
					<span className="scale-75">{icons.angleRight("323232")}</span>
				</button>
				<h2 className="text-H4 ml-[26px]">{children}</h2>
			</div>
			<div className="relative">
				<button onClick={toggleShowHandler}>{icons.threeDots}</button>
				{isShow && (
					<div className="absolute -bottom-[15px] translate-y-full right-0 bg-white border border-gray-3 rounded-[6px] py-[10px]">
						{trigger}
					</div>
				)}
			</div>
		</div>
	);
}
