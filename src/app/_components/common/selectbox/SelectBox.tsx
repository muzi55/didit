import { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

interface SelectBoxProps {
	title: string;
	children: React.ReactNode;
}

export default function SelectBox({ title, children }: SelectBoxProps) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="relative text-textColor-secondary text-bodySmall400 w-[210px]">
			<button
				onClick={() => setOpen(!open)}
				className="w-inherit px-[20px] py-[12px] flex justify-between border border-stroke rounded-md"
			>
				<p>{title}</p>
				<span className="rotate-180">{icons.angleUp}</span>
			</button>

			{open && children}
		</div>
	);
}
