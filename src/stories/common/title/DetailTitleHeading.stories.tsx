import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DetailTitleHeading from "@/app/_components/common/title/DetailTitleHeading";
import TItleTriggerListItem from "@/app/_components/common/title/TItleTriggerListItem";
import { icons } from "@/shared/libs/common/icons";
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
			description: `제목 요소`,
			control: {
				type: "text",
			},
			default: "Didit Detail",
		},
		trigger: {
			description: `타입: DetailTitleHeadingProps <br />
            더보기 버튼을 클릭했을경우 보이는 컴포넌트
            `,
			control: {
				type: "object",
			},
			default: (
				<>
					<TItleTriggerListItem onClick={fn()} icon={icons.pencil()}>
						수정하기
					</TItleTriggerListItem>
					<TItleTriggerListItem
						color="danger"
						onClick={fn()}
						icon={icons.trash()}
					>
						삭제하기
					</TItleTriggerListItem>
				</>
			),
		},
	},
} satisfies Meta<typeof DetailTitleHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		trigger: (
			<>
				<TItleTriggerListItem onClick={fn()} icon={icons.pencil()}>
					수정하기
				</TItleTriggerListItem>
				<TItleTriggerListItem
					color="danger"
					onClick={fn()}
					icon={icons.trash()}
				>
					삭제하기
				</TItleTriggerListItem>
			</>
		),
		children: "Didit Detail",
	},
};
