import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TitleHeading from "@/app/_components/common/heding/TitleHeading";
import { 시간변수 } from "@/app/_components/search/constant";
import { CreateNewSpace } from "@/app/_components/space/CreateNewSpace";
import Space from "@/app/_components/space/Space";
import SpaceCardSection from "@/app/_components/space/SpaceCardSection";
import {
	cardSectionList,
	newSpaceList,
} from "@/app/_components/space/SpaceConstant";
import SpaceDetailHead from "@/app/_components/space/SpaceDetailHead";
import SpaceWeekCard from "@/app/_components/space/spaceWeek/SpaceWeekCard";
import CalendarUI from "@/app/_components/space/WriteCalendar";

const meta = {
	title: "Page/Space",
	component: Space,
	parameters: {
		layout: "stretch",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			control: {
				type: "object",
			},
			description: "하위 컴포넌트",
			default: "",
		},
	},
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "",
	},
};

export const Example1: Story = {
	args: {
		children: (
			<>
				<TitleHeading>전체 스페이스</TitleHeading>
				<SpaceCardSection title="DIDIT" cardList={cardSectionList} />

				<CreateNewSpace />
			</>
		),
	},
};

export const Example_NoItem: Story = {
	args: {
		children: (
			<>
				<TitleHeading>전체 스페이스</TitleHeading>
				<SpaceCardSection title="DIDIT" cardList={newSpaceList(0)} />

				<CreateNewSpace />
			</>
		),
	},
};

export const Example_FourItem: Story = {
	args: {
		children: (
			<>
				<TitleHeading>전체 스페이스</TitleHeading>
				<SpaceCardSection title="DIDIT" cardList={newSpaceList(4)} />
				<SpaceCardSection title="DIDIT_Test4" cardList={newSpaceList(2)} />

				<CreateNewSpace />
			</>
		),
	},
};

const year = 2024;
const setYear = fn();
const month = 10;
const setMonth = fn();

export const Example_Detail_Calendar: Story = {
	args: {
		children: (
			<>
				<SpaceDetailHead
					date={new Date(시간변수)}
					startIt={new Date(시간변수)}
				/>
				<CalendarUI
					year={year}
					setYear={setYear}
					month={month}
					setMonth={setMonth}
					minYear={2021}
					maxYear={2022}
				/>

				<SpaceWeekCard>
					<SpaceWeekCard.Header
						weekIndex={1}
						weekDate={{
							startAt: new Date(시간변수),
							endAt: new Date(),
						}}
					/>
					<SpaceWeekCard.Body cardList={newSpaceList(0)} />
					<SpaceWeekCard.Header
						weekIndex={2}
						weekDate={{
							startAt: new Date(시간변수),
							endAt: new Date(),
						}}
					/>
					<SpaceWeekCard.Body cardList={newSpaceList(2)} />
					<SpaceWeekCard.Header
						weekIndex={3}
						weekDate={{
							startAt: new Date(시간변수),
							endAt: new Date(),
						}}
					/>
					<SpaceWeekCard.Body cardList={newSpaceList(4)} />
				</SpaceWeekCard>
			</>
		),
	},
};
