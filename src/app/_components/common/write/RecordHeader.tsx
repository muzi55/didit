import React from "react";

interface RecordHeaderProps {
	children: React.ReactNode;
}

export default function RecordHeader({ children }: RecordHeaderProps) {
	return <div className="flex justify-between items-center">{children}</div>;
}

interface RecordHeaderSectionProps {
	children: React.ReactNode;
}

const Left = ({ children }: RecordHeaderSectionProps) => {
	return <div className="text-H6">{children}</div>;
};
const Right = ({ children }: RecordHeaderSectionProps) => {
	return <div className="text-bodyMedium400">{children}</div>;
};

RecordHeader.Left = Left;
RecordHeader.Right = Right;
