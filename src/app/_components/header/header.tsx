"use client";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderProfile from "./profile/HeaderProfile";
import SidebarButton from "./SidebarButton";

export default function Header() {
	const { isSidebarOpen } = useHeaderSlide();
	const slideCloseWidth = isSidebarOpen ? "w-[272px]" : "w-[80px]";
	return (
		<header className={`h-[100dvh] bg-secondary ${slideCloseWidth}`}>
			<HeaderLogo isActive={isSidebarOpen} />
			<HeaderNav />
			<HeaderProfile />
			<SidebarButton />
		</header>
	);
}
