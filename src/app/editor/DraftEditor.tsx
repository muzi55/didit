import "draft-js/dist/Draft.css";

import type { EditorState } from "draft-js";
import { Editor } from "draft-js";
import React from "react";

interface DraftEditorProps {
	editorState: EditorState;
	setEditorState: (state: EditorState) => void;
	placeholder?: string;
}

export function DraftEditor({
	editorState,
	setEditorState,
	placeholder,
}: DraftEditorProps) {
	return (
		<div className="editor-container">
			<Editor
				editorState={editorState}
				onChange={setEditorState}
				placeholder={placeholder}
			/>
		</div>
	);
}
