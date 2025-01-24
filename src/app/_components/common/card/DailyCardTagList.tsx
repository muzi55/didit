import { icons } from "@/shared/libs/common/icons";

import Tag from "../tag/Tag";
import type { CardTagListProps } from "./cardType";

export const DailyCardTagList = ({
	tagsType = "remove",
	viewFirstTag = true,
	listItem,
}: CardTagListProps) => {
	return (
		<ul className="flex items-center gap-x-[11px] dailyCard-padding pb-[24px]">
			<li>{icons.label}</li>
			{viewFirstTag && (
				<li>
					<Tag onClick={() => {}}>태그추가 +</Tag>
				</li>
			)}

			{listItem.map(el => (
				<Tag key={el.label} onClick={el.onClick} type={tagsType} icon={false}>
					{el.label}
				</Tag>
			))}
		</ul>
	);
};
