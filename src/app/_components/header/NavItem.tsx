import Link from "next/link";
import React from "react";

import NavIconWithText from "./NavIconWithText";

interface NavItemProps {
	icon: React.ReactNode;
	children: React.ReactNode;
	href: string;
	active: boolean;
}
export default function NavItem({
	icon,
	children,
	href,
	active,
}: NavItemProps) {
	return (
		<Link href={href}>
			<NavIconWithText icon={icon} active={active}>
				{children}
			</NavIconWithText>
		</Link>
	);
}
