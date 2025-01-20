"use client";

import Button from "./_components/common/Button";
import DailyStreakCard from "./_components/common/card/streakcard/DailyStreakCard";
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
			<DailyStreakCard background="/static/images/background/bg.webp">
				<DailyStreakCard.Title>제목</DailyStreakCard.Title>
				<DailyStreakCard.AttendanceDate>
					2021.10.10
				</DailyStreakCard.AttendanceDate>
				<DailyStreakCard.CardFooterText>
					하단 텍스트
				</DailyStreakCard.CardFooterText>
			</DailyStreakCard>
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
