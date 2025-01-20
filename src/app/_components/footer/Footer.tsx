import React from "react";

import { footerList } from "./constant";
import style from "./Footer.module.css";
import { openPopup } from "./popupUtile";

export default function Footer() {
	const handleClickPopup = () => {
		openPopup("text");
	};

	return (
		<footer
			className={`flex flex-col gap-[24px] ${style.footer} text-textColor-secondary`}
		>
			<ul className="flex gap-3 text-bodyExtraSmall500">
				{footerList.map(item => (
					<li key={item.title}>
						<button
							onClick={handleClickPopup}
							className="text-bodyExtraSmall500"
						>
							{item.title}
						</button>
					</li>
				))}
			</ul>
			<p className="text-bodyExtraSmall400">
				{"COPYRIGHT (C) 2024 ALL RIGHTS RESERVED"}
			</p>
		</footer>
	);
}
