"use client";

import { useState } from "react";

import Space from "./_components/space/Space";

export default function Home() {
	const [active, setActive] = useState<boolean>(false);
	const closeActive = () => {
		setActive(false);
	};

	const openActive = () => {
		setActive(true);
	};

	// console.log(year, month);
	return (
		<>
			<div>test</div>

			<Space />

			{/* <button onClick={openActive}>모달 열기</button> */}

			<hr />
			{/* {active && (
				<Modal closeModal={closeActive}>
					<Search />
				</Modal>
			)}
			<SearchResult /> */}
			{/* <div className="absolute top-0 left-0 w-full h-full bg-[#20202020] z-10 flex justify-center items-center">
				
			</div> */}
		</>
	);
}
