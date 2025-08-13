import { Scaffolding } from "~/components/customUi/scaffolding";
import PlaygroundPage from "./PlaygroundPage";
import codeviewer from "./components/code-viewer";
import maxlengthselector from "./components/maxlength-selector";
import modelselector from "./components/model-selector";
import presetactions from "./components/preset-actions";
import presetsave from "./components/preset-save";
import presetselector from "./components/preset-selector";
import presetshare from "./components/preset-share";
import temperatureselector from "./components/temperature-selector";
import toppselector from "./components/top-p-selector";
import models from "./data/models";
import presets from "./data/presets";
import { useEffect, useState } from "react";
import MonacoEditor from "../editor/components2";

export async function loader({ request }: LoaderArgs) {
	return null;
}


export default function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("PlaygroundPage");

	const sections = [
		{ name: "PlaygroundPage", value: "PlaygroundPage", path: "/examples/playground/PlaygroundPage.tsx.txt" },
		{ name: "models", value: "models", path: "/examples/playground/models.ts.txt" },
		{ name: "presets", value: "presets", path: "/examples/playground/presets.ts.txt" },
		{ name: "code-viewer", value: "code-viewer", path: "/examples/playground/code-viewer.tsx.txt" },
		{ name: "maxlength-selector", value: "maxlength-selector", path: "/examples/playground/maxlength-selector.tsx.txt" },
		{ name: "model-selector", value: "model-selector", path: "/examples/playground/model-selector.tsx.txt" },
		{ name: "preset-actions", value: "preset-actions", path: "/examples/playground/preset-actions.tsx.txt" },
		{ name: "preset-save", value: "preset-save", path: "/examples/playground/preset-save.tsx.txt" },
		{ name: "preset-selector", value: "preset-selector", path: "/examples/playground/preset-selector.tsx.txt" },
		{ name: "preset-share", value: "preset-share", path: "/examples/playground/preset-share.tsx.txt" },
		{ name: "temperature-selector", value: "temperature-selector", path: "/examples/playground/temperature-selector.tsx.txt" },
		{ name: "top-p-selector", value: "top-p-selector", path: "/examples/playground/top-p-selector.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
		case "PlaygroundPage":
			viewSelected = <PlaygroundPage />;
			break;
		case "models":
			viewSelected = <Scaffolding title="models" />;
			break;
		case "presets":
			viewSelected = <Scaffolding title="presets" />;
			break;
		case "code-viewer":
			viewSelected = <Scaffolding title="code-viewer" />;
			break;
		case "maxlength-selector":
			viewSelected = <Scaffolding title="momaxlength-selectordels" />;
			break;
		case "model-selector":
			viewSelected = <Scaffolding title="model-selector" />;
			break;
		case "preset-actions":
			viewSelected = <Scaffolding title="preset-actions" />;
			break;
		case "preset-save":
			viewSelected = <Scaffolding title="preset-save" />;
			break;
		case "preset-selector":
			viewSelected = <Scaffolding title="preset-selector" />;
			break;
		case "preset-share":
			viewSelected = <Scaffolding title="preset-share" />;
			break;
		case "temperature-selector":
			viewSelected = <Scaffolding title="temperature-selector" />;
			break;
		case "top-p-selector":
			viewSelected = <Scaffolding title="top-p-selector" />;
			break;
		default:
			viewSelected = <PlaygroundPage />;
			break;
	}
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setSelectedCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setSelectedCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor viewSelected={viewSelected} code={selectedCode} sections={sections} setName={setName} name={name} />
		</div>
	);
}
