export interface TitleProps {
	children: string;
}

export interface DetailTitleHeadingProps extends TitleProps {
	trigger: React.ReactElement<TitleTriggerListItemProps>;
}

export interface TitleTriggerListItemProps {
	icon: React.ReactNode;
	children: string;
	onClick: () => void;
	color?: "textSecondary" | "danger" | "textPrimary";
}
