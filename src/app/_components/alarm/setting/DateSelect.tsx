import React, { useState } from "react";

import SelectBox from "../../common/selectbox/SelectBox";
import SelectBoxItem from "../../common/selectbox/SelectBoxItem";
import SelectBoxList from "../../common/selectbox/SelectBoxList";
import type { AmPmUnion, TimeUnion } from "../alarmType";

interface DateSelectProps {
	open: boolean;
	setOpen: () => void;
	title: string;
	selectList: string[];
	onSelect: (value: string | AmPmUnion | TimeUnion) => void; // 타입 수정
}

export default function DateSelect({
	title,
	selectList,
	onSelect,
}: DateSelectProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false); // 개별 open 상태

	const handleSelect = () => {
		setIsOpen(!isOpen);
	};
	return (
		<SelectBox size="small" title={title} setOpen={handleSelect} open={isOpen}>
			<SelectBoxList>
				{selectList.map(el => (
					<SelectBoxItem
						key={el}
						size="small"
						onClick={() => {
							onSelect(el);
							setIsOpen(false);
						}}
					>
						{el}
					</SelectBoxItem>
				))}
			</SelectBoxList>
		</SelectBox>
	);
}
