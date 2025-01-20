import React from "react";

import { DailyCardBody } from "./DailyCardBody";
import { DailyCardHeader } from "./DailyCardHeader";
import { DailyCardTagList } from "./DailyCardTagList";

interface DailyCardProps {
	children: React.ReactNode;
}

export default function DailyCard({ children }: DailyCardProps) {
	return (
		<div className="w-full rounded-2xl overflow-hidden shadow-shadow3">
			{children}
		</div>
	);
}

DailyCard.Header = DailyCardHeader;
DailyCard.Body = DailyCardBody;
DailyCard.TagList = DailyCardTagList;
