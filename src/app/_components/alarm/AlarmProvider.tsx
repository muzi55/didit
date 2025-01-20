import React from "react";

export default function AlarmProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="absolute top-0 right-0 alarmBox">{children}</div>;
}
