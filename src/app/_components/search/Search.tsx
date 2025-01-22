import React, { useState } from "react";

import SearchEmpty from "./SearchEmpty";
import SearchInput from "./SearchInput";
import SearchSection from "./SearchSection";
import { SearchTabs } from "./SearchTabs";

export default function Search() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div className="max-w-[854px] w-[100dvh] min-w-[340px] min-h-[294px] bg-white py-[21px]">
			<div>
				<div className="px-[30px] mb-[18px]">
					<SearchInput />
				</div>

				<div className="">
					<SearchTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
						<SearchTabs.Tab title="전체">
							<SearchSection title="스페이스">asd</SearchSection>

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
		</div>
	);
}
