import type { Meta, StoryObj } from "@storybook/react";

import { SearchTab } from "@/app/_components/search/SearchTab";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchTab",
	component: SearchTab,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "700px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			description: "탭 내부의 아이템",
			control: {
				type: "object",
			},
			default: <div>탭 아이템</div>,
		},
		title: {
			description: "탭의 타이틀",
			control: {
				type: "text",
			},
			default: "탭",
		},
	},

	args: {},
} satisfies Meta<typeof SearchTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <div>탭 아이템</div>,
		title: "탭",
	},
};
