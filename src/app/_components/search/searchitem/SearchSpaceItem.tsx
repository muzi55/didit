import React from "react";

import type { ISearchSpaceItem } from "../searchType";

export default function SearchSpaceItem({
	searchText,
	projectDate,
}: ISearchSpaceItem) {
	const { startDate, endDate } = projectDate || {};
	return (
		<div>
			<h4>{searchText}</h4>
			<div>
				{startDate && endDate ? (
					<p>
						{startDate.toLocaleDateString()} ~ {endDate.toLocaleDateString()}
					</p>
				) : (
					<p>{startDate?.toLocaleDateString()}</p>
				)}
			</div>
		</div>
	);
}
