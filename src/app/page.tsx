"use client";

import Button from "./_components/common/Button";
import DailyCard from "./_components/common/card/DailyCard";
import Tag from "./_components/common/tag/Tag";
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
					<DailyCard.Header>헤더</DailyCard.Header>
					<DailyCard.Body>{`바디 <p>123</p> <h1>123123</h1>`}</DailyCard.Body>
					<DailyCard.TagList
						listItem={[
							{ label: "태그1", onClick: () => {} },
							{ label: "태그2", onClick: () => {} },
						]}
					/>
				</DailyCard>
			</DailyRecordProvider>

			<Tag onClick={() => {}}>태그</Tag>
			<Tag onClick={() => {}} type="remove">
				태그
			</Tag>
			<Tag onClick={() => {}} type="hightLight">
				태그
			</Tag>
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
