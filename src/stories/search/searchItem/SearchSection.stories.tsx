import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/app/_components/common/tag/Tag";
import SearchEmpty from "@/app/_components/search/SearchEmpty";
import SearchItem from "@/app/_components/search/searchitem/SearchItem";
import SearchSpaceItem from "@/app/_components/search/searchitem/SearchSpaceItem";
import SearchSection from "@/app/_components/search/SearchSection";
import TagSearch from "@/app/_components/search/TagSearch";
import DecorationProvider from "@/stories/DecorationProvider";

const meta: Meta<typeof SearchEmpty> = {
	title: "Common/Search/SearchItem/SearchSection",
	component: SearchSection,
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
		// children: React.ReactNode;
		//     title: SearchCategory;

		children: {
			description: "검색 결과",
			control: {
				type: "object",
			},
			default: <SearchEmpty />,
		},
		title: {
			description: "검색 결과 타이틀",
			control: {
				type: "text",
			},
			default: "검색 결과",
		},
	},
} satisfies Meta<typeof SearchSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <SearchEmpty />,
		title: "검색 결과",
	},
};

export const MemoirSection: Story = {
	args: {
		children: [
			<SearchItem
				key={1}
				dateTime="2021-09-22"
				project="project"
				search="UX 플젝"
				hightLight="UX"
				category="category"
				content="content"
			/>,
			<SearchItem
				key={2}
				dateTime="2021-09-22"
				project="project"
				search="UX 플젝"
				hightLight="UX"
				category="category"
				content="content"
			/>,
			<SearchItem
				key={3}
				dateTime="2021-09-22"
				project="project"
				search="UX 플젝"
				hightLight="UX"
				category="category"
				content="content"
			/>,
		],
		title: "회고록",
	},
};

export const TagSection: Story = {
	args: {
		children: [
			<TagSearch
				key={1}
				search="UX"
				hightLight="UX"
				dateTime="2021-09-22"
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
			/>,
			<TagSearch
				key={2}
				search="UX"
				hightLight="UX"
				dateTime="2021-09-22"
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
			/>,
			<TagSearch
				key={3}
				search="UX"
				hightLight="UX"
				dateTime="2021-09-22"
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
			/>,
		],
		title: "태그",
	},
};
export const SpaceSection: Story = {
	args: {
		children: [
			<SearchSpaceItem
				key="1"
				search="UX 플젝"
				hightLight="UX"
				projectDate={{ startDate: new Date() }}
			/>,
			<SearchSpaceItem
				key="2"
				search="UX 플젝"
				hightLight="UX"
				projectDate={{ startDate: new Date() }}
			/>,
			<SearchSpaceItem
				key="3"
				search="UX 플젝"
				hightLight="UX"
				projectDate={{ startDate: new Date(), endDate: new Date() }}
			/>,
		],
		title: "스페이스",
	},
};
