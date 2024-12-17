"use client";
import { icons } from "@/shared/libs/common/icons";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderProfile from "./profile/HeaderProfile";

export default function Header() {
	const { isSidebarOpen, setToggleSidebar } = useHeaderSlide();
	const sidebarRotate = isSidebarOpen ? "rotate-180" : "";
	const slideCloseWidth = isSidebarOpen ? "w-[272px]" : "w-[80px]";
	return (
		<header className={`h-full bg-secondary ${slideCloseWidth}`}>
			<HeaderLogo isActive={isSidebarOpen} />
			<HeaderNav />
			<HeaderProfile />
			<button onClick={setToggleSidebar}>
				<div className={sidebarRotate}>{icons.doubleAngle}</div>
			</button>
		</header>
	);
}
