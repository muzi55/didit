import React from "react";

interface SearchProjectNameProps {
	search: string;
	hightLight: string;
}

const SearchProjectName: React.FC<SearchProjectNameProps> = ({
	search,
	hightLight,
}) => {
	const replaceSearch = (search: string, hightLight: string) => {
		return search.replace(
			new RegExp(`(${hightLight})`, "g"),
			`<span class="text-tertiary">${hightLight}</span>`,
		);
	};

	return (
		<h4
			className="text-bodySmall500"
			dangerouslySetInnerHTML={{ __html: replaceSearch(search, hightLight) }}
		/>
	);
};

export default SearchProjectName;
