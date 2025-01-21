"use client";
import React from "react";

interface SelectBoxItemProps {
	children: React.ReactNode;
	onClick: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
	size?: "small" | "medium";
}
export default function SelectBoxItem({
	children,
	onClick,
	onMouseEnter,
	onMouseLeave,
	size = "medium",
}: SelectBoxItemProps) {
	const sizeClasses = {
		small: "px-[10px] py-[12px]",
		medium: "px-[20px] py-[12px]",
	};

	const widthSize = size === "medium" ? "w-[210px]" : "w-[67px]";
	return (
		<li className={widthSize}>
			<button
				className={`block text-start w-full ${sizeClasses[size]} hover:bg-gray-2 hover:text-textColor transition-colors duration-300 cursor-pointer`}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{children}
			</button>
		</li>
	);
}
