"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function HeaderLogo() {
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
				<Image
					src={`/static/images/${logoImage}`}
					alt="Didit logo"
					width={47}
					height={36}
				/>
			</Link>
		</h1>
	);
}

export default HeaderLogo;
