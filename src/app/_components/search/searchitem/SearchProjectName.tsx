import React from "react";

import { replaceSearch } from "../searchUtils";

interface SearchProjectNameProps {
	search: string;
	hightLight: string;
}

export const SearchProjectName = ({
	search,
	hightLight,
}: SearchProjectNameProps) => {
	return (
		<h4
			className="text-bodySmall500"
			dangerouslySetInnerHTML={{ __html: replaceSearch(search, hightLight) }}
		/>
	);
};

export default SearchProjectName;
