import type { Meta, StoryObj } from "@storybook/react";

import Footer from "@/app/_components/footer/Footer";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Footer/Footer",
	component: Footer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "400px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
