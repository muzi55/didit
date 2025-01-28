"use client";

import { convertToRaw, type EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

import { DraftEditor } from "./DraftEditor";

export default function TestEditor() {
	const [editorState, setEditorState] = useState<EditorState | null>(null);

	const [plainText, setPlainText] = useState<string | null>(null);

	useEffect(() => {
		// if (typeof window !== "undefined") return;
		if (editorState) {
			const contentState = editorState.getCurrentContent();
			const rawContentState = convertToRaw(contentState);
			const text = contentState.getPlainText();
			setPlainText(text);
			console.log(rawContentState);
			console.log(text);
		}
	}, [editorState]);

	return (
		<>
			<DraftEditor
				editorState={editorState}
				setEditorState={setEditorState}
				placeholder="test"
			/>
			<pre>{plainText}</pre>
		</>
	);
}
