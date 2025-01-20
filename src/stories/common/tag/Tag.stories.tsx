import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Tag from "@/app/_components/common/tag/Tag";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Tag/Tag",
	component: Tag,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],

	decorators: [
		Story => (
			<DecorationProvider
				className="flex justify-center"
				style={{ width: "500px" }}
			>
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
			defaultValue: "button",
		},
		type: {
			control: {
				type: "select",
				options: ["add", "remove", "hightLight"],
			},
			description: "버튼 색상",
			defaultValue: "add",
		},
		icon: {
			control: {
				type: "boolean",
			},
			description: "아이콘",
			defaultValue: false,
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "button",
		onClick: fn(),
	},
};

export const WithIcon: Story = {
	args: {
		children: "button",
		onClick: fn(),
		icon: true,
	},
};

export const Remove: Story = {
	args: {
		children: "button",
		onClick: fn(),
		icon: true,
		type: "remove",
	},
};

export const HightLight: Story = {
	args: {
		children: "button",
		onClick: fn(),
		icon: false,
		type: "hightLight",
	},
};
