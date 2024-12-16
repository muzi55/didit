import Link from "next/link";
import React from "react";

interface NavSubItemProps {
	children: React.ReactNode;
	href: string;
}
function NavSubItem({ children, href }: NavSubItemProps) {
	return (
		<Link href={href}>
			<h3 className="ml-[60px] text-bodySmall400 text-secondary">{children}</h3>
		</Link>
	);
}

export default NavSubItem;
