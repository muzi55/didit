import type { Meta, StoryObj } from "@storybook/react";

import {
	cardSectionList,
	newSpaceList,
} from "@/app/_components/space/SpaceConstant";
import { SpaceWeekCardBody } from "@/app/_components/space/spaceWeek/SpaceWeekCardBody";

const meta = {
	title: "Space/SpaceWeekCardBody",
	component: SpaceWeekCardBody,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		cardList: {
			control: {
				type: "object",
			},
			defaultValue: cardSectionList,
			description: "카드 리스트",
		},
	},
} satisfies Meta<typeof SpaceWeekCardBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		cardList: cardSectionList,
	},
};

export const Empty: Story = {
	args: {
		cardList: newSpaceList(0),
	},
};
