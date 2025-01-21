"use client";

import { useState } from "react";

import Alarm from "./_components/alarm/Alarm";
import Modal from "./_components/modal/Modal";
import Search from "./_components/search/Search";

export default function Home() {
	const [active, setActive] = useState<boolean>(true);
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
			{active && (
				<Modal closeModal={closeActive}>
					<Search />
				</Modal>
			)}
			{/* <div className="absolute top-0 left-0 w-full h-full bg-[#20202020] z-10 flex justify-center items-center">
				
			</div> */}
		</>
	);
}
