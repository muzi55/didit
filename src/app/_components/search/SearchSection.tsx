import React from "react";

import type { SearchCategory } from "./searchType";

interface SearchSectionProps {
	children: React.ReactNode;
	title: SearchCategory;
}
export default function SearchSection({ children, title }: SearchSectionProps) {
	return (
		<section className="flex flex-col gap-[10px] p-[20px]">
			<h3 className="pl-[8px] py-[13px] text-bodyMedium600 text-black">
				{title}
			</h3>
			<ul className="flex flex-col gap-[10px] px-[41px]">
				<Memoir />
				{children}
			</ul>
		</section>
	);
}

const Memoir = () => {
	return (
		<div className="flex flex-col gap-[8px]">
			<div className="flex text-bodyExtraSmall500 gap-[10px]">
				<time
					className="text-[var(--search-datetime)]"
					dateTime={"2024. 10. 26"}
				>
					2024. 10. 26
				</time>
				<p className="text-bodyExtraSmall400 text-[var(--search-project)]">
					asd
				</p>
			</div>
			<h4 className="text-bodySmall500">
				<span className="text-tertiary">UX</span> 플젝
			</h4>
			<div className="text-dark-4 text-bodyExtraSmall400">
				<p>Keep</p>
				<p className="line-clamp-2">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
					voluptate quas est accusantium laudantium ea, quaerat natus
					dignissimos explicabo rerum eius veritatis et beatae ipsa odit magnam
					earum! Optio, minima.cusantium laudantium ea, quaerat natus
					dignissimos explicabo rerum eius veritatis et beatae ipsa odit magnam
					earum! Optio, minima.
				</p>
			</div>
		</div>
	);
};
