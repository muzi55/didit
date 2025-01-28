import type { Meta, StoryObj } from "@storybook/react";

import DetailTitleHeading from "@/app/_components/common/title/DetailTitleHeading";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Title/DetailTitleHeading",
	component: DetailTitleHeading,
	parameters: {
		layout: "Stretch",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "500px", height: "500px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		children: {
			description: `타입: DetailTitleHeadingProps `,
			control: {
				type: "text",
			},
			default: <h2 className="text-H4 ml-[11px]">전체 스페이스</h2>,
		},
		trigger: {
			description: `타입: DetailTitleHeadingProps <br />
            더보기 버튼을 클릭했을경우 보이는 컴포넌트
            `,
			control: {
				type: "object",
			},
			default: "Didit Detail",
		},
	},
} satisfies Meta<typeof DetailTitleHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		trigger: <div>테스트</div>,
		children: "Didit Detail",
	},
};
