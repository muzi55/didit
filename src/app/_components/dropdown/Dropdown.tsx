import React, { useState } from "react";

interface DropdownProps {
	trigger: React.ReactNode;
	children: React.ReactNode;
}
export default function Dropdown({ trigger, children }: DropdownProps) {
	const [isOpen, setInOpen] = useState(true);
	const handleSwitchToggle = () => setInOpen(!isOpen);

	return (
		<div>
			<div onClick={handleSwitchToggle}>{trigger}</div>
			{isOpen && <div>{children}</div>}
		</div>
	);
}
