import React, { useState } from "react";

import SearchEmpty from "./SearchEmpty";
import SearchItem from "./SearchItem";
import SearchSection from "./SearchSection";
import { SearchTabs } from "./SearchTabs";

export default function Search() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div className="max-w-[854px] w-[100dvh] min-w-[340px] min-h-[294px]">
			<div className="">
				<SearchTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
					<SearchTabs.Tab title="전체">
						<SearchSection title="회고록">
							{[1, 2, 3].map(el => (
								<SearchItem
									key={el}
									dateTime="2021-09-22"
									project="project"
									search={
										<span>
											<span className="text-tertiary">UX</span> 플젝
										</span>
									}
									category="category"
									content="content"
								/>
							))}
						</SearchSection>
						<hr />
						<SearchSection title="태그">태그</SearchSection>
						<hr />
						<SearchSection title="스페이스">스페이스</SearchSection>
						<SearchEmpty />
					</SearchTabs.Tab>
					<SearchTabs.Tab title="회고록">
						<SearchSection title="스페이스">asd</SearchSection>
					</SearchTabs.Tab>
					<SearchTabs.Tab title="태그">태그</SearchTabs.Tab>
					<SearchTabs.Tab title="스페이스">스페이스</SearchTabs.Tab>
				</SearchTabs>
			</div>
		</div>
	);
}
