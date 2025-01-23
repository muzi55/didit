"use client";

import React, { useState } from "react";

import Tag from "../../common/tag/Tag";
import { 시간변수 } from "../constant";
import SearchEmpty from "../SearchEmpty";
import SearchItem from "../searchitem/SearchItem";
import SearchSpaceItem from "../searchitem/SearchSpaceItem";
import { SearchTabs } from "../SearchTabs";
import TagSearch from "../TagSearch";
import SearchCard from "./SearchCard";
import SearchWord from "./SearchWord";

export default function SearchResult() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div>
			<SearchTabs
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				searchHeader={<SearchWord word={"UX"} />}
				type="result"
			>
				<SearchTabs.Tab title="회고록">
					<div className="flex flex-col px-[20px] gap-[30px] mt-[23px]">
						{[
							1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 123, 1412, 123123, 1231123, 13123,
							1231,
						].map(el => (
							<SearchCard key={el}>
								<SearchItem
									dateTime={시간변수}
									project="project"
									search="UX 플젝"
									hightLight="UX"
									category="category"
									content="content"
								/>
							</SearchCard>
						))}
					</div>
				</SearchTabs.Tab>
				<SearchTabs.Tab title="태그">
					<div className="flex flex-col px-[20px] gap-[30px] mt-[23px]">
						{[
							1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 123, 1412, 123123, 1231123, 13123,
							1231,
						].map(el => (
							<SearchCard key={el}>
								<TagSearch
									search="UX"
									hightLight="UX"
									dateTime={시간변수}
									project="project"
									category="category"
									content="content"
									TagList={
										<div className="flex gap-[8px]">
											<Tag onClick={() => {}} type="hightLight" icon={false}>
												#UX
											</Tag>
											<Tag onClick={() => {}} type="remove" icon={false}>
												#UI
											</Tag>
										</div>
									}
								/>
							</SearchCard>
						))}
					</div>
				</SearchTabs.Tab>
				<SearchTabs.Tab title="스페이스">
					<div className="flex flex-col px-[20px] gap-[30px] mt-[23px]">
						{[
							1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 123, 1412, 123123, 1231123, 13123,
							1231,
						].map(el => (
							<SearchCard key={el}>
								<SearchSpaceItem
									search="UX 플젝"
									hightLight="UX"
									projectDate={{ startDate: 시간변수 }}
								/>
							</SearchCard>
						))}
					</div>
				</SearchTabs.Tab>

				<SearchEmpty />
			</SearchTabs>
		</div>
	);
}
