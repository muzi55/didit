import React from "react";

export default function DecorationProvider({
	children,
	style = { width: "100%" },
	className = "",
}: {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className: string;
}) {
	return (
		<div
			className={className}
			style={{ border: "1px solid #aaa", padding: "1rem", ...style }}
		>
			{children}
		</div>
	);
}
