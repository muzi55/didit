import Link from "next/link";
import React from "react";

import { icons } from "@/shared/libs/common/icons";

import Tag from "../tag/Tag";
import type { CardTagListProps } from "./cardType";

interface DailyCardProps {
	children: React.ReactNode;
}

export default function DailyCard({ children }: DailyCardProps) {
	return <div>{children}</div>;
}

const Header = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href?: string;
}) => {
	return (
		<div className="flex justify-between bg-secondary text-bodyMedium700 text-white pt-[15px] pb-[11px] pl-[20px] pr-[15px]">
			<h3>{children}</h3>
			{href && <Link href={href}>{icons.angleRight}</Link>}
		</div>
	);
};

const Body = ({ children }: { children: string }) => {
	return <div dangerouslySetInnerHTML={{ __html: children }}></div>;
};

const TagList = ({ listItem }: CardTagListProps) => {
	return (
		<ul className="flex items-center gap-x-[11px]">
			<li>{icons.label}</li>
			<li>
				<Tag onClick={() => {}}>태그추가 +</Tag>
			</li>

			{listItem.map(el => (
				<Tag key={el.label} onClick={el.onClick} type={"remove"} icon={true}>
					{el.label}
				</Tag>
			))}
		</ul>
	);
};

DailyCard.Header = Header;
DailyCard.Body = Body;
DailyCard.TagList = TagList;
