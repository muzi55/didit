import React from "react";

export default function SearchCard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="border px-[25px] pt-[13px] pb-[21px] shadow-shadow3 rounded-[16px]">
			{children}
		</div>
	);
}
