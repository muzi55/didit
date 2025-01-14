import React from "react";

import SelectBoxInfo from "./SelectBoxInfo";

export default function SelectBoxList({
	children,
	info,
}: {
	children: React.ReactNode;
	info: boolean;
}) {
	return (
		<div className="flex">
			<ul className="w-full absolute left-0 bottom-[-5px] translate-y-full bg-white z-10 py-[10px] rounded-md">
				{children}
			</ul>
			{info && <SelectBoxInfo description="'asd" guide="asd" />}
		</div>
	);
}
