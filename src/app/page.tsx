"use client";

import Button from "./_components/common/Button";
import DailyCard from "./_components/common/card/DailyCard";
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

			<DailyRecordProvider>
				<DailyCard>
					<DailyCard.Header href="/test">헤더</DailyCard.Header>
					<DailyCard.Body>바디</DailyCard.Body>
				</DailyCard>
			</DailyRecordProvider>

			<DailyRecordProvider>
				<DailyCard>
					<DailyCard.Header>헤더</DailyCard.Header>
					<DailyCard.Body>{`바디 <p>123</p> <h1>123123</h1>`}</DailyCard.Body>
				</DailyCard>
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
