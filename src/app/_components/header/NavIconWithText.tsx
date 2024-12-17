"use client";
import React from "react";

import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

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
	const { isSidebarOpen } = useHeaderSlide();
	const navActivePoint = active ? style.navItem : "";
	return (
		<span
			className={`relative flex items-center cursor-pointer ${navActivePoint}`}
		>
			<span className="pl-6 mr-3">{icon}</span>
			{isSidebarOpen && (
				<span
					className={`flex item-center text-bodyMedium400 ${active ? "text-primary" : "text-textColor-secondary"}`}
				>
					{children}
				</span>
			)}
		</span>
	);
}
