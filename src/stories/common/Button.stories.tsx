import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "@/app/_components/common/Button";

import DecorationProvider from "../DecorationProvider";

const meta = {
	title: "Common/Button",
	component: Button,
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
		full: {
			control: {
				type: "boolean",
			},
			description: "버튼을 꽉 채울지 여부",
		},

		color: {
			control: {
				type: "select",
				options: ["primary", "secondary", "white"],
			},
			description: "버튼 색상",
		},

		size: {
			control: {
				type: "select",
				options: ["medium"],
			},
			description: "버튼 크기",
		},

		round: {
			control: {
				type: "boolean",
			},
			description: "버튼을 둥글게 만들지 여부",
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "button",
		onClick: fn(),
	},
};

export const Primary: Story = {
	args: {
		children: "primary",
		color: "primary",
		onClick: fn(),
	},
};
export const Secondary: Story = {
	args: {
		children: "secondary",
		color: "secondary",
		onClick: fn(),
	},
};
export const White: Story = {
	args: {
		children: "white",
		color: "white",
		onClick: fn(),
	},
};
