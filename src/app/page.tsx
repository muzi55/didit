"use client";

import Button from "./_components/common/Button";
import DailyStreakCard from "./_components/common/card/streakcard/DailyStreakCard";
import Footer from "./_components/footer/Footer";
import DailyEmpty from "./_components/write/DailyEmpty";
import DailyRecordProvider from "./_components/write/DailyRecordProvider";

export default function Home() {
	return (
		<>
			<div>test</div>
			<DailyRecordProvider>
				<DailyEmpty />
			</DailyRecordProvider>
			<hr />
			<DailyStreakCard
				title={"제목"}
				attendanceDate={"2021.10.10"}
				cardFooterText={"하단 텍스트"}
			/>
			<Footer />

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
