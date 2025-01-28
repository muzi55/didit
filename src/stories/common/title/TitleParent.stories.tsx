import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import DetailTitleHeading from "@/app/_components/common/title/DetailTitleHeading";
import TitleHeading from "@/app/_components/common/title/TitleHeading";
import TitleParent from "@/app/_components/common/title/TitleParent";
import TItleTriggerListItem from "@/app/_components/common/title/TItleTriggerListItem";
import { icons } from "@/shared/libs/common/icons";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Title/TitleParent",
	component: TitleParent,
	parameters: {
		layout: "Stretch",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<DecorationProvider style={{ width: "500px", height: "200px" }}>
				<Story />
			</DecorationProvider>
		),
	],

	args: {
		children: <TitleHeading>스페이스</TitleHeading>,
	},

	argTypes: {
		children: {
			description: `타입: type:TitleProps | DetailTitleHeadingProps <br />`,
			control: {
				type: "object",
			},
			default: <h2 className="text-H4 ml-[11px]">전체 스페이스</h2>,
		},
	},
} satisfies Meta<typeof TitleParent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <TitleHeading>스페이스</TitleHeading>,
	},
};

export const Detail_Title_Heading: Story = {
	args: {
		children: (
			<DetailTitleHeading
				trigger={
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
				}
			>
				스페이스
			</DetailTitleHeading>
		),
	},
};
