import React from "react";

import style from "./NavItem.module.css";

interface NavIconWithText {
	icon: React.ReactNode;
	children: React.ReactNode;
	active: boolean;
}

export default function NavIconWithText({
	icon,
	active,
	children,
}: NavIconWithText) {
	const navActivePoint = active ? style.navItem : "";
	return (
		<span className={`relative flex items-center ${navActivePoint}`}>
			<span className="ml-6 mr-3">{icon}</span>
			<span
				className={`text-bodyMedium400 ${active ? "text-primary" : "text-secondary"}`}
			>
				{children}
			</span>
		</span>
	);
}
