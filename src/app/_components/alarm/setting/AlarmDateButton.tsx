import React from "react";

interface AlarmDateButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}
export default function AlarmDateButton({
	children,
	onClick,
}: AlarmDateButtonProps) {
	return (
		<button
			className="w-full rounded-lg text-bodySmall400 py-[6px] text-center bg-secondary text-white"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
