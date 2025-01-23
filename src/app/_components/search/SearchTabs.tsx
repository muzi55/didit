import React from "react";

import { SearchTab } from "./SearchTab";

interface IChildProps {
	title: string;
}
interface ITabProps {
	children: React.ReactElement<IChildProps>[];
	activeIndex: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
	searchHeader?: React.ReactNode;
	type?: "default" | "result";
}

export const SearchTabs = ({
	children,
	activeIndex,
	setActiveIndex,
	searchHeader,
	type = "default",
}: ITabProps) => {
	const activeButtonBgClasses = {
		default: "bg-primary",
		result: "bg-primary-50",
	};
	const buttonPadding = type === "default" ? "px-[16px]" : "px-[32px]";
	const borderStyle = type === "default" ? "border-b" : "";
	return (
		<div className="">
			<div
				className={`sticky pt-[21px] top-0 flex flex-col gap-[5px] px-[30px] ${borderStyle} pb-[10px] bg-white`}
			>
				<div className="mb-[18px]">{searchHeader}</div>
				<div>
					{React.Children.map(children, (child, index) => {
						const activeItemStyle =
							activeIndex === index
								? activeButtonBgClasses[type]
								: "text-dark-6";
						return (
							<button
								className={`${activeItemStyle} rounded-[4px] ${buttonPadding} py-[8px] text-bodySmall500`}
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
