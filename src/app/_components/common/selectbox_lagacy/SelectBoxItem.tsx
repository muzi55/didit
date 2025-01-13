"use client";
import React from "react";

interface SelectBoxItemProps {
	children: React.ReactNode;
	onClick: () => void;
}
export default function SelectBoxItem({
	children,
	onClick,
}: SelectBoxItemProps) {
	return (
		<li className="w-[210px]">
			<button
				className="block text-start w-full px-[20px] py-[8px] hover:bg-gray-2 hover:text-textColor transition-colors duration-300 cursor-pointer"
				onClick={onClick}
			>
				{children}
			</button>
		</li>
	);
}
