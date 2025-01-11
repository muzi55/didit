"use client";
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	full?: boolean;
	color?: "primary" | "secondary" | "white";
	size?: "medium";
	round?: boolean;
	onClick: () => void;
}

const sizeClasses = {
	medium: "px-[28px] py-[9px]",
};

const colorClasses = {
	primary: "bg-primary border-primary",
	secondary: "bg-secondary text-white border-secondary",
	white: "bg-white text-black text-black border-black border",
};

export default function Button({
	children,
	full = false,
	color = "primary",
	size = "medium",
	round = false,
	onClick,
}: ButtonProps) {
	const widthFullClass = full ? "w-full" : "";
	const roundedClass = round ? "rounded-full" : "rounded-[6px]";

	return (
		<button
			className={`${widthFullClass} border ${sizeClasses[size]} ${colorClasses[color]} ${roundedClass}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
