import React from "react";

interface DropdownProps {
	trigger: React.ReactNode;
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: () => void;
}
export default function Dropdown({
	trigger,
	children,
	isOpen,
	setIsOpen,
}: DropdownProps) {
	return (
		<div>
			<div onClick={setIsOpen}>{trigger}</div>
			{isOpen && <div>{children}</div>}
		</div>
	);
}
