import React from "react";

import { AlarmTab } from "./AlarmTab";
interface IChildProps {
	title: string;
}
interface ITabProps {
	children: React.ReactElement<IChildProps>[];
	activeIndex: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AlarmTabs = ({
	children,
	activeIndex,
	setActiveIndex,
}: ITabProps) => {
	return (
		<div className="">
			<div className="sticky top-[91px] z-10 flex py-[5px] px-[7px] gap-[5px] bg-gray-1">
				{React.Children.map(children, (child, index) => {
					const activeBackground = activeIndex === index ? "bg-white" : "";
					return (
						<button
							className={`w-full ${activeBackground} rounded-[4px] px-[18px] pt-[9px] pb-[7px] text-bodySmall500`}
							onClick={() => setActiveIndex(index)}
						>
							{child.props.title}
						</button>
					);
				})}
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

AlarmTabs.Tab = AlarmTab;
