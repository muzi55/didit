"use client";

import Button from "./_components/common/Button";
import SelectBox from "./_components/common/selectbox/SelectBox";
import SelectBoxInfo from "./_components/common/selectbox/SelectBoxInfo";
import SelectBoxItem from "./_components/common/selectbox/SelectBoxItem";
import SelectBoxList from "./_components/common/selectbox/SelectBoxList";

export default function Home() {
	return (
		<>
			<div>test</div>

			<div className="flex">
				<SelectBox title={"제목1"}>
					<SelectBoxList>
						<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템4</SelectBoxItem>
					</SelectBoxList>
				</SelectBox>

				<SelectBox title={"제목2"}>
					<SelectBoxList>
						<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
						<SelectBoxItem onClick={() => {}}>아이템4</SelectBoxItem>
					</SelectBoxList>
					<SelectBoxInfo
						description="asdasdasd asdsdada dadasdasdada dasdasdadad adasasdas"
						guide="loremasdasdas asdasdasd asdasdasda dadasdasdasd asdasda"
					/>
				</SelectBox>
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
