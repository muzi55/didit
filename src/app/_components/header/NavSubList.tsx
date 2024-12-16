import React from "react";

import { icons } from "@/shared/libs/common/icons";
import type { navSubItem } from "@/shared/types/header/navType";

import NavSubItem from "./NavSubItem";

interface NavSubListProps {
	dropdownList: navSubItem[];
}
export default function NavSubList({ dropdownList }: NavSubListProps) {
	return (
		<ul className="ml-[3.75rem] pt-5">
			<NavSubItem href="/#">
				스페이스 추가
				<div className="flex items-center justify-center ml-5">{icons.add}</div>
			</NavSubItem>

			{dropdownList.map(subItem => (
				<NavSubItem key={subItem.title} href={subItem.href}>
					{subItem.title}
				</NavSubItem>
			))}
		</ul>
	);
}
