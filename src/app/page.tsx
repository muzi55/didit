"use client";

import { useState } from "react";

import TitleHeading from "./_components/common/heding/TitleHeading";
import Space from "./_components/space/Space";
import SpaceCardSection from "./_components/space/SpaceCardSection";
import { spaceTagList } from "./_components/space/SpaceConstant";

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
			<TitleHeading>전체 스페이스</TitleHeading>

			<SpaceCardSection title="DIDIT" cardList={spaceTagList} />
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
