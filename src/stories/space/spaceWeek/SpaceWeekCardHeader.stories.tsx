import type { Meta, StoryObj } from "@storybook/react";

import { SpaceWeekCardHeading } from "@/app/_components/space/spaceWeek/SpaceWeekCardHeading";

const meta = {
	title: "Space/SpaceWeekCardHeader",
	component: SpaceWeekCardHeading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		weekIndex: {
			control: {
				type: "number",
			},
			defaultValue: 1,
			description: "주차 인덱스",
		},
		weekDate: {
			control: {
				type: "object",
			},
			defaultValue: {
				startAt: new Date(),
				endAt: new Date(),
			},
			description: "주차 시작 및 종료 날짜",
		},
	},
} satisfies Meta<typeof SpaceWeekCardHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		weekIndex: 1,
		weekDate: {
			startAt: new Date(),
			endAt: new Date(),
		},
	},
};
