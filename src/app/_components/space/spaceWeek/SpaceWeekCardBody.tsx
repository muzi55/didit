import DailyCard from "../../common/card/DailyCard";
import type { SpaceCardList } from "../spaceType";
import { TagSliceFn } from "../spaceUtils";

export const SpaceWeekCardBody = ({
	cardList,
}: {
	cardList: SpaceCardList[];
}) => {
	return (
		<div className="mt-[31px]">
			<ul className="flex flex-wrap gap-x-[24px] gap-y-[31px]">
				{cardList.length === 0 && (
					<li className="w-full flex justify-center items-center rounded-[16px] h-[242px] text-bodyLarge600 text-textColor-secondary bg-gray-2">
						해당 주에 등록된 회고록이 없습니다.
					</li>
				)}
				{cardList.map(el => (
					<li className="w-[306px] h-[242px]" key={el.title}>
						<DailyCard>
							<DailyCard.Header>{el.title}</DailyCard.Header>
							<DailyCard.Body>{el.content}</DailyCard.Body>
							<DailyCard.TagList
								viewFirstTag={false}
								listItem={TagSliceFn(el.tagList)}
							/>
						</DailyCard>
					</li>
				))}
			</ul>
			{cardList.length > 8 && (
				<button className="px-[28px] py-[13px] mt-[30px] rounded-[6px] w-full bg-gray-2 text-tertiary text-bodyMedium600">
					더보기
				</button>
			)}
		</div>
	);
};
