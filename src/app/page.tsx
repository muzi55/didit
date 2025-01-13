"use client";

import Button from "./_components/common/Button";
import SelectBox from "./_components/common/selectbox/SelectBox";
import SelectBoxItem from "./_components/common/selectbox/SelectBoxItem";

export default function Home() {
	return (
		<>
			<div>test</div>
			<SelectBox title={"제목"}>
				<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
				<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
				<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
			</SelectBox>
			<SelectBox title={"제목1"}>아이템</SelectBox>
			<SelectBox title={"제목2"}>아이템</SelectBox>
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
