import type { CardTagList } from "../common/card/cardType";
import type { SpaceCardList } from "./spaceType";

export const spaceTagList: CardTagList[] = [
	{
		label: "태그1",
		onClick: () => {
			console.log("태그1");
		},
	},
	{
		label: "태그2",
		onClick: () => {
			console.log("태그2");
		},
	},
	{
		label: "태그3",
		onClick: () => {
			console.log("태그3");
		},
	},
];

export const cardSectionList: SpaceCardList[] = [
	{
		id: "1",
		title: "스페이스1",
		content: `
		<p>12</p>
		<p>123</p>
		<p>124</p>
		<p>125</p>
		<p>126</p>
		<p>127</p>
		<p>128</p>
		<p>1298</p>
		<p>120002</p>
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
		content: "스페이스2 내용",
		tagList: [
			{
				label: "태그1",
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
		id: "3",
		title: "스페이스3",
		content: "스페이스3 내용",
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
		id: "4",
		title: "스페이스4",
		content: "스페이스4 내용",
		tagList: [],
	},
];

export const cardSectionList2: SpaceCardList[] = [
	{
		id: "1",
		title: "스페이스11",
		content: `
		<p>12</p>
		<p>123</p>
		<p>124</p>
		<p>125</p>
		<p>126</p>
		<p>127</p>
		<p>128</p>
		<p>1298</p>
		<p>120002</p>
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
		title: "스페이스22",
		content: `
		<p>12</p>
		<p>123</p>
		<p>124</p>
		<p>125</p>
		<p>126</p>
		<p>127</p>
		<p>128</p>
		<p>1298</p>
		<p>120002</p>
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
];
