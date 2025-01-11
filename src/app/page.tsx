"use client";
import Button from "./_components/common/Button";

export default function Home() {
	return (
		<>
			<div>test</div>
			<Button
				color="primary"
				size="medium"
				full={true}
				round={true}
				onClick={() => {}}
			>
				<p className="text-bodySmall400">테스트트</p>
			</Button>
		</>
	);
}
