"use client";
import React from "react";

interface SelectBoxItemProps {
	children: React.ReactNode;
	onClick: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}
export default function SelectBoxItem({
	children,
	onClick,
	onMouseEnter,
	onMouseLeave,
}: SelectBoxItemProps) {
	return (
		<li className="">
			<button
				className="block text-start w-full px-[20px] py-[8px] hover:bg-gray-2 hover:text-textColor transition-colors duration-300 cursor-pointer"
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{children}
			</button>
		</li>
	);
}
