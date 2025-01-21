"use client";
import React, { useState } from "react";

import { icons } from "@/shared/libs/common/icons";

import { SEARCH_PLACEHOLDER } from "./constant";

export default function SearchInput() {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleReset = () => {
		setInputValue("");
	};

	return (
		<form className="relative" action="#">
			<input
				type="text"
				className="w-full border border-stroke bg-gray-1 text-bodyMedium400 pt-[15px] pr-[17px] pb-[14px] pl-[20px] rounded-[12px] placeholder:text-bodyMedium400"
				placeholder={SEARCH_PLACEHOLDER}
				value={inputValue}
				onChange={handleInputChange}
			/>
			<div className="absolute top-1/2 right-[17px] -translate-y-1/2 flex">
				{inputValue && (
					<button type="reset" className="mr-[20px]" onClick={handleReset}>
						{icons.crossCircle()}
					</button>
				)}
				<button className="" type="submit">
					{icons.search}
				</button>
			</div>
		</form>
	);
}
