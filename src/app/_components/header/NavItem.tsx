import Link from "next/link";
import React from "react";

import style from "./NavItem.module.css";
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
	const navActivePoint = active ? style.navItem : "";
	return (
		<Link
			className={`relative flex items-center ${navActivePoint}`}
			href={href}
		>
			<span className="ml-6 mr-3">{icon}</span>
			<span
				className={`text-bodyMedium400 ${active ? "text-primary" : "text-secondary"}`}
			>
				{children}
			</span>
		</Link>
	);
}
