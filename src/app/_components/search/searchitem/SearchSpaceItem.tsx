import React from "react";

import type { ISearchSpaceItem } from "../searchType";
import SearchProjectName from "./SearchProjectName";

export default function SearchSpaceItem({
	search,
	hightLight,
	projectDate,
}: ISearchSpaceItem) {
	const { startDate, endDate } = projectDate || {};
	return (
		<div className="flex flex-col gap-[8px]">
			<SearchProjectName search={search} hightLight={hightLight} />
			<div className="flex text-bodyExtraSmall400">
				<p>
					<time dateTime={startDate.toISOString()}>
						{startDate.toLocaleDateString()}
					</time>
					&nbsp;~&nbsp;
					{endDate && (
						<time dateTime={endDate.toISOString()}>
							{startDate.toLocaleDateString()}
						</time>
					)}
				</p>
			</div>
		</div>
	);
}
