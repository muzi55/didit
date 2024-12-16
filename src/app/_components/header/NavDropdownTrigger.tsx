import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

import { icons } from "@/shared/libs/common/icons";
import type { headerNavType } from "@/shared/types/header/navType";

import NavIconWithText from "./NavIconWithText";

interface NavDropdownTriggerProps {
	item: headerNavType;
}
export default function NavDropdownTrigger({ item }: NavDropdownTriggerProps) {
	const segment = useSelectedLayoutSegment();
	return (
		<NavIconWithText icon={item.icon} active={segment === item.segment}>
			{item.content}
			<span className="ml-10">{icons.angleUp}</span>
		</NavIconWithText>
	);
}
