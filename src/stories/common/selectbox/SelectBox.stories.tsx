import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import SelectBox from "@/app/_components/common/selectbox/SelectBox";
import SelectBoxInfo from "@/app/_components/common/selectbox/SelectBoxInfo";
import SelectBoxItem from "@/app/_components/common/selectbox/SelectBoxItem";
import SelectBoxList from "@/app/_components/common/selectbox/SelectBoxList";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/SelectBox/SelectBox",
	component: SelectBox,
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
		title: {
			control: {
				type: "text",
			},
			description: "제목",
			defaultValue: "셀렉트 박스",
		},
		children: {
			control: {
				type: "object",
			},
			description: "셀렉트 하위 컴포넌트",
			defaultValue: (
				<SelectBoxList>
					<SelectBoxItem onClick={fn()}>아이템1</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템2</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템3</SelectBoxItem>
					<SelectBoxItem onClick={fn()}>아이템4</SelectBoxItem>
				</SelectBoxList>
			),
		},
	},
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<SelectBoxList>
				<SelectBoxItem onClick={fn()}>아이템1</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템2</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템3</SelectBoxItem>
				<SelectBoxItem onClick={fn()}>아이템4</SelectBoxItem>
			</SelectBoxList>
		),
		title: "셀렉트 박스",
	},
};

export const InfoSelect: Story = {
	args: {
		children: (
			<div className="flex">
				<SelectBoxList>
					<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
					<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
					<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
					<SelectBoxItem onClick={() => {}}>아이템4</SelectBoxItem>
				</SelectBoxList>
				<SelectBoxInfo
					description="asdasdasd asdsdada dadasdasdada dasdasdadad adasasdas"
					guide="loremasdasdas asdasdasd asdasdasda dadasdasdasd asdasda"
				/>
			</div>
		),
		title: "셀렉트 박스",
	},
};
