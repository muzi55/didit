import React from "react";

import type { TitleTriggerListItemProps } from "./titleType";

export default function TItleTriggerListItem({
	icon,
	children,
	onClick,
	color = "textSecondary",
}: TitleTriggerListItemProps) {
	const colorClasses = {
		textPrimary: "text-textPrimary",
		textSecondary: "text-textColor-secondary",
		danger: "text-alert-danger",
	};

	return (
		<li>
			<button
				onClick={onClick}
				className={`flex items-center gap-[10px] py-[8px] px-[20px] text-bodySmall400 ${colorClasses[color]}`}
			>
				<span>{icon}</span>
				{children}
			</button>
		</li>
	);
}
