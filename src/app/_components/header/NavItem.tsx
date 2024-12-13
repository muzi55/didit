import Link from "next/link";
import React from "react";

interface NavItemProps {
	icon: React.ReactNode;
	children: React.ReactNode;
	href: string;
}
export default function NavItem({ icon, children, href }: NavItemProps) {
	return (
		<Link className="flex items-center" href={href}>
			<span className="mr-3">{icon}</span>
			<span className="text-bodyMedium400 text-secondary">{children}</span>
		</Link>
	);
}
