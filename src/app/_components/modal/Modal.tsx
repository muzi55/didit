"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
	children,
	closeModal,
}: {
	children: React.ReactNode;
	closeModal: () => void;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	const element =
		typeof window !== "undefined" && document.querySelector(`#modal-root`);

	return mounted && element
		? createPortal(
				<Modal.Container closeModal={closeModal}>{children}</Modal.Container>,
				element,
			)
		: null;
}

const ModalContainer = ({
	children,
	closeModal,
}: {
	children: React.ReactNode;
	closeModal: () => void;
}) => {
	const handleBackgroundClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<div
			className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] z-50"
			onClick={handleBackgroundClick}
		>
			<div className="bg-white rounded-2xl">{children}</div>
		</div>
	);
};

Modal.Container = ModalContainer;
