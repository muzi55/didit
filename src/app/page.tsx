"use client";

import { useState } from "react";

import TitleHeading from "./_components/common/heding/TitleHeading";
import Space from "./_components/space/Space";
import SpaceCardSection from "./_components/space/SpaceCardSection";
import type { SpaceCardList } from "./_components/space/spaceType";

export default function Home() {
	const [active, setActive] = useState<boolean>(false);
	const closeActive = () => {
		setActive(false);
	};

	const openActive = () => {
		setActive(true);
	};

	const cardSectionList: SpaceCardList[] = [
		{
			id: "1",
			title: "스페이스1",
			content: `
			<p>12</p>
			<p>123</p>
			<p>124</p>
			<p>125</p>
			<p>126</p>
			<p>127</p>
			<p>128</p>
			<p>1298</p>
			<p>120002</p>
		`,
			tagList: [
				{
					label: "태그1",
					onClick: () => {
						console.log();
					},
				},
				{
					label: "태그2",
					onClick: () => {
						console.log();
					},
				},
				{
					label: "태그3",
					onClick: () => {
						console.log();
					},
				},
			],
		},
		{
			id: "2",
			title: "스페이스2",
			content: "스페이스2 내용",
			tagList: [
				{
					label: "태그1",
					onClick: () => {
						console.log();
					},
				},

				{
					label: "태그3",
					onClick: () => {
						console.log();
					},
				},
			],
		},
		{
			id: "3",
			title: "스페이스3",
			content: "스페이스3 내용",
			tagList: [
				{
					label: "태그1",
					onClick: () => {
						console.log();
					},
				},
			],
		},
		{
			id: "4",
			title: "스페이스4",
			content: "스페이스4 내용",
			tagList: [],
		},
	];

	return (
		<>
			<div>test</div>

			<button onClick={openActive}>모달 열기</button>
			<TitleHeading>전체 스페이스</TitleHeading>

			<SpaceCardSection title="DIDIT" cardList={cardSectionList} />
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
