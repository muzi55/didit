"use client";

import { icons } from "@/shared/libs/common/icons";

import DetailTitleHeading from "./_components/common/title/DetailTitleHeading";
import TitleHeading from "./_components/common/title/TitleHeading";
import TitleParent from "./_components/common/title/TitleParent";
import TItleTriggerListItem from "./_components/common/title/TItleTriggerListItem";
import Space from "./_components/space/Space";

export default function Home() {
	// console.log(year, month);

	return (
		<>
			<TitleParent>
				<TitleHeading>스페이스</TitleHeading>
			</TitleParent>

			<TitleParent>
				<DetailTitleHeading
					trigger={
						<>
							<TItleTriggerListItem
								color="danger"
								onClick={() => {}}
								icon={icons.bell}
							>
								span
							</TItleTriggerListItem>
							<TItleTriggerListItem
								color="danger"
								onClick={() => {}}
								icon={icons.bell}
							>
								span
							</TItleTriggerListItem>
						</>
					}
				>
					ㅁㄴㅇ
				</DetailTitleHeading>
			</TitleParent>

			{/* <DetailTitleHeading /> */}
			<Space />

			{/* <button onClick={openActive}>모달 열기</button> */}

			<hr />
			{/* {active && (
				<Modal closeModal={closeActive}>
					<Search />
				</Modal>
			)}
			<SearchResult /> */}
			{/* <div className="absolute top-0 left-0 w-full h-full bg-[#20202020] z-10 flex justify-center items-center">
				
			</div> */}
		</>
	);
}
