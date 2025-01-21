"use client";

import { useState } from "react";

import Alarm from "./_components/alarm/Alarm";
import Modal from "./_components/modal/Modal";

export default function Home() {
	const [active, setActive] = useState<boolean>(false);
	const closeActive = () => {
		setActive(false);
	};

	const openActive = () => {
		setActive(true);
	};
	return (
		<>
			<div>test</div>

			<button onClick={openActive}>모달 열기</button>

			<Alarm />
			{active && <Modal closeModal={closeActive}>모달테스트</Modal>}
		</>
	);
}
