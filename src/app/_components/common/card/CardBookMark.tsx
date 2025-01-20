import React from "react";

import { icons } from "@/shared/libs/common/icons";

export default function CardBookMark({ children }: { children: string }) {
	return (
		<div className="flex items-center gap-x-[11px]">
			<span>{icons.bookMark}</span>
			{children}
		</div>
	);
}
