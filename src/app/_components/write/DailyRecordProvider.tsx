import React from "react";

export default function DailyRecordProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full rounded-2xl overflow-hidden shadow-shadow3">
			{children}
		</div>
	);
}
