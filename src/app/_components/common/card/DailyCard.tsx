import React from "react";

import { DailyCardBody } from "./DailyCardBody";
import { DailyCardHeader } from "./DailyCardHeader";
import { DailyCardTagList } from "./DailyCardTagList";

interface DailyCardProps {
	children: React.ReactNode;
}

export default function DailyCard({ children }: DailyCardProps) {
	return <div>{children}</div>;
}

DailyCard.Header = DailyCardHeader;
DailyCard.Body = DailyCardBody;
DailyCard.TagList = DailyCardTagList;
