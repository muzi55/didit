"use client";

import { useState } from "react";

import CardBookMark from "./_components/common/card/CardBookMark";
import DailyCard from "./_components/common/card/DailyCard";
import TitleHeading from "./_components/common/heding/TitleHeading";
import Space from "./_components/space/Space";

export default function Home() {
	const [active, setActive] = useState<boolean>(false);
	const closeActive = () => {
		setActive(false);
	};

	const openActive = () => {
		setActive(true);
	};
	interface TagListProps {
		label: string;
		onClick: () => void;
	}

	const tagList = [
		{
			label: "태그1",
			onClick: () => {
				console.log("태그1");
			},
		},
		{
			label: "태그2",
			onClick: () => {
				console.log("태그2");
			},
		},
		{
			label: "태그3",
			onClick: () => {
				console.log("태그3");
			},
		},
	];

	const TagSliceFn = (arr: TagListProps[]): TagListProps[] => {
		const sliceArr = arr.slice(0, 2);
		const newItem = {
			label: "...",
			onClick: () => {
				console.log("...");
			},
		};
		const newArr = [...sliceArr, newItem];
		return newArr;
	};

	return (
		<>
			<div>test</div>

			<button onClick={openActive}>모달 열기</button>
			<TitleHeading>전체 스페이스</TitleHeading>
			<CardBookMark active={false}>카드북마크</CardBookMark>

			<DailyCard>
				<DailyCard.Header>헤더</DailyCard.Header>
				<DailyCard.Body>바디</DailyCard.Body>
				{/* 여기서는 2개의 List만 내려주기 */}
				<DailyCard.TagList
					viewFirstTag={false}
					listItem={TagSliceFn(tagList)}
				/>
			</DailyCard>
			<Space />

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
