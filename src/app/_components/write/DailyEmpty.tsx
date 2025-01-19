import Image from "next/image";
import React from "react";

import { dailyImage } from "@/shared/libs/common/dailyImage";

export default function DailyEmpty() {
	const { dailyEmpty } = dailyImage;
	return (
		<div className="flex flex-col items-center bg-gray-2 py-[51px]">
			<Image
				src={dailyEmpty.src}
				alt={dailyEmpty.alt}
				width={dailyEmpty.width}
				height={dailyEmpty.height}
			/>
			<div className="text-center mt-3">
				<p className="text-bodyLarge700">오늘 등록된 회고록이 없네요.</p>
				<p className="text-bodyLarge600">지금 바로 시작해볼까요?</p>
			</div>
		</div>
	);
}
