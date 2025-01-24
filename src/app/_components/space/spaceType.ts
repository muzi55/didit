export interface SpaceCardTag {
	label: string;
	onClick: (url: string) => void;
}

export interface SpaceCardList {
	id: string;
	title: string;
	// REFACTOR 이동방식 추후 생각 프로그래마틱 vs 네비게이팅
	// onClick?: (url: string) => void;
	content: string;
	tagList: SpaceCardTag[];
}
