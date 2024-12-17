"use client";
import React from "react";

import useDropdown from "@/shared/hooks/common/useDropdown";
import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";
import type { headerNavType } from "@/shared/types/header/navType";

import Dropdown from "../dropdown/Dropdown";
import NavDropdownTrigger from "./NavDropdownTrigger";
import NavSubList from "./NavSubList";

interface NavDropdownProps {
	item: headerNavType;
}
export default function NavDropdown({ item }: NavDropdownProps) {
	const { isOpen, handleToggleDropdown } = useDropdown();
	const { isSidebarOpen } = useHeaderSlide();
	return (
		<Dropdown
			key={item.href}
			isOpen={isOpen}
			setIsOpen={handleToggleDropdown}
			trigger={<NavDropdownTrigger isOpen={isOpen} item={item} />}
		>
			{isSidebarOpen && <NavSubList dropdownList={item.dropdownList ?? []} />}
		</Dropdown>
	);
}
