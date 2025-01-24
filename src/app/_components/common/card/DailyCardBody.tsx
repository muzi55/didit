export const DailyCardBody = ({ children }: { children: string }) => {
	return (
		<div
			className="flex-1 mt-[13px] mb-[33px] px-[20px] overflow-hidden h-[200px]"
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};
