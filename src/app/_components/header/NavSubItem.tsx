import Link from "next/link";
import React from "react";

interface NavSubItemProps {
	children: React.ReactNode;
	href: string;
}
function NavSubItem({ children, href }: NavSubItemProps) {
	return (
		<li className="mb-[18px] last:mb-0">
			<Link className="" href={href}>
				<h3 className="flex items-center text-bodySmall400 text-secondary">
					{children}
				</h3>
			</Link>
		</li>
	);
}

export default NavSubItem;
