"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

import { icons } from "@/shared/libs/common/icons";

import Dropdown from "../dropdown/Dropdown";
import NavIconWithText from "./NavIconWithText";
import NavItem from "./NavItem";

const navArray = [
	{
		href: "/peed",
		segment: "peed",
		icon: icons.home,
		activeIcon: icons.homeActive,
		content: "피드",
	},
	{
		href: "/space",
		segment: "space",
		icon: icons.layers,
		activeIcon: icons.layersActive,
		content: "스페이스",
		dropdown: true,
		dropdownList: [
			{ title: "Didit", href: "/#" },
			{ title: "데일리", href: "/#" },
		],
	},
	{
		href: "/calendar",
		segment: "calendar",
		icon: icons.calendar,
		activeIcon: icons.calendarActive,
		content: "캘린더",
	},
	{
		href: "/resume",
		segment: "resume",
		icon: icons.comment,
		activeIcon: icons.commentActive,
		content: "이력서",
	},
	{
		href: "/search",
		segment: "search",
		icon: icons.search,
		activeIcon: icons.searchActive,
		content: "검색",
	},
	{
		href: "/notification",
		segment: "notification",
		icon: icons.bell,
		activeIcon: icons.bellActive,
		content: "알림",
	},
];

function HeaderNav() {
	const segment = useSelectedLayoutSegment();
	return (
		<nav>
			<ul>
				{navArray.map(item => {
					if (item.dropdown)
						return (
							<Dropdown
								key={item.href}
								trigger={
									<NavIconWithText
										icon={item.icon}
										active={segment === item.segment}
									>
										{item.content}
									</NavIconWithText>
								}
							>
								<p>item</p>
							</Dropdown>
						);
					return (
						<NavItem
							key={item.href}
							href={item.href}
							active={segment === item.segment}
							icon={segment === item.segment ? item.activeIcon : item.icon}
						>
							피드
						</NavItem>
					);
				})}
			</ul>
		</nav>
	);
}

export default HeaderNav;
