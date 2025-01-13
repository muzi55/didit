import React, { useState } from "react";

import SelectBoxItem from "./SelectBoxItem";

interface SelectBoxInfoItemProps {
	children: React.ReactNode;
	onClick: () => void;
	info: React.ReactNode;
}
export default function SelectBoxInfoItem({
	children,
	onClick,
	info,
}: SelectBoxInfoItemProps) {
	const [isHover, setIsHover] = useState<boolean>(false);
	return (
		<div className="">
			<div
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<SelectBoxItem onClick={onClick}>{children}</SelectBoxItem>
			</div>
			{isHover && (
				<div className="w-[279px] absolute top-0 right-[-5px] px-[12px] py-[16px] translate-x-full bg-gray-1">
					{info}
				</div>
			)}
		</div>
	);
}
