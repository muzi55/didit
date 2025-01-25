import { icons } from "@/shared/libs/common/icons";

import Button from "../common/Button";

// TODO 추후 버튼 클릭 이벤트 페러렐라우트 + 인터셉트 라우트로 교체하기
export const CreateNewSpace = () => {
	return (
		<div className="w-full py-[78px] rounded-[16px] rounded-[16px] text-center bg-gradient-to-br from-[#F3F4F6] to-[#D0D0D0] mt-[43px]">
			<div>
				<h4 className="text-bodyLarge700">
					새로운 스페이스를 만들어 관리해보세요!
				</h4>
				<div className="mt-[10px] mb-[24px]">
					<p className="text-bodyMedium400">
						필요에 따라 여러 스페이스를 만들어
					</p>
					<p className="text-bodyMedium400">
						업무와 기록을 체계적으로 분류해보세요!
					</p>
				</div>
				<Button color="secondary" onClick={() => {}}>
					<span className="flex items-center gap-[10px]">
						스페이스 {icons.writeSpacePlus()}
					</span>
				</Button>
			</div>
		</div>
	);
};
