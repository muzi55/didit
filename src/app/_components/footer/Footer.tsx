import Link from "next/link";
import React from "react";

import { footerList } from "./constant";
import style from "./Footer.module.css";

export default function Footer() {
	return (
		<footer
			className={`flex flex-col gap-[24px] ${style.footer} text-textColor-secondary`}
		>
			<ul className="flex gap-3 text-extraSmall500">
				{footerList.map(item => (
					<Link
						key={item.title}
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.title}
					</Link>
				))}
			</ul>
			<p className="text-bodyExtraSmall400">
				{"COPYRIGHT (C) 2024 ALL RIGHTS RESERVED"}
			</p>
		</footer>
	);
}
