"use client";
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	full?: boolean;
	color: "primary" | "secondary" | "white";
	size?: "medium";
	round?: boolean;
	onClick: () => void;
}
export default function Button({
	children = "button",
	full,
	color = "primary",
	size = "medium",
	round = false,
	onClick,
}: ButtonProps) {
	const sizeClass = {
		medium: "px-[28px] py-[9px]",
	};

	const colorClass = {
		primary: "bg-primary border-primary",
		secondary: "bg-secondary text-white border-secondary",
		white: "bg-white text-black text-black border-black border",
	};

	const widthFull = full ? "w-full" : "";

	const rounded = round ? "rounded-full" : "rounded-[6px]";

	return (
		<button
			className={`${widthFull} border ${sizeClass[size]} ${colorClass[color]} ${rounded}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
}
