import React from "react";

import SearchItem from "./searchitem/SearchItem";
import type { TagSearchProps } from "./searchType";

export default function TagSearch({
	dateTime,
	project,
	search,
	category,
	content,
	TagList,
	hightLight,
}: TagSearchProps) {
	return (
		<div>
			<SearchItem
				dateTime={dateTime}
				project={project}
				search={search}
				category={category}
				content={content}
				hightLight={hightLight}
			/>

			<div className="flex gap-[8px] mt-[8px]">{TagList}</div>
		</div>
	);
}
