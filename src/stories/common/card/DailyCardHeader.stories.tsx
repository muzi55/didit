import type { Meta, StoryObj } from "@storybook/react";

import { DailyCardHeader } from "@/app/_components/common/card/DailyCardHeader";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/DailyCardHeader",
	component: DailyCardHeader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],

	decorators: [
		Story => (
			<DecorationProvider style={{ width: "400px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "카드 제목",
			defaultValue: "1997년 5월 17일",
		},
		href: {
			control: {
				type: "text",
			},
			description: "이동할 링크",
			defaultValue: "/daily/1997-05-17",
		},
	},
} satisfies Meta<typeof DailyCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "1997년 5월 17일",
		href: "/daily/1997-05-17",
	},
};
export const NoLink: Story = {
	args: {
		children: "1997년 5월 17일",
	},
};
