import type { TagType } from "../tag/type";

export interface CardTagListProps {
	tagsType?: TagType;
	viewFirstTag?: boolean;
	listItem: Array<{
		label: string;
		onClick: () => void;
	}>;
}
