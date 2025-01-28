import { convertToRaw, EditorState } from "draft-js";
import React, { useEffect, useState } from "react";

import { DraftEditor } from "./DraftEditor";

export default function TestEditor() {
	const [editorState, setEditorState] = useState<EditorState>(() =>
		EditorState.createEmpty(),
	);
	const [plainText, setPlainText] = useState("");

	useEffect(() => {
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
		<div>
			<DraftEditor
				editorState={editorState}
				setEditorState={setEditorState}
				placeholder="test"
			/>
			<div>Plain Text: {plainText}</div>
		</div>
	);
}
