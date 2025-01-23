import React from "react";

export default function SearchWord({ word }: { word: string }) {
	return (
		<div className="border-b pb-[18px]">
			<p className="text-H4">
				<span className="text-tertiary">“{word}”</span> 검색 결과 더보기
			</p>
		</div>
	);
}
