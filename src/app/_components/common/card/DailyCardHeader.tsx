import Link from "next/link";

import { icons } from "@/shared/libs/common/icons";

export const DailyCardHeader = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href?: string;
}) => {
	return (
		<div className="flex justify-between bg-secondary text-bodyMedium700 text-white pt-[15px] pb-[11px] dailyCard-padding">
			<h3>{children}</h3>
			{href && <Link href={href}>{icons.angleRight}</Link>}
		</div>
	);
};
