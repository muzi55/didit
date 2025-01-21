"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

import { icons } from "@/shared/libs/common/icons";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";
import type { headerNavType } from "@/shared/types/header/navType";

import NavIconWithText from "./NavIconWithText";

interface NavDropdownTriggerProps {
	item: headerNavType;
	isOpen: boolean;
}
export default function NavDropdownTrigger({
	item,
	isOpen,
}: NavDropdownTriggerProps) {
	const segment = useSelectedLayoutSegment();
	const { isSidebarOpen } = useHeaderSlide();
	const openRotate = isOpen ? "rotate-180" : "rotate-0";
	return (
		<NavIconWithText icon={item.icon} active={segment === item.segment}>
			<span>{item.content}</span>
			{isSidebarOpen && (
				<span className={`ml-10 ${openRotate}`}>{icons.angleUp()}</span>
			)}
		</NavIconWithText>
	);
}
