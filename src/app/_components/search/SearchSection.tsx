import React from "react";

import type { SearchCategory } from "./searchType";

interface SearchSectionProps {
	children: React.ReactNode;
	title: SearchCategory;
}
export default function SearchSection({ children, title }: SearchSectionProps) {
	return (
		<section className="flex flex-col gap-[10px] py-[20px]">
			<h3 className="pl-[8px] py-[13px] text-bodyMedium600 text-black">
				{title}
			</h3>
			<ul className="flex flex-col gap-[10px] px-[41px]">{children}</ul>
		</section>
	);
}
