import React from "react";

export default function SelectBoxList({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ul className="w-[210px]">
			{/* // 아이템 */}
			{children}
		</ul>
	);
}
