import React from "react";

import { SpaceWeekCardBody } from "./SpaceWeekCardBody";
import { SpaceWeekCardHeading } from "./SpaceWeekCardHeading";

interface SpaceWeekCard {
	children: React.ReactNode;
}

export default function SpaceWeekCard({ children }: SpaceWeekCard) {
	return <div className="">{children}</div>;
}

SpaceWeekCard.Header = SpaceWeekCardHeading;
SpaceWeekCard.Body = SpaceWeekCardBody;
