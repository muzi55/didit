import type { Meta, StoryObj } from "@storybook/react";

import DailyStreakCard from "@/app/_components/common/card/streakcard/DailyStreakCard";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Common/Card/DailyStreakCard",
	component: DailyStreakCard,
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
		title: {
			control: {
				type: "text",
			},
			description: "연속 출석 카드 제목",
			defaultValue: "제목",
		},
		attendanceDate: {
			control: {
				type: "text",
			},
			description: "연속 출석 카드 날짜",
			defaultValue: "2021.10.10",
		},
		cardFooterText: {
			control: {
				type: "text",
			},
			description: "연속 출석 카드 하단 텍스트",
			defaultValue: "하단 텍스트",
		},
	},
} satisfies Meta<typeof DailyStreakCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "제목",
		attendanceDate: "2021.10.10",
		cardFooterText: "하단 텍스트",
	},
};

// export const Render: Story = {
//     args: {
//         title: "제목",
//         attendanceDate: "2021.10.10",
//         cardFooterText: "하단 텍스트",
//     },
//     render: args => (
//         <DailyStreakCard
//             title={args.title}
//             attendanceDate={args.attendanceDate}
//             cardFooterText={args.cardFooterText}
//         />
//     ),
// }
