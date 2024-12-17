"use client";
import { icons } from "@/shared/libs/common/icons";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderProfile from "./profile/HeaderProfile";

export default function Header() {
	const { isSidebarOpen, setToggleSidebar } = useHeaderSlide();
	const sidebarRotate = isSidebarOpen ? "rotate-180" : "";

	return (
		<header className="bg-secondary">
			<HeaderLogo isActive={isSidebarOpen} />
			<HeaderNav />
			<HeaderProfile />
			<button onClick={setToggleSidebar}>
				<div className={sidebarRotate}>{icons.doubleAngle}</div>
			</button>
		</header>
	);
}
