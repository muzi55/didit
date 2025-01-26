import type { Meta, StoryObj } from "@storybook/react";

import SpaceDetailHead from "@/app/_components/space/SpaceDetailHead";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Space/SpaceDetailHead",
	component: SpaceDetailHead,
	parameters: {
		layout: "stretch",
	},
	tags: ["autodocs"],

	decorators: [
		Story => (
			<DecorationProvider style={{ width: "1600px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		date: {
			control: {
				type: "date",
			},
			defaultValue: new Date(),
			description: "기록기간",
		},
		startIt: {
			control: {
				type: "date",
			},
			defaultValue: new Date(),
			description: "시작 일자",
		},
	},
} satisfies Meta<typeof SpaceDetailHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		date: new Date("Mon Jan 01 2021 01:01:01 GMT+0900 (한국 표준시)"),
		startIt: new Date("Mon Jan 01 2021 01:01:01 GMT+0900 (한국 표준시)"),
	},
};

export const Example1: Story = {
	args: {
		date: new Date(),
		startIt: new Date(),
	},
};
