import type { Meta, StoryObj } from "@storybook/react";

import { CreateNewSpace } from "@/app/_components/space/CreateNewSpace";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Space/CreateNewSpace",
	component: CreateNewSpace,
	parameters: {
		layout: "stretch",
	},
	tags: ["autodocs"],

	decorators: [
		Story => (
			<DecorationProvider style={{ width: "1600px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {},
} satisfies Meta<typeof CreateNewSpace>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
