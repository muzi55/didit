export type navSubItem = {
	title: string;
	href: string;
};

export interface headerNavType {
	href: string;
	segment: string;
	icon: React.ReactNode;
	activeIcon: React.ReactNode;
	content: string;
	dropdown?: boolean;
	dropdownList?: navSubItem[];
}
