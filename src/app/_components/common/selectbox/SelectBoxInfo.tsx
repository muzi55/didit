import React from "react";

interface SelectBoxInfoProps {
	description: string;
	guide: string;
}
export default function SelectBoxInfo({
	description,
	guide,
}: SelectBoxInfoProps) {
	return (
		<div className="flex flex-col gap-[5px] w-[255px] px-3 py-4 bg-gray-1 mr-[8px]">
			<SelectBoxInfoTitle title="템플릿 설명" />
			<SelectBoxInfoDescription>{description}</SelectBoxInfoDescription>
			<SelectBoxInfoTitle title="작성 가이드" />
			<SelectBoxInfoDescription>{guide}</SelectBoxInfoDescription>
		</div>
	);
}

const SelectBoxInfoTitle = ({ title }: { title: string }) => {
	return <h3 className="text-bodyExtraSmall500 text-tertiary">{title}</h3>;
};

const SelectBoxInfoDescription = ({ children }: { children: string }) => {
	return <p className="text-bodyExtraSmall400">{children}</p>;
};
