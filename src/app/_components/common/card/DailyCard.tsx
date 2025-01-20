import Link from "next/link";
import React from "react";

import { icons } from "@/shared/libs/common/icons";

interface DailyCardProps {
	children: React.ReactNode;
}

export default function DailyCard({ children }: DailyCardProps) {
	return (
		<div>
			{children}
			<div>
				{/* body */}
				asd
			</div>
			<div>
				{/* tag */}
				zxc
			</div>
		</div>
	);
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

DailyCard.Header = Header;
