import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Modal from "@/app/_components/modal/Modal";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Modal/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "400px" }}>
				<div id="modal-root">
					<Story />
				</div>
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "object",
			},
		},
	},
	args: {
		closeModal: fn(),
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "모달테스트",
		closeModal: fn(),
	},
};
