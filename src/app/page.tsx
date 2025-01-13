"use client";

import Button from "./_components/common/Button";
import SelectBox from "./_components/common/selectbox/SelectBox";

export default function Home() {
	return (
		<>
			<div>test</div>

			<SelectBox title={"제목1"}>
				<div>
					{/* // 목록 */}
					<ul>
						{/* // 아이템 */}
						<li></li>
					</ul>

					{/* // 안내문  */}
					<div></div>
				</div>
			</SelectBox>
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
