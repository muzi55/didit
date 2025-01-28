"use client";

import Reminiscence from "./_components/reminiscence/Reminiscence";

export default function Home() {
	// console.log(year, month);

	return (
		<>
			<Reminiscence></Reminiscence>
			{/* <TitleParent>
				<TitleHeading>스페이스</TitleHeading>
			</TitleParent> */}

			{/* <TitleParent>
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
			</TitleParent> */}

			{/* <DetailTitleHeading /> */}
			{/* <Space /> */}

			{/* <button onClick={openActive}>모달 열기</button> */}

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
