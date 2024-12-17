"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

interface HeaderLogoProps {
	isActive: boolean;
}

export default function HeaderLogo({ isActive }: HeaderLogoProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const { isSidebarOpen } = useHeaderSlide();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const logoImage = theme === "dark" ? "logo_check_2.svg" : "logo_check_1.svg";
	const logoMargin = isSidebarOpen
		? "ml-[28px] pt-[33px] mb-[121px]"
		: "pt-[30px] justify-center mb-[133px]";

	return (
		<h1 className={`flex ${logoMargin}`}>
			<Link href="/">
				{isActive ? <ActiveLogo /> : <InactiveLogo logoImage={logoImage} />}
			</Link>
		</h1>
	);
}

const ActiveLogo = () => {
	const pointStyle = "text-primary";
	return (
		<span className="text-[2.25rem] font-bold text-white">
			<span className={pointStyle}>/</span>
			did
			<span className={pointStyle}>it/</span>
		</span>
	);
};

const InactiveLogo = ({ logoImage }: { logoImage: string }) => (
	<Image
		src={`/static/images/${logoImage}`}
		alt="Didit logo"
		width={47}
		height={36}
	/>
);
