import React from "react";

import { icons } from "@/shared/libs/common/icons";

import { DailyCardTagList } from "../common/card/DailyCardTagList";
import DetailTitleHeading from "../common/title/DetailTitleHeading";
import TitleParent from "../common/title/TitleParent";
import TItleTriggerListItem from "../common/title/TItleTriggerListItem";

export default function Reminiscence() {
	return (
		<div className="w-full m-auto pt-[48px]">
			<TitleParent>
				<DetailTitleHeading
					trigger={
						<>
							<TItleTriggerListItem onClick={() => {}} icon={icons.pencil()}>
								수정하기
							</TItleTriggerListItem>
							<TItleTriggerListItem
								color="danger"
								onClick={() => {}}
								icon={icons.trash()}
							>
								삭제하기
							</TItleTriggerListItem>
						</>
					}
				>
					Didit Detail
				</DetailTitleHeading>
			</TitleParent>

			<div className="mt-[43px] shadow-shadow3 bg-white rounded-[16px]">
				<div className="pt-[19px] px-[31px] pb-[80px]">에디터 부분</div>

				<DailyCardTagList
					viewFirstTag={true}
					listItem={[
						{ label: "태그1", onClick: () => {} },
						{ label: "태그2", onClick: () => {} },
					]}
				/>
			</div>
		</div>
	);
}
