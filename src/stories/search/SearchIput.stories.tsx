import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "@/app/_components/search/SearchInput";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Search/SearchInput",
	component: SearchInput,
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
	argTypes: {},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
