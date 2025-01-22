export type SearchCategory = "회고록" | "태그" | "스페이스";

export interface SearchItemProps {
	dateTime: string;
	project: string;
	search: string | React.ReactNode;
	category: string;
	content: string;
}

export interface TagSearchProps extends SearchItemProps {
	TagList: React.ReactNode;
}
