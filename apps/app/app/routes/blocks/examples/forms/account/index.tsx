import { AccountForm } from "./account-form";
import MonacoEditor from "../../editor/components2";
import { useEffect, useState } from "react";

export default function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("AccountForm");

	const sections = [{ name: "AccountForm", value: "AccountForm", path: "/examples/forms/account/account-form.tsx.txt" }];
	let viewSelected;
	switch (name) {
		case "AccountForm":
			viewSelected = <AccountForm />;
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
