import dayjs from "dayjs";
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
					<time dateTime={dayjs(startDate).format("YYYY. MM. DD")}>
						{dayjs(startDate).format("YYYY. MM. DD")}
					</time>
					&nbsp;~&nbsp;
					{endDate && (
						<time dateTime={endDate}>
							{dayjs(startDate).format("YYYY. MM. DD")}
						</time>
					)}
				</p>
			</div>
		</div>
	);
}
