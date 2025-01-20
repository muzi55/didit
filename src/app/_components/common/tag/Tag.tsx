import React from "react";

import { icons } from "@/shared/libs/common/icons";

type TagType = "add" | "remove" | "hightLight";
interface TagProps {
	children: React.ReactNode;
	onClick: () => void;
	type?: TagType;
	icon?: React.ReactNode;
}

export default function Tag({
	children,
	onClick,
	type = "add",
	icon,
}: TagProps) {
	const tagClasses = {
		add: "text-bodyExtraSmall500 bg-white",
		remove: "text-bodyExtraSmall500 bg-dark-8",
		hightLight: "text-bodyExtraSmall500 bg-blue-light-5 text-tertiary",
	};

	return (
		<button
			onClick={onClick}
			className={` flex items-center py-[3px] px-[10px] rounded-full border border-stroke ${tagClasses[type]}`}
		>
			{children} {icon && <span className="ml-[1px]">{icons.cross}</span>}
		</button>
	);
}
