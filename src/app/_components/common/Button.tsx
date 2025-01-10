import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	full?: boolean;
	color: "primary" | "secondary";
	size?: "small" | "medium" | "large";
}
export default function Button({
	children = "button",
	full,
	color = "primary",
	size = "medium",
}: ButtonProps) {
	return <button className={`$`}>{children}</button>;
}
