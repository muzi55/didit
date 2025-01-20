import type { Meta, StoryObj } from "@storybook/react";

import { DailyCardBody } from "@/app/_components/common/card/DailyCardBody";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/DailyCardBody",
	component: DailyCardBody,
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
			description: "카드 내용",
			defaultValue:
				"<h3>바디 제목</h3> <ul><li>리스트 아이템1</li><li>리스트 아이템2</li><li>리스트 아이템3</li></ul>",
		},
	},
} satisfies Meta<typeof DailyCardBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children:
			"<h3>바디 제목</h3> <ul><li>리스트 아이템1</li><li>리스트 아이템2</li><li>리스트 아이템3</li></ul>",
	},
};
