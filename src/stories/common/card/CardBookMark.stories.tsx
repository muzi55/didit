import type { Meta, StoryObj } from "@storybook/react";

import CardBookMark from "@/app/_components/common/card/CardBookMark";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/CardBookMark",
	component: CardBookMark,
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
			description: "북마크 텍스트",
			defaultValue: "디딧",
		},
	},
} satisfies Meta<typeof CardBookMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "디딧",
	},
};
