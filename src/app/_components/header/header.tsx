"use client";
import { useSelectedLayoutSegment } from "next/navigation";

import { icons } from "@/shared/libs/common/icons";

import HeaderLogo from "./HeaderLogo";
import NavItem from "./NavItem";

export default function Header() {
	const segment = useSelectedLayoutSegment();

	console.log(segment);

	return (
		<header>
			<HeaderLogo isActive={true} />
			<br />
			<NavItem
				href="/peed"
				active={segment === "peed"}
				icon={segment === "peed" ? icons.homeActive : icons.home}
			>
				피드
			</NavItem>
			<NavItem href="/space" active={segment === "space"} icon={icons.home}>
				스페이스
			</NavItem>
		</header>
	);
}
