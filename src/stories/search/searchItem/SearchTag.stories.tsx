import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/app/_components/common/tag/Tag";
import { 시간변수 } from "@/app/_components/search/constant";
import TagSearch from "@/app/_components/search/TagSearch";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchItem/TagSearch",
	component: TagSearch,
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
		dateTime: {
			control: {
				type: "text",
			},
			description: "검색 아이템 날짜",
			default: 시간변수,
		},
		project: {
			control: {
				type: "text",
			},
			description: "검색 아이템 프로젝트",
			default: "project",
		},
		search: {
			control: {
				type: "text",
			},
			description: "검색어 전체",
			default: "UX 플젝",
		},
		category: {
			control: {
				type: "text",
			},
			description: "검색 아이템 카테고리",
			default: "category",
		},
		content: {
			control: {
				type: "text",
			},
			description: "검색 아이템 내용",
			default: "content",
		},
		hightLight: {
			control: {
				type: "text",
			},
			description: "하이라이트",
			default: "UX",
		},
		TagList: {
			control: {
				type: "object",
			},
			description: "태그 리스트",
			default: (
				<div className="flex gap-[8px]">
					<Tag onClick={() => {}} type="hightLight" icon={false}>
						#UX
					</Tag>
					<Tag onClick={() => {}} type="remove" icon={false}>
						#UI
					</Tag>
				</div>
			),
		},
	},
} satisfies Meta<typeof TagSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dateTime: 시간변수,
		project: "project",
		search: "UX 플젝",
		hightLight: "UX",
		category: "category",
		content: "content",
		TagList: (
			<div className="flex gap-[8px]">
				<Tag onClick={() => {}} type="hightLight" icon={false}>
					#UX
				</Tag>
				<Tag onClick={() => {}} type="remove" icon={false}>
					#UI
				</Tag>
			</div>
		),
	},
};
