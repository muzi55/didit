export type SearchCategory = "회고록" | "태그" | "스페이스";

export interface SearchItemProps {
	dateTime: string;
	project: string;
	search: string;
	category: string;
	content: string;
	hightLight: string;
}

export interface TagSearchProps extends SearchItemProps {
	TagList: React.ReactNode;
}

export interface ISearchSpaceItem {
	searchText: string;
	projectDate?: {
		startDate?: Date;
		endDate?: Date;
	};
}
