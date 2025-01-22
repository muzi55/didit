import type { Meta, StoryObj } from "@storybook/react";

import SearchEmpty from "@/app/_components/search/SearchEmpty";
import DecorationProvider from "@/stories/DecorationProvider";

const meta: Meta<typeof SearchEmpty> = {
	title: "Common/Search/SearchEmpty",
	component: SearchEmpty,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "700px" }}>
				<Story />
			</DecorationProvider>
		),
	],
} satisfies Meta<typeof SearchEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
