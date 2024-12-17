import { create } from "zustand";

interface headerSlide {
	isSidebarOpen: boolean;
	setToggleSidebar: () => void;
}
export const useHeaderSlide = create<headerSlide>(set => ({
	isSidebarOpen: true,
	setToggleSidebar: () =>
		set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
