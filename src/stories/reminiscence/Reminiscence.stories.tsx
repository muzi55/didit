import type { Meta, StoryObj } from "@storybook/react";

import Reminiscence from "@/app/_components/reminiscence/Reminiscence";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Page/Reminiscence",
	component: Reminiscence,
	parameters: {
		layout: "Stretch",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "80dvh", height: "100dvh" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {},
} satisfies Meta<typeof Reminiscence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
