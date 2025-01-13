"use client";
import React, { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

interface SelectBoxProps {
	title: string;
	children: React.ReactNode;
}
export default function SelectBox({ title, children }: SelectBoxProps) {
	const [open, setOpen] = useState<boolean>(false);

	// useEffect(() => {
	// 	return () => setOpen(false);
	// }, []);

	return (
		<div className="text-textColor-secondary text-bodySmall400">
			<button
				onClick={() => setOpen(!open)}
				className="w-[210px] px-[20px] py-[12px] flex justify-between border border-stroke rounded-md"
			>
				<p>{title}</p>
				<span className="rotate-180">{icons.angleUp}</span>
			</button>

			{open && children}
		</div>
	);
}
