"use client";

import Space from "./_components/space/Space";
import TestMEditor from "./editor/MDEditor";
import TestEditor from "./editor/TestEditor";

export default function Home() {
	// console.log(year, month);

	return (
		<>
			<div>
				<p className="bg-red-300">asd</p>
				<TestMEditor />
			</div>
			<p>asd</p>
			<TestEditor />
			<p>asd</p>
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
