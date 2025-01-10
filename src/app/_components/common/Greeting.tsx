import React from "react";

interface GreetingProps {
	userName: string;
	greeting: string;
}

/**
 * Greeting 컴포넌트는 사용자 이름과 인사말을 표시합니다.
 * @param {string} userName - 사용자 이름
 * @param {string} greeting - 인사말
 */
export default function Greeting({ userName, greeting }: GreetingProps) {
	return (
		<div>
			<p className="flex items-end">
				<span className="text-H4 mr-[7px]">{userName}</span>
				<span className="text-H6">님</span>
			</p>
			<p className="text-H4 mt-[9px]">{greeting}</p>
		</div>
	);
}
