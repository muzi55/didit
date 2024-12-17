import Image from "next/image";
import React from "react";

import { useHeaderSlide } from "@/shared/store/header/useHeaderSlide";

export default function HeaderProfile() {
	const { isSidebarOpen } = useHeaderSlide();
	const 신세경사진 =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Shin_Se-kyung_%EC%8B%A0%EC%84%B8%EA%B2%BD_in_January_2024_03.jpg/800px-Shin_Se-kyung_%EC%8B%A0%EC%84%B8%EA%B2%BD_in_January_2024_03.jpg";

	return (
		<div className="flex items-center ml-[16px]">
			<div className="mr-[8px]">
				<Image src={신세경사진} alt="신세경" width={44} height={44} />
			</div>
			{isSidebarOpen && (
				<div>
					<p className="text-textColor-secondary text-bodyMedium400">이름</p>
				</div>
			)}
		</div>
	);
}
