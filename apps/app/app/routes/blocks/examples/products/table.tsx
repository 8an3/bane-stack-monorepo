import ProductsPage from "~/components/blocks/products/products-01/page";
import productstable from "~/components/blocks/products/products-01/components/products-table";
import { useEffect, useState } from "react";
import MonacoEditor from "../editor/components2";
import { Scaffolding } from "~/components/customUi/scaffolding";

export const meta: MetaFunction = () => {
	return [{ title: "Products - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};

export async function loader({ request }: LoaderArgs) {
	return null;
}

export default function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("ProductsPage");

	const sections = [
		{ name: "ProductsPage", value: "ProductsPage", path: "/examples/table/page.tsx.txt" },
		{ name: "productstable", value: "productstable", path: "/examples/table/products-table.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
		case "ProductsPage":
			viewSelected = <ProductsPage />;
			break;
		case "productstable":
			viewSelected = <Scaffolding title="productstable" />;
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
