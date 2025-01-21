"use client";
import React, { useActionState } from "react";

import { icons } from "@/shared/libs/common/icons";

import { SEARCH_PLACEHOLDER } from "./constant";

export default function SearchInput() {
	const [state, formAction, isPending] = useActionState(() => {}, null);

	return (
		<form className="relative" action={formAction}>
			<input
				type="text"
				className="w-full border border-stroke bg-gray-1 text-bodyMedium400 pt-[15px] pr-[17px] pb-[14px] pl-[20px] rounded-[12px] placeholder:text-bodyMedium400"
				placeholder={SEARCH_PLACEHOLDER}
			/>
			{/* <input type="text" name="bookId" readOnly value={bookId} hidden /> */}
			<div className="absolute top-1/2 right-[17px] -translate-y-1/2 flex">
				<button className="mr-[20px]" disabled={isPending} type="submit">
					{icons.crossCircle}
				</button>
				<button className="" disabled={isPending} type="submit">
					{icons.search}
				</button>
			</div>
		</form>
	);
}
