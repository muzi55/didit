import type { Meta, StoryObj } from "@storybook/react";

import { DailyCardTagList } from "@/app/_components/common/card/DailyCardTagList";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/DailyCardTagList",
	component: DailyCardTagList,
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
		// tagsType = "remove",
		// viewFirstTag = true,
		// listItem,

		tagsType: {
			description: "태그 타입",
			control: {
				type: "select",
				options: ["remove", "add"],
			},
			defaultValue: "remove",
		},
		viewFirstTag: {
			description: "첫번째 태그를 보여줄지 여부",
			control: {
				type: "boolean",
			},
			defaultValue: true,
		},
		listItem: {
			control: {
				type: "object",
			},
			description: "카드 태그의 리스트",
			defaultValue: [
				{ label: "태그1", onClick: () => {} },
				{ label: "태그2", onClick: () => {} },
			],
		},

		// listItem: {
		// 	control: {
		// 		type: "object",
		// 	},
		// 	description: "카드 태그의 리스트",
		// 	defaultValue: [
		// 		{ label: "태그1", onClick: () => {} },
		// 		{ label: "태그2", onClick: () => {} },
		// 	],
		// },
	},
} satisfies Meta<typeof DailyCardTagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		listItem: [
			{ label: "태그1", onClick: () => {} },
			{ label: "태그2", onClick: () => {} },
		],
	},
};

export const ViewFirstTag: Story = {
	args: {
		viewFirstTag: true,
		listItem: [
			{ label: "태그1", onClick: () => {} },
			{ label: "태그2", onClick: () => {} },
		],
	},
};

export const ViewFirstTagFalse: Story = {
	args: {
		viewFirstTag: false,
		listItem: [
			{ label: "태그1", onClick: () => {} },
			{ label: "태그2", onClick: () => {} },
		],
	},
};
