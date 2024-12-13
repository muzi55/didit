import Link from "next/link";
import React from "react";

interface NavItemProps {
	children: React.ReactNode;
	href: string;
}
export default function NavItem({ children, href }: NavItemProps) {
	return <Link href={href}>{children}</Link>;
}
