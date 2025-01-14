import type { Meta, StoryObj } from "@storybook/react";

import SelectBoxInfo from "@/app/_components/common/selectbox/SelectBoxInfo";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/SelectBox/SelectBoxInfo",
	component: SelectBoxInfo,
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
		description: {
			control: {
				type: "text",
			},
			description: "템플릿 설명",
			defaultValue: "템플릿 설명",
		},
		guide: {
			control: {
				type: "text",
			},
			description: "작성 가이드",
			defaultValue: "작성 가이드",
		},
	},
} satisfies Meta<typeof SelectBoxInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description: "템플릿 설명",
		guide: "작성 가이드",
	},
};

export const 자유롭게: Story = {
	args: {
		description: "형식 없이 자유롭게 오늘의 회고를 작성합니다.",
		guide: "떠오르는 생각과 경험을 솔직하게 기록하며 창의적으로 표현해보세요.",
	},
};

export const four_LS: Story = {
	args: {
		description:
			"Liked, Learned, Lacked, Longed For의 4가지로 회고를 나눕니다.",
		guide:
			"좋았던 점, 배운 점, 부족했던 점, 바랐던 점을 정리하며 명확히 회고하세요.",
	},
};
