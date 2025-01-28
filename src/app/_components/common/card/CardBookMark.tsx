import React from "react";

import { icons } from "@/shared/libs/common/icons";

export default function CardBookMark({
	children,
	active = false,
}: {
	children: string;
	active?: boolean;
}) {
	return (
		<div className="flex items-center gap-x-[11px]">
			<span>{icons.bookMark(active)}</span>
			{children}
		</div>
	);
}
