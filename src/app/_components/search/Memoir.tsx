import React from "react";

import { DateTimeAndProject } from "./DateTimeAndProject";

interface MemoirProps {
	dateTime: string;
	project: string;
	search: string | React.ReactNode;
	category: string;
	content: string;
}
export default function Memoir({
	dateTime,
	project,
	search,
	category,
	content,
}: MemoirProps) {
	return (
		<div className="flex flex-col gap-[8px]">
			<DateTimeAndProject dateTime={dateTime} project={project} />
			<h4 className="text-bodySmall500">
				{/* <span className="text-tertiary">UX</span> 플젝 */}
				{search}
			</h4>
			<div className="text-dark-4 text-bodyExtraSmall400">
				<p>{category}</p>
				<p className="line-clamp-2">{content}</p>
			</div>
		</div>
	);
}
