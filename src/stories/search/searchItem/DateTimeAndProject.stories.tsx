import type { Meta, StoryObj } from "@storybook/react";

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
		// dateTime,
		// project,

		dateTime: {
			description: "날짜",
			control: {
				type: "text",
			},
			default: new Date(),
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
		dateTime: new Date(),
		project: "UX 프로젝트",
	},
};
