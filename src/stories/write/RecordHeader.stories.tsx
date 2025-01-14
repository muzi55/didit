import type { Meta, StoryObj } from "@storybook/react";

import RecordHeader from "@/app/_components/common/write/RecordHeader";

import DecorationProvider from "../DecorationProvider";

const meta = {
	title: "Common/RecordHeader",
	component: RecordHeader,
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
			description: "버튼 텍스트",
			defaultValue: "recordHeader",
		},
	},
} satisfies Meta<typeof RecordHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<RecordHeader.Left>Left Section</RecordHeader.Left>
				<RecordHeader.Right>Right Section</RecordHeader.Right>
			</>
		),
	},
};

export const HiddenRight: Story = {
	args: {
		children: (
			<>
				<RecordHeader.Left>Left Section</RecordHeader.Left>
			</>
		),
	},
};
