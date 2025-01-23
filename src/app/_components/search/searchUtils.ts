export const replaceSearch = (search: string, hightLight: string) => {
	return search.replace(
		new RegExp(`(${hightLight})`, "g"),
		`<span class="text-tertiary">${hightLight}</span>`,
	);
};
