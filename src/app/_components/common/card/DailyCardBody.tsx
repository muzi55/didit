export const DailyCardBody = ({ children }: { children: string }) => {
	return (
		<div
			className="pt-[13px] pb-[33px] px-[20px]"
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
};
