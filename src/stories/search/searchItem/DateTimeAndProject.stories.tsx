import type { Meta, StoryObj } from "@storybook/react";

import { 시간변수 } from "@/app/_components/search/constant";
import { DateTimeAndProject } from "@/app/_components/search/DateTimeAndProject";
import DecorationProvider from "@/stories/DecorationProvider";

const meta: Meta<typeof DateTimeAndProject> = {
	title: "Common/Search/SearchItem/DateTimeAndProject",
	component: DateTimeAndProject,
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
		dateTime: {
			description: "날짜",
			control: {
				type: "text",
			},
			default: 시간변수,
		},
		project: {
			description: "프로젝트",
			control: {
				type: "text",
			},
			default: "UX 프로젝트",
		},
	},
} satisfies Meta<typeof DateTimeAndProject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dateTime: 시간변수,
		project: "UX 프로젝트",
	},
};
