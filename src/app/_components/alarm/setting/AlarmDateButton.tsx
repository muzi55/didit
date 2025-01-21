import React from "react";

interface AlarmDateButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	active: boolean;
	size?: "small" | "medium";
}
export default function AlarmDateButton({
	children,
	onClick,
	active,
	size = "small",
}: AlarmDateButtonProps) {
	const sizeClasses = {
		small: "py-[6px]",
		medium: "py-[13px]",
	};
	const style = active ? "bg-secondary text-white" : "bg-gray-1 text-dark-6";
	return (
		<button
			className={`w-full rounded-lg text-bodySmall400 ${sizeClasses[size]} text-center ${style}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
