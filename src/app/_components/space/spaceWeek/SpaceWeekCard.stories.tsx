import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { cardSectionList, newSpaceList } from "../SpaceConstant";
import SpaceWeekCard from "./SpaceWeekCard";

const meta = {
	title: "Space/SpaceWeekCard",
	component: SpaceWeekCard,
	parameters: {
		layout: "stretch",
	},
	tags: ["autodocs"],
	argTypes: {
		// weekIndex: {
		// 	control: {
		// 		type: "number",
		// 	},
		// 	defaultValue: 1,
		// 	description: "주차 인덱스",
		// },
		// weekDate: {
		// 	control: {
		// 		type: "object",
		// 	},
		// 	defaultValue: {
		// 		startAt: new Date(),
		// 		endAt: new Date(),
		// 	},
		// 	description: "주차 시작 및 종료 날짜",
		// },
		// cardList: {
		// 	control: {
		// 		type: "object",
		// 	},
		// 	defaultValue: cardSectionList,
		// 	description: "카드 리스트",
		// },
		children: {
			control: {
				type: "object",
			},
			description: "자식 컴포넌트",
			default: (
				<>
					<SpaceWeekCard.Header
						weekIndex={1}
						weekDate={{
							startAt: new Date(),
							endAt: new Date(),
						}}
					/>
					<SpaceWeekCard.Body cardList={cardSectionList} />
				</>
			),
		},
	},
} satisfies Meta<typeof SpaceWeekCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		// weekIndex: 1,
		// weekDate: {
		// 	startAt: new Date(),
		// 	endAt: new Date(),
		// },
		// cardList: cardSectionList,
		children: (
			<>
				<SpaceWeekCard.Header
					weekIndex={1}
					weekDate={{
						startAt: new Date(),
						endAt: new Date(),
					}}
				/>
				<SpaceWeekCard.Body cardList={newSpaceList(4)} />
			</>
		),
	},
};

export const lengthZero: Story = {
	args: {
		children: (
			<>
				<SpaceWeekCard.Header
					weekIndex={1}
					weekDate={{
						startAt: new Date(),
						endAt: new Date(),
					}}
				/>
				<SpaceWeekCard.Body cardList={newSpaceList(0)} />
			</>
		),
	},
};
