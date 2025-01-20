import React from "react";

import { icons } from "@/shared/libs/common/icons";

type TagType = "add" | "remove";
interface TagProps {
	children: React.ReactNode;
	onClick: () => void;
	type?: TagType;
}

export default function Tag({ children, onClick, type = "add" }: TagProps) {
	const tagClasses = {
		add: "bg-white",
		remove: "bg-dark-8",
	};

	return (
		<button
			onClick={onClick}
			className={`flex items-center py-[3px] px-[10px] rounded-full border border-stroke ${tagClasses[type]}`}
		>
			{children} {type && <span className="ml-[1px]">{icons.cross}</span>}
		</button>
	);
}
