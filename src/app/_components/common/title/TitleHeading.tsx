import React from "react";

import type { TitleProps } from "./titleType";

export default function TitleHeading({ children }: TitleProps) {
	return <h2 className="text-H4 ml-[11px]">{children}</h2>;
}
