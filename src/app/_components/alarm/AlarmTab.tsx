interface ITabProps {
	children: React.ReactNode;
	title: string;
}
export const AlarmTab = ({ children, title }: ITabProps) => {
	return (
		<div title={title} className="h-full">
			{children}
		</div>
	);
};
