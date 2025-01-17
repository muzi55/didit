"use client";

import Button from "./_components/common/Button";
import DailyRecordProvider from "./_components/write/DailyRecordProvider";

export default function Home() {
	return (
		<>
			<div>test</div>
			<DailyRecordProvider>
				<p className="bg-red-300">테스트</p>
			</DailyRecordProvider>
			{/* <SelectBox title={"제목1"}>아이템</SelectBox>
			<SelectBox title={"제목2"}>아이템</SelectBox> */}
			<Button
				color="primary"
				size="medium"
				full={true}
				round={true}
				onClick={() => {}}
			>
				<p className="text-bodySmall400">테스트트</p>
			</Button>
		</>
	);
}
