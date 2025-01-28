import dayjs from "dayjs";

interface SpaceWeekStartAtAndEndAt {
	startAt: Date;
	endAt: Date;
}
interface SpaceWeekCardProps {
	weekIndex: number;
	weekDate: SpaceWeekStartAtAndEndAt;
}
export const SpaceWeekCardHeading = ({
	weekIndex,
	weekDate,
}: SpaceWeekCardProps) => {
	const { startAt, endAt } = weekDate;
	const startAtDate = dayjs(startAt).format("MM / DD");
	const endDate = dayjs(endAt).format("MM / DD");

	return (
		<div className="mt-[43px]">
			<h4 className="text-secondary">
				<span className="text-bodyLarge700">
					Week&nbsp;<span>{weekIndex}</span>
				</span>
				&nbsp;
				<span className="text-bodyLarge500">
					({startAtDate} ~ {endDate})
				</span>
			</h4>
		</div>
	);
};
