import type { Meta, StoryObj } from "@storybook/react";

import TitleHeading from "@/app/_components/common/title/TitleHeading";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Title/TitleHeading",
	component: TitleHeading,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "500px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "타입: TitleProps",
			defaultValue: "React.ReactElement<TitleProps>[]",
		},
	},
} satisfies Meta<typeof TitleHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "전체 스페이스",
	},
};
export const Example1: Story = {
	args: {
		children: "전체 스페이스",
	},
};
export const Example2: Story = {
	args: {
		children: "2012.01.01",
	},
};
export const Example3: Story = {
	args: {
		children: "캘린더",
	},
};
