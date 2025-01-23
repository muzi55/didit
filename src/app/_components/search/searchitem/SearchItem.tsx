import React from "react";

import { DateTimeAndProject } from "../DateTimeAndProject";
import type { SearchItemProps } from "../searchType";
import SearchProjectName from "./SearchProjectName";

export default function SearchItem({
	dateTime,
	project,
	search,
	category,
	content,
}: SearchItemProps) {
	return (
		<div className="flex flex-col gap-[8px]">
			<DateTimeAndProject dateTime={dateTime} project={project} />
			<SearchProjectName>{search}</SearchProjectName>
			{/* <h4 className="text-bodySmall500">
				{search}
			</h4> */}
			<div className="text-dark-4 text-bodyExtraSmall400">
				<p>{category}</p>
				<p className="line-clamp-2">{content}</p>
			</div>
		</div>
	);
}
