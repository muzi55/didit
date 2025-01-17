import Image from "next/image";
import React from "react";

import { dailyImage } from "@/shared/libs/common/dailyImage";

export default function DailyEmpty() {
	const { dailyEmpty } = dailyImage;
	return (
		<div>
			<Image
				src={dailyEmpty.src}
				alt={dailyEmpty.alt}
				width={dailyEmpty.width}
				height={dailyEmpty.height}
			/>
		</div>
	);
}
