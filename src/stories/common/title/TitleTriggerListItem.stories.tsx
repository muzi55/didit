import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TItleTriggerListItem from "@/app/_components/common/title/TItleTriggerListItem";
import { icons } from "@/shared/libs/common/icons";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Title/TitleTriggerItem",
	component: TItleTriggerListItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "500px" }}>
				<ul>
					<Story />
				</ul>
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "text",
			},
			description: "아이템 텍스트",
			defaultValue: "수정하기",
		},
		icon: {
			control: {
				type: "object",
			},
			description: "아이콘",
			defaultValue: icons.bell,
		},
		color: {
			control: {
				type: "select",
				options: ["textSecondary", "danger", "textPrimary"],
				labels: {
					textSecondary: "textSecondary",
					danger: "danger",
					textPrimary: "textPrimary",
				},
			},
			description: "아이템 색상",
			defaultValue: "textSecondary",
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof TItleTriggerListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "수정하기",
		icon: icons.pencil(),
		color: "textSecondary",
		onClick: fn(),
	},
};
export const Delete: Story = {
	args: {
		children: "삭제하기",
		icon: icons.trash(),
		color: "danger",
		onClick: fn(),
	},
};
