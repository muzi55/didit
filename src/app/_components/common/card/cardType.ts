import type { TagType } from "../tag/type";

export interface CardTagList {
	label: string;
	onClick: () => void;
}

export interface CardTagListProps {
	tagsType?: TagType;
	viewFirstTag?: boolean;
	listItem: CardTagList[];
}
