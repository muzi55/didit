import type { Meta, StoryObj } from "@storybook/react";

import SearchSpaceItem from "@/app/_components/search/searchitem/SearchSpaceItem";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchItem/SearchSpaceItem",
	component: SearchSpaceItem,
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
		search: {
			control: {
				type: "text",
			},
			description: "검색어 전체",
			default: "UX 플젝",
		},
		hightLight: {
			control: {
				type: "text",
			},
			description: "검색어 하이라이트",
			default: "UX",
		},
		projectDate: {
			control: {
				type: "object",
			},
			description: "프로젝트 날짜",
			default: {
				startDate: "2021-10-01",
				endDate: "2021-10-31",
			},
		},
	},
} satisfies Meta<typeof SearchSpaceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		search: "UX 플젝",
		hightLight: "UX",
		projectDate: {
			startDate: "2021-10-01",
			endDate: "2021-10-31",
		},
	},
};

export const NotEndDate: Story = {
	args: {
		search: "UX 플젝",
		hightLight: "UX",
		projectDate: {
			startDate: "2021-10-01",
		},
	},
};
