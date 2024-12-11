"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

interface HeaderLogoProps {
	isActive: boolean;
}

function HeaderLogo({ isActive }: HeaderLogoProps) {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const logoImage = theme === "dark" ? "logo_check_1.svg" : "logo_check_2.svg";
	return (
		<h1 className="inline-block">
			<Link href="/">
				{isActive ? (
					<span className="text-[2.25rem] font-bold text-secondary-dark dark:text-white">
						<span className="text-secondary-dark dark:text-primary">/</span>
						did
						<span className="text-secondary-dark dark:text-primary">it/</span>
					</span>
				) : (
					<Image
						src={`/static/images/${logoImage}`}
						alt="Didit logo"
						width={47}
						height={36}
					/>
				)}
			</Link>
		</h1>
	);
}

export default HeaderLogo;
