import React from "react";

export default function SearchProjectName({
	children,
}: {
	children: string | React.ReactNode;
}) {
	return <h4 className="text-bodySmall500">{children}</h4>;
}
