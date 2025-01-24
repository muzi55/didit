import React from "react";

import { DailyCardBody } from "./DailyCardBody";
import { DailyCardHeader } from "./DailyCardHeader";
import { DailyCardTagList } from "./DailyCardTagList";

interface DailyCardProps {
	children: React.ReactNode;
}

export default function DailyCard({ children }: DailyCardProps) {
	return (
		<div className="flex flex-col w-full rounded-2xl overflow-hidden shadow-shadow3 h-[242px]">
			{children}
		</div>
	);
}

DailyCard.Header = DailyCardHeader;
DailyCard.Body = DailyCardBody;
DailyCard.TagList = DailyCardTagList;
