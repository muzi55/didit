import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor").then(mod => mod.default),
	{ ssr: false },
);
const EditerMarkdown = dynamic(
	() =>
		import("@uiw/react-md-editor").then(mod => {
			return mod.default.Markdown;
		}),
	{ ssr: false },
);

function TestMEdit() {
	const [value, setValue] = useState("**Hello world!!!**");
	return (
		<div data-color-mode="dark">
			<MDEditor value={value} onChange={val => setValue(val || "")} />
			<div style={{ paddingTop: 50 }}>
				<EditerMarkdown source={value} />
			</div>
		</div>
	);
}

export default TestMEdit;
