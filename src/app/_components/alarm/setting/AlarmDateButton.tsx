import React from "react";

interface AlarmDateButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	active: boolean;
}
export default function AlarmDateButton({
	children,
	onClick,
	active,
}: AlarmDateButtonProps) {
	const style = active ? "bg-secondary text-white" : "bg-gray-1 text-dark-6";
	return (
		<button
			className={`w-full rounded-lg text-bodySmall400 py-[6px] text-center ${style}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
