"use client";

import Button from "./_components/common/Button";
import SelectBox from "./_components/common/selectbox/SelectBox";
import SelectBoxInfoItem from "./_components/common/selectbox/SelectBoxInfoItem";
import SelectBoxItem from "./_components/common/selectbox/SelectBoxItem";

export default function Home() {
	return (
		<>
			<div>test</div>
			<div className="flex">
				<div>
					<SelectBox title={"제목1"}>
						<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
					</SelectBox>
				</div>

				<div>
					<SelectBox title={"제목2"}>
						<SelectBoxInfoItem
							onClick={() => {}}
							info={{ description: "설명", guide: "가이드" }}
						>
							아이템1
						</SelectBoxInfoItem>
						<SelectBoxInfoItem
							onClick={() => {}}
							info={{ description: "설명3123", guide: "가이드123123" }}
						>
							아이템2
						</SelectBoxInfoItem>
						<SelectBoxInfoItem
							onClick={() => {}}
							info={{ description: "설명asdasd", guide: "가이드asdasd" }}
						>
							아이템3
						</SelectBoxInfoItem>
					</SelectBox>
				</div>
			</div>
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
