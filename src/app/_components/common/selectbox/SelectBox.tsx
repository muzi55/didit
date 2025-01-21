import { crossMedium, icons } from "@/shared/libs/common/icons";

interface SelectBoxProps {
	title: string;
	children: React.ReactNode;
	open: boolean;
	setOpen: () => void;
	size?: "small" | "medium";
}

export default function SelectBox({
	title,
	children,
	open,
	setOpen,
	size = "medium",
}: SelectBoxProps) {
	const sizeClasses = {
		small: "w-[67px] px-[10px] py-[12px]",
		medium: "w-[210px] px-[20px] py-[12px]",
	};

	const iconSize =
		size === "medium" ? icons.angleUp(crossMedium) : icons.angleUp();

	return (
		<div className="relative text-textColor-secondary text-bodySmall400">
			<button
				onClick={setOpen}
				className={`flex justify-between items-center border border-stroke rounded-md ${sizeClasses[size]}`}
			>
				<p>{title}</p>
				<span className="rotate-180">{iconSize}</span>
			</button>

			{open && (
				<div className="flex absolute left-0 bottom-[-5px] translate-y-full bg-white z-10 py-[10px] rounded-md shadow-shadow1">
					{children}
				</div>
			)}
		</div>
	);
}
