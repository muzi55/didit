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
		<div>
			<div className="">
				{React.Children.map(children, (child, index) => (
					<button className="" onClick={() => setActiveIndex(index)}>
						{child.props.title}
					</button>
				))}
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
