import React from "react";

import type { DetailTitleHeadingProps, TitleProps } from "./titleType";

export default function TitleParent({
	children,
}: {
	children: React.ReactElement<TitleProps | DetailTitleHeadingProps>;
}) {
	return <div className="border-b pb-[22px]">{children}</div>;
}
