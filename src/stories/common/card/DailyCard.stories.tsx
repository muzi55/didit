import type { Meta, StoryObj } from "@storybook/react";

import DailyCard from "@/app/_components/common/card/DailyCard";
import RecordHeader from "@/app/_components/write/RecordHeader";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/DailyCard",
	component: DailyCard,
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
	argTypes: {
		children: {
			control: {
				type: "object",
			},
			description: "카드",
			defaultValue: (
				<>
					<DailyCard.Header>헤더</DailyCard.Header>
					<DailyCard.Body>{`바디 <p>123</p> <h1>123123</h1>`}</DailyCard.Body>
					<DailyCard.TagList
						listItem={[
							{ label: "태그1", onClick: () => {} },
							{ label: "태그2", onClick: () => {} },
						]}
					/>
				</>
			),
		},
	},
} satisfies Meta<typeof DailyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<DailyCard.Header>헤더</DailyCard.Header>
				<DailyCard.Body>{`바디 <p>123</p> <h1>123123</h1>`}</DailyCard.Body>
				<DailyCard.TagList
					listItem={[
						{ label: "태그1", onClick: () => {} },
						{ label: "태그2", onClick: () => {} },
					]}
				/>
			</>
		),
	},
};

export const HiddenRight: Story = {
	args: {
		children: (
			<>
				<RecordHeader.Left>Left Section</RecordHeader.Left>
			</>
		),
	},
};
