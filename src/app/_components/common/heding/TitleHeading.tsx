import React from "react";

export default function TitleHeading({ children }: { children: string }) {
	return (
		<div className="border-b pb-[22px]">
			<h2 className="text-H4 ml-[11px]">{children}</h2>
		</div>
	);
}
