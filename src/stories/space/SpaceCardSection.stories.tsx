import type { Meta, StoryObj } from "@storybook/react";

import SpaceCardSection from "@/app/_components/space/SpaceCardSection";
import DecorationProvider from "@/stories/DecorationProvider";

const meta = {
	title: "Space/SpaceCardSection",
	component: SpaceCardSection,
	parameters: {
		layout: "stretch",
	},
	tags: ["autodocs"],

	decorators: [
		Story => (
			<DecorationProvider style={{ width: "1600px" }}>
				<Story />
			</DecorationProvider>
		),
	],
	argTypes: {
		// <SpaceCardSection title="DIDIT" cardList={cardSectionList} />
		title: {
			control: {
				type: "text",
			},
			description: "스페이스 제목",
			default: "DIDIT",
		},

		// export interface SpaceCardList {
		//     id: string;
		//     title: string;
		//     // REFACTOR 이동방식 추후 생각 프로그래마틱 vs 네비게이팅
		//     // onClick?: (url: string) => void;
		//     content: string;
		//     tagList: CardTagList[];
		// }

		cardList: {
			control: {
				type: "object",
			},
			description: "스페이스 카드 리스트",
			default: [
				{
					id: "1",
					title: "스페이스1",
					content: `
                    <p>12</p>
                    <p>123</p>
                `,
					tagList: [
						{
							label: "태그1",
							onClick: () => {
								console.log();
							},
						},
						{
							label: "태그2",
							onClick: () => {
								console.log();
							},
						},
						{
							label: "태그3",
							onClick: () => {
								console.log();
							},
						},
					],
				},
			],
		},
	},
} satisfies Meta<typeof SpaceCardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "DIDIT",
		cardList: [
			{
				id: "1",
				title: "스페이스1",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그2",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
		],
	},
};

export const NoListItem: Story = {
	args: {
		title: "DIDIT",
		cardList: [],
	},
};
export const TwoListItem: Story = {
	args: {
		title: "DIDIT",
		cardList: [
			{
				id: "1",
				title: "스페이스1",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그2",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "2",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
				],
			},
		],
	},
};
export const FourListItem: Story = {
	args: {
		title: "DIDIT",
		cardList: [
			{
				id: "1",
				title: "스페이스1",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그2",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "2",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "3",
				title: "스페이스1",
				content: `
                <p>내용1</p>
            
            `,
				tagList: [
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "4",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [],
			},
		],
	},
};
export const FiveListItem: Story = {
	args: {
		title: "DIDIT",
		cardList: [
			{
				id: "1",
				title: "스페이스1",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그2",
						onClick: () => {
							console.log();
						},
					},
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "2",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [
					{
						label: "태그1",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "3",
				title: "스페이스1",
				content: `
                <p>내용1</p>
            
            `,
				tagList: [
					{
						label: "태그3",
						onClick: () => {
							console.log();
						},
					},
				],
			},
			{
				id: "4",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [],
			},
			{
				id: "5",
				title: "스페이스2",
				content: `
                <p>내용1</p>
                <p>내용2</p>
                <p>내용3</p>
                <p>내용4</p>
                <p>내용5</p>
            `,
				tagList: [],
			},
		],
	},
};
