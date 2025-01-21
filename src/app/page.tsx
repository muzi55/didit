"use client";

import Alarm from "./_components/alarm/Alarm";
import Search from "./_components/search/Search";

export default function Home() {
	return (
		<>
			<div>test</div>
			<Alarm />
			<div className="absolute top-0 left-0 w-full h-full bg-[#20202020] z-10 flex justify-center items-center">
				<Search />
			</div>
		</>
	);
}
