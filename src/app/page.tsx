"use client";

import Button from "./_components/common/Button";
import RecordHeader from "./_components/common/write/RecordHeader";

export default function Home() {
	return (
		<>
			<div>test</div>

			<RecordHeader>
				<RecordHeader.Left>1</RecordHeader.Left>
				<RecordHeader.Right>2</RecordHeader.Right>
			</RecordHeader>

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
