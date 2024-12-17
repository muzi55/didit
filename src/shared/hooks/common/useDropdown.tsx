import { useState } from "react";

export default function useDropdown() {
	const [isOpen, setIsOpen] = useState(true);

	const handleOpenDropdown = () => setIsOpen(true);
	const handleCloseDropdown = () => setIsOpen(false);
	const handleToggleDropdown = () => setIsOpen(!isOpen);

	return {
		isOpen,
		handleOpenDropdown,
		handleCloseDropdown,
		handleToggleDropdown,
	};
}
