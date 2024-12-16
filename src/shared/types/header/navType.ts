export type navSubItem = {
	title: string;
	href: string;
};

export interface headerNavType {
	href: string;
	segment: string;
	icon: string;
	activeIcon: string;
	content: string;
	dropdown?: boolean;
	dropdownList?: navSubItem[];
}
