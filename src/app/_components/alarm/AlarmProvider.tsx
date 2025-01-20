import React from "react";

export default function AlarmProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="absolute top-0 right-0 alarmBox">
			<div>
				<p>알람</p>
				<button>x</button>
			</div>

			<div>
				<div>탭</div>
				<div>내용</div>
			</div>
			{children}
		</div>
	);
}
