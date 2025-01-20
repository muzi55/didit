import React from "react";

import type { FooterMenuItem } from "./constant";
import { COPYRIGHT, footerMenu } from "./constant";
import style from "./Footer.module.css";
import { openPopup } from "./popupUtile";

export default function Footer() {
	const handleClickPopup = (item: FooterMenuItem) => {
		openPopup({
			title: item.title,
			content: item.html,
		});
	};

	return (
		<footer
			className={`flex flex-col gap-[24px] ${style.footer} text-textColor-secondary`}
		>
			<ul className="flex gap-3 text-bodyExtraSmall500">
				{footerMenu.map(item => (
					<li key={item.title}>
						<button
							onClick={() => handleClickPopup(item)}
							className="text-bodyExtraSmall500"
						>
							{item.title}
						</button>
					</li>
				))}
			</ul>
			<p className="text-bodyExtraSmall400">{COPYRIGHT}</p>
		</footer>
	);
}
