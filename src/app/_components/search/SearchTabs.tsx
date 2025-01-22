import React from "react";

import SearchInput from "./SearchInput";
import { SearchTab } from "./SearchTab";

interface IChildProps {
	title: string;
}
interface ITabProps {
	children: React.ReactElement<IChildProps>[];
	activeIndex: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchTabs = ({
	children,
	activeIndex,
	setActiveIndex,
}: ITabProps) => {
	return (
		<div className="">
			<div className="sticky pt-[21px] top-0 flex flex-col gap-[5px] px-[30px] border-b pb-[10px] bg-white">
				<div className="mb-[18px]">
					<SearchInput />
				</div>
				<div>
					{React.Children.map(children, (child, index) => {
						const activeItemStyle =
							activeIndex === index ? "bg-primary" : "text-dark-6";
						return (
							<button
								className={`${activeItemStyle} rounded-[4px] px-[16px] py-[8px] text-bodySmall500`}
								onClick={() => setActiveIndex(index)}
							>
								{child.props.title}
							</button>
						);
					})}
				</div>
			</div>
			<div>
				{React.Children.map(
					children,
					(child, index) =>
						index === activeIndex && <div className="">{child}</div>,
				)}
			</div>
		</div>
	);
};

SearchTabs.Tab = SearchTab;
