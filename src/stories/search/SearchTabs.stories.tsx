import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { SearchTabs } from "@/app/_components/search/SearchTabs";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchTabs",
	component: SearchTabs,
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
			description: "React.ReactElement<IChildProps>[]",
			control: {
				type: "object",
			},
			default: [
				<SearchTabs.Tab key="0" title="전체">
					전체
				</SearchTabs.Tab>,
				<SearchTabs.Tab key="1" title="회고록">
					회고록
				</SearchTabs.Tab>,
				<SearchTabs.Tab key="2" title="태그">
					태그
				</SearchTabs.Tab>,
				<SearchTabs.Tab key="3" title="스페이스">
					스페이스
				</SearchTabs.Tab>,
			],
		},
		activeIndex: {
			description: "액티브 되어있는 버튼의 인덱스",
			control: {
				type: "number",
			},
			default: 0,
		},
		setActiveIndex: {
			description:
				"액티브 버튼의 인덱스를 변경하는 함수 / React.Dispatch<React.SetStateAction<number>>",
		},
	},

	args: {
		setActiveIndex: fn(),
	},
} satisfies Meta<typeof SearchTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: [
			<SearchTabs.Tab key="0" title="전체">
				전체
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="1" title="회고록">
				회고록
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="2" title="태그">
				태그
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="3" title="스페이스">
				스페이스
			</SearchTabs.Tab>,
		],
		activeIndex: 0,
		setActiveIndex: fn(),
	},
};

export const ActiveSecondTab: Story = {
	args: {
		children: [
			<SearchTabs.Tab key="0" title="전체">
				전체
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="1" title="회고록">
				회고록
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="2" title="태그">
				태그
			</SearchTabs.Tab>,
			<SearchTabs.Tab key="3" title="스페이스">
				스페이스
			</SearchTabs.Tab>,
		],
		activeIndex: 1,
		setActiveIndex: fn(),
	},
};
