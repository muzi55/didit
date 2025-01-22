interface ITabProps {
	children: React.ReactNode;
	title: string;
}
export const SearchTab = ({ children, title }: ITabProps) => {
	return (
		<div title={title} className="h-full px-[20px]">
			{children}
		</div>
	);
};
