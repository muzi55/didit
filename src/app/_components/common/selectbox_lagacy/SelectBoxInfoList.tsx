import React from "react";

import SelectBoxInfoItem from "./SelectBoxInfoItem";

export default function SelectBoxInfoList() {
	return (
		<div>
			<SelectBoxInfoItem
				onClick={() => {}}
				info={{ description: "설명", guide: "가이드" }}
			>
				아이템1
			</SelectBoxInfoItem>
			<SelectBoxInfoItem
				onClick={() => {}}
				info={{ description: "설명3123", guide: "가이드123123" }}
			>
				아이템2
			</SelectBoxInfoItem>
			<SelectBoxInfoItem
				onClick={() => {}}
				info={{ description: "설명asdasd", guide: "가이드asdasd" }}
			>
				아이템3
			</SelectBoxInfoItem>
		</div>
	);
}
