import DataTableColumnHeader from "./components/data-table-column-header";
import DataTableFacetedFilter from "./components/data-table-faceted-filter";
import DataTablePagination from "./components/data-table-pagination";
import DataTableRowActions from "./components/data-table-row-actions";
import DataTableToolbar from "./components/data-table-toolbar";
import DataTableViewOptions from "./components/data-table-view-options";
import TaskPage from "./TaskPage";
import columns from "./components/columns";
import DataTable from "./components/data-table";
import UserNav from "./components/user-nav";
import { Announcement } from "~/components/customUi/announcement";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/customUi/page-header";
import MonacoEditor from "../editor/components2";
import { useEffect, useState } from "react";
import { Scaffolding } from "~/components/customUi/scaffolding";

export async function loader({ request }: LoaderArgs) {
	return null;
}

 
export default function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("TaskPage");

	const sections = [
		{ name: "TaskPage", value: "TaskPage", path: "/examples/tasks/TaskPage.tsx.txt" },
		{ name: "data", value: "data", path: "/examples/tasks/data.ts.txt" },
		{ name: "columns", value: "columns", path: "/examples/tasks/columns.tsx.txt" },
		{ name: "data-table-faceted-filter", value: "data-table-faceted-filter", path: "/examples/tasks/data-table-faceted-filter.tsx.txt" },
		{ name: "data-table-pagination", value: "data-table-pagination", path: "/examples/tasks/data-table-pagination.tsx.txt" },
		{ name: "data-table-row-actions", value: "data-table-row-actions", path: "/examples/tasks/data-table-row-actions.tsx.txt" },
		{ name: "data-table-toolbar", value: "data-table-toolbar", path: "/examples/tasks/data-table-toolbar.tsx.txt" },
		{ name: "data-table-view-options", value: "data-table-view-options", path: "/examples/tasks/data-table-view-options.tsx.txt" },
		{ name: "data-table", value: "data-table", path: "/examples/tasks/data-table.tsx.txt" },
		{ name: "user-nav", value: "user-nav", path: "/examples/tasks/user-nav.tsx.txt" },
		{ name: "data-table-column-header", value: "data-table-column-header", path: "/examples/tasks/data-table-column-header.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
		case "TaskPage":
			viewSelected = <TaskPage />;
			break;
		case "data":
			viewSelected = <Scaffolding title="data" />;
			break;
		case "columns":
			viewSelected = <Scaffolding title="columns" />;
			break;
		case "data-table-faceted-filter":
			viewSelected = <Scaffolding title="data-table-faceted-filter" />;
			break;
		case "data-table-pagination":
			viewSelected = <Scaffolding title="data-table-pagination" />;
			break;
		case "data-table-row-actions":
			viewSelected = <Scaffolding title="data-table-row-actions" />;
			break;
		case "data-table-toolbar":
			viewSelected = <Scaffolding title="data-table-toolbar" />;
			break;
		case "data-table-view-options":
			viewSelected = <Scaffolding title="data-table-view-options" />;
			break;
		case "data-table":
			viewSelected = <Scaffolding title="data-table" />;
			break;
		case "user-nav":
			viewSelected = <Scaffolding title="user-nav" />;
			break;
		case "data-table-column-header":
			viewSelected = <Scaffolding title="data-table-column-header" />;
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

export const meta: MetaFunction = () => {
	return [{ title: "Tasks - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
