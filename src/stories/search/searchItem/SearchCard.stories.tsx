import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/app/_components/common/tag/Tag";
import { 시간변수 } from "@/app/_components/search/constant";
import SearchCard from "@/app/_components/search/result/SearchCard";
import SearchItem from "@/app/_components/search/searchitem/SearchItem";
import SearchSpaceItem from "@/app/_components/search/searchitem/SearchSpaceItem";
import TagSearch from "@/app/_components/search/TagSearch";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchItem/SearchCard",
	component: SearchCard,
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
				type: "object",
			},
			description: "검색 아이템 카드",
			default: (
				<SearchItem
					dateTime={시간변수}
					project="project"
					search="UX 플젝"
					hightLight="UX"
					category="category"
					content="content"
				/>
			),
		},
	},
} satisfies Meta<typeof SearchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<SearchItem
				dateTime={시간변수}
				project="project"
				search="UX 플젝"
				hightLight="UX"
				category="category"
				content="content"
			/>
		),
	},
};
export const TagSearchItem: Story = {
	args: {
		children: (
			<TagSearch
				search="UX"
				hightLight="UX"
				dateTime={시간변수}
				project="project"
				category="category"
				content="content"
				TagList={
					<div className="flex gap-[8px]">
						<Tag onClick={() => {}} type="hightLight" icon={false}>
							#UX
						</Tag>
						<Tag onClick={() => {}} type="remove" icon={false}>
							#UI
						</Tag>
					</div>
				}
			/>
		),
	},
};
export const SpaceSearchItem: Story = {
	args: {
		children: (
			<SearchSpaceItem
				search="UX 플젝"
				hightLight="UX"
				projectDate={{ startDate: 시간변수, endDate: 시간변수 }}
			/>
		),
	},
};
