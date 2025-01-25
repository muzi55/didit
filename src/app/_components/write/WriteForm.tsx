import React, { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

import Button from "../common/Button";
import SelectBox from "../common/selectbox/SelectBox";
import SelectBoxInfo from "../common/selectbox/SelectBoxInfo";
import SelectBoxItem from "../common/selectbox/SelectBoxItem";
import SelectBoxList from "../common/selectbox/SelectBoxList";

export default function WriteForm() {
	interface SelectState {
		spaceState: boolean;
		templateState: boolean;
	}

	const [selectState, setSelectState] = useState<SelectState>({
		spaceState: false,
		templateState: false,
	});

	const handleSelect = (type: keyof SelectState) => {
		setSelectState({
			...selectState,
			[type]: !selectState[type],
		});
	};
	return (
		<div>
			<div className="flex justify-between items-center py-[24px] px-[20px] border-b">
				<div className="flex">
					<div className="mr-[6px]">
						<Button onClick={() => {}}>
							<span className="flex items-center gap-[10px]">
								스페이스 {icons.writeSpacePlus("black")}
							</span>
						</Button>
					</div>
					<div className="flex gap-[12px]">
						<SelectBox
							title="스페이스 선택"
							open={selectState.spaceState}
							setOpen={() => handleSelect("spaceState")}
						>
							<SelectBoxList>
								<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
								<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
								<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
								<SelectBoxItem onClick={() => {}}>아이템4</SelectBoxItem>
							</SelectBoxList>
						</SelectBox>

						<SelectBox
							title="테스트2"
							open={selectState.templateState}
							setOpen={() => handleSelect("templateState")}
						>
							<div className="flex">
								<SelectBoxList>
									<SelectBoxItem onClick={() => {}}>아이템1</SelectBoxItem>
									<SelectBoxItem onClick={() => {}}>아이템2</SelectBoxItem>
									<SelectBoxItem onClick={() => {}}>아이템3</SelectBoxItem>
									<SelectBoxItem onClick={() => {}}>아이템4</SelectBoxItem>
								</SelectBoxList>
								<SelectBoxInfo
									description="asdasdasd asdsdada dadasdasdada dasdasdadad adasasdas"
									guide="loremasdasdas asdasdasd asdasdasda dadasdasdasd asdasda"
								/>
							</div>
						</SelectBox>
					</div>
				</div>
				<div>
					<button>{icons.closeUp}</button>
				</div>
			</div>
			<div>body</div>
		</div>
	);
}
