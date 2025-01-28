"use client";

import "draft-js/dist/Draft.css"; // 기본 스타일시트 포함

import { Editor, EditorState } from "draft-js";
import { useEffect, useRef } from "react";

interface DraftEditorProps {
	editorState: EditorState | null;
	setEditorState: React.Dispatch<React.SetStateAction<EditorState | null>>;
	placeholder: string;
}
export function DraftEditor({
	editorState,
	setEditorState,
	placeholder,
}: DraftEditorProps) {
	const editor = useRef<Editor | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setEditorState(EditorState.createEmpty());
		}
	}, []);

	function focusEditor() {
		if (editor.current) {
			editor.current.focus();
		}
	}

	if (editorState === null) {
		return null;
	}

	return (
		<div className="editor-container" onClick={focusEditor}>
			<Editor
				ref={editor}
				placeholder={placeholder}
				editorState={editorState}
				onChange={setEditorState}
			/>
		</div>
	);
}
