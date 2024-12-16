import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

import { icons } from "@/shared/libs/common/icons";
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
	const openRotate = isOpen ? "rotate-180" : "rotate-0";
	return (
		<NavIconWithText icon={item.icon} active={segment === item.segment}>
			<span className="mr-10">{item.content}</span>
			<span className={openRotate}>{icons.angleUp}</span>
		</NavIconWithText>
	);
}
