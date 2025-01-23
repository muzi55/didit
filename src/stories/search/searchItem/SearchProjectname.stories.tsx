import type { Meta, StoryObj } from "@storybook/react";

import SearchProjectName from "@/app/_components/search/searchitem/SearchProjectName";
import DecorationProvider from "@/stories/DecorationProvider";

const meta: Meta<typeof SearchProjectName> = {
	title: "Common/Search/SearchItem/SearchProjectName",
	component: SearchProjectName,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "700px" }}>
				<Story />
			</DecorationProvider>
		),
	],

	argTypes: {
		search: {
			description: "검색어 전체",
			control: {
				type: "text",
			},
			default: "검색어",
		},
		hightLight: {
			description: "하이라이트 될 검색어",
			control: {
				type: "text",
			},
			default: "검색어",
		},
	},
} satisfies Meta<typeof SearchProjectName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		search: "UX 프로젝트",
		hightLight: "UX",
	},
};
