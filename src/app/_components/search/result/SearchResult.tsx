"use client";

import Link from "next/link";
import React, { useState } from "react";

import Tag from "../../common/tag/Tag";
import SearchEmpty from "../SearchEmpty";
import SearchItem from "../searchitem/SearchItem";
import SearchSpaceItem from "../searchitem/SearchSpaceItem";
import SearchSection from "../SearchSection";
import { SearchTabs } from "../SearchTabs";
import TagSearch from "../TagSearch";

export default function SearchResult() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const 시간변수 = "Thu Jan 25 2025 19:44:57 GMT+0900 (한국 표준시)";
	return (
		<div>
			<SearchTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
				<SearchTabs.Tab title="전체">
					<SearchSection title="회고록">
						{[1, 2, 3].map(el => (
							<SearchItem
								key={el}
								dateTime={시간변수}
								project="project"
								search="UX 플젝"
								hightLight="UX"
								category="category"
								content="content"
							/>
						))}
					</SearchSection>
					<hr />
					<SearchSection title="태그">
						{[1, 2, 3].map(el => (
							<TagSearch
								key={el}
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
						))}
					</SearchSection>
					<hr />
					<SearchSection title="스페이스">
						<SearchSpaceItem
							search="UX 플젝"
							hightLight="UX"
							projectDate={{ startDate: 시간변수 }}
						/>
						<SearchSpaceItem
							search="UX 플젝2"
							hightLight="UX"
							projectDate={{ startDate: 시간변수 }}
						/>
						<SearchSpaceItem
							search="UX 플젝3"
							hightLight="UX"
							projectDate={{ startDate: 시간변수, endDate: 시간변수 }}
						/>
					</SearchSection>

					<Link href="/#" className="py-[8px] text-tertiary">
						+ 검색 결과 더보기
					</Link>
					<SearchEmpty />
				</SearchTabs.Tab>
				<SearchTabs.Tab title="회고록">
					<SearchSection title="스페이스">asd</SearchSection>
				</SearchTabs.Tab>
				<SearchTabs.Tab title="태그">태그</SearchTabs.Tab>
				<SearchTabs.Tab title="스페이스">스페이스</SearchTabs.Tab>
			</SearchTabs>
		</div>
	);
}
