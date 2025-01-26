"use client";

import { useState } from "react";

import TitleHeading from "./_components/common/heding/TitleHeading";
import Space from "./_components/space/Space";
import CalendarUI from "./_components/write/WriteCalendar";
import WriteForm from "./_components/write/WriteForm";

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

			<CalendarUI />
			<WriteForm />

			<button onClick={openActive}>모달 열기</button>
			<TitleHeading>전체 스페이스</TitleHeading>

			<Space />

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
