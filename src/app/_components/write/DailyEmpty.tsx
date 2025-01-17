import Image from "next/image";
import React from "react";

import { images } from "@/shared/libs/common/images";

export default function DailyEmpty() {
	const { dailyEmpty } = images;
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
