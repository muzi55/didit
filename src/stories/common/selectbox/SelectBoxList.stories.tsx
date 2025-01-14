import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SelectBoxItem from "@/app/_components/common/selectbox/SelectBoxItem";
import SelectBoxList from "@/app/_components/common/selectbox/SelectBoxList";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/SelectBox/SelectBoxList",
	component: SelectBoxList,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider
				className="flex justify-center"
				style={{ width: "500px" }}
			>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			control: {
				type: "object",
			},
			description: "셀렉트 박스 아이템 컴포넌트",
			defaultValue: (
				<>
					<SelectBoxItem onClick={fn()}>아이템1</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템2</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템3</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템4</SelectBoxItem>
				</>
			),
		},
	},
} satisfies Meta<typeof SelectBoxList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<SelectBoxItem onClick={fn()}>아이템1</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템2</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템3</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템4</SelectBoxItem>
			</>
		),
	},
};
