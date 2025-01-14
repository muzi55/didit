import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SelectBoxItem from "@/app/_components/common/selectbox/SelectBoxItem";
import SelectBoxList from "@/app/_components/common/selectbox/SelectBoxList";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/SelectBox/SelectBoxItem",
	component: SelectBoxItem,
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
				<SelectBoxList>
					<Story />
				</SelectBoxList>
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "셀렉트 아이템의 문구",
			defaultValue: "아이템",
		},
	},
	args: {
		onClick: fn(),
		onMouseEnter: fn(),
		onMouseLeave: fn(),
	},
} satisfies Meta<typeof SelectBoxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "아이템",
		onClick: fn(),
		onMouseEnter: fn(),
		onMouseLeave: fn(),
	},
};
