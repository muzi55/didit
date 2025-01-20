import React from "react";

export default function DailyStreakCard({
	children,
	background = "/static/images/background/bg.webp",
}: {
	children: React.ReactNode;
	background?: string;
}) {
	const backgroundImg = `url('${background}')`;
	return (
		<div
			className={`rounded-[16px] px-[12px] pb-[28px] pt-[20px] bg-cover text-white w-[307px]`}
			style={{
				backgroundImage: backgroundImg,
				backgroundColor: "lightgray",
				backgroundPosition: "-204.308px -18.784px",
				backgroundSize: "172.946% 173.571%",
				backgroundRepeat: "no-repeat",
			}}
		>
			{children}
		</div>
	);
}

const Title = ({ children }: { children: React.ReactNode }) => {
	return <h3 className="text-primary text-bodyMedium700">{children}</h3>;
};

const AttendanceDate = ({ children }: { children: React.ReactNode }) => {
	return <p className="text-H4 mt-[34px]">{children}</p>;
};

const CardFooterText = ({ children }: { children: React.ReactNode }) => {
	return <p className="text-bodyMedium700 mt-[18px]">{children}</p>;
};

DailyStreakCard.Title = Title;
DailyStreakCard.AttendanceDate = AttendanceDate;
DailyStreakCard.CardFooterText = CardFooterText;
