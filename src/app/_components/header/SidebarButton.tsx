"use client";
import React from "react";

import { icons } from "@/shared/libs/common/icons";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

export default function SidebarButton() {
	const { isSidebarOpen, setToggleSidebar } = useHeaderSlide();
	const sidebarRotate = isSidebarOpen ? "rotate-180" : "";
	const sidebarMargin = isSidebarOpen
		? "mt-[33px] justify-end mr-[45px]"
		: "mt-[38px] justify-center";
	return (
		<div className={`flex ${sidebarMargin}`}>
			<button className="" onClick={setToggleSidebar}>
				<div className={sidebarRotate}>{icons.doubleAngle}</div>
			</button>
		</div>
	);
}
