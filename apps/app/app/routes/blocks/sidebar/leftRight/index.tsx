import { useEffect, useState } from "react";
import { Scaffolding } from "~/components/customUi/scaffolding";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import MonacoEditor from "../../examples/editor/components2";

export default function Page() {
	return (
		<SidebarProvider>
			<SidebarLeft />
			<SidebarInset>
				<header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
					<div className="flex flex-1 items-center gap-2 px-3">
						<SidebarTrigger />
						<Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbPage className="line-clamp-1">Project Management & Task Tracking</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<DefaultPage />
				</div>
			</SidebarInset>
			<SidebarRight />
		</SidebarProvider>
	);
}

export function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("AccountForm");

	const sections = [
		{ name: "sidebar-01/components/app-sidebar", value: "sidebar-01/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-01/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-01/components/search-form", value: "sidebar-01/components/search-form.tsx.txt", path: "/exmaples/sidebars/sidebar-01/components/search-form.tsx.txt" },
		{ name: "sidebar-01/components/version-switcher", value: "sidebar-01/components/version-switcher.tsx.txt", path: "/exmaples/sidebars/sidebar-01/components/version-switcher.tsx.txt" },
		{ name: "sidebar-01/index", value: "sidebar-01/index.tsx.txt", path: "/exmaples/sidebars/sidebar-01/index.tsx.txt" },
		{ name: "sidebar-02/components/app-sidebar", value: "sidebar-02/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-02/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-02/components/search-form", value: "sidebar-02/components/search-form.tsx.txt", path: "/exmaples/sidebars/sidebar-02/components/search-form.tsx.txt" },
		{ name: "sidebar-02/components/version-switcher", value: "sidebar-02/components/version-switcher.tsx.txt", path: "/exmaples/sidebars/sidebar-02/components/version-switcher.tsx.txt" },
		{ name: "sidebar-02/index", value: "sidebar-02/index.tsx.txt", path: "/exmaples/sidebars/sidebar-02/index.tsx.txt" },
		{ name: "sidebar-03/components/app-sidebar", value: "sidebar-03/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-03/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-03/index", value: "sidebar-03/index.tsx.txt", path: "/exmaples/sidebars/sidebar-03/index.tsx.txt" },
		{ name: "sidebar-04/components/app-sidebar", value: "sidebar-04/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-04/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-04/index", value: "sidebar-04/index.tsx.txt", path: "/exmaples/sidebars/sidebar-04/index.tsx.txt" },
		{ name: "sidebar-05/components/app-sidebar", value: "sidebar-05/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-05/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-05/components/search-form", value: "sidebar-05/components/search-form.tsx.txt", path: "/exmaples/sidebars/sidebar-05/components/search-form.tsx.txt" },
		{ name: "sidebar-05/index", value: "sidebar-05/index.tsx.txt", path: "/exmaples/sidebars/sidebar-05/index.tsx.txt" },
		{ name: "sidebar-06/components/app-sidebar", value: "sidebar-06/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-06/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-06/components/nav-main", value: "sidebar-06/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-06/components/nav-main.tsx.txt" },
		{ name: "sidebar-06/components/sidebar-opt-in-form", value: "sidebar-06/components/sidebar-opt-in-form.tsx.txt", path: "/exmaples/sidebars/sidebar-06/components/sidebar-opt-in-form.tsx.txt" },
		{ name: "sidebar-06/index", value: "sidebar-06/index.tsx.txt", path: "/exmaples/sidebars/sidebar-06/index.tsx.txt" },
		{ name: "sidebar-07/components/app-sidebar", value: "sidebar-07/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-07/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-07/components/nav-main", value: "sidebar-07/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-07/components/nav-main.tsx.txt" },
		{ name: "sidebar-07/components/nav-projects", value: "sidebar-07/components/nav-projects.tsx.txt", path: "/exmaples/sidebars/sidebar-07/components/nav-projects.tsx.txt" },
		{ name: "sidebar-07/components/nav-user", value: "sidebar-07/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-07/components/nav-user.tsx.txt" },
		{ name: "sidebar-07/components/team-switcher", value: "sidebar-07/components/team-switcher.tsx.txt", path: "/exmaples/sidebars/sidebar-07/components/team-switcher.tsx.txt" },
		{ name: "sidebar-07/index", value: "sidebar-07/index.tsx.txt", path: "/exmaples/sidebars/sidebar-07/index.tsx.txt" },
		{ name: "sidebar-08/components/app-sidebar", value: "sidebar-08/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-08/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-08/components/nav-main", value: "sidebar-08/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-08/components/nav-main.tsx.txt" },
		{ name: "sidebar-08/components/nav-projects", value: "sidebar-08/components/nav-projects.tsx.txt", path: "/exmaples/sidebars/sidebar-08/components/nav-projects.tsx.txt" },
		{ name: "sidebar-08/components/nav-secondary", value: "sidebar-08/components/nav-secondary.tsx.txt", path: "/exmaples/sidebars/sidebar-08/components/nav-secondary.tsx.txt" },
		{ name: "sidebar-08/components/nav-user", value: "sidebar-08/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-08/components/nav-user.tsx.txt" },
		{ name: "sidebar-08/index", value: "sidebar-08/index.tsx.txt", path: "/exmaples/sidebars/sidebar-08/index.tsx.txt" },
		{ name: "sidebar-09/components/app-sidebar", value: "sidebar-09/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-09/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-09/components/nav-user", value: "sidebar-09/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-09/components/nav-user.tsx.txt" },
		{ name: "sidebar-09/index", value: "sidebar-09/index.tsx.txt", path: "/exmaples/sidebars/sidebar-09/index.tsx.txt" },
		{ name: "sidebar-10/components/app-sidebar", value: "sidebar-10/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-10/components/nav-actions", value: "sidebar-10/components/nav-actions.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/nav-actions.tsx.txt" },
		{ name: "sidebar-10/components/nav-favorites", value: "sidebar-10/components/nav-favorites.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/nav-favorites.tsx.txt" },
		{ name: "sidebar-10/components/nav-main", value: "sidebar-10/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/nav-main.tsx.txt" },
		{ name: "sidebar-10/components/nav-secondary", value: "sidebar-10/components/nav-secondary.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/nav-secondary.tsx.txt" },
		{ name: "sidebar-10/components/nav-workspaces", value: "sidebar-10/components/nav-workspaces.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/nav-workspaces.tsx.txt" },
		{ name: "sidebar-10/components/team-switcher", value: "sidebar-10/components/team-switcher.tsx.txt", path: "/exmaples/sidebars/sidebar-10/components/team-switcher.tsx.txt" },
		{ name: "sidebar-10/index", value: "sidebar-10/index.tsx.txt", path: "/exmaples/sidebars/sidebar-10/index.tsx.txt" },
		{ name: "sidebar-11/components/app-sidebar", value: "sidebar-11/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-11/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-11/index", value: "sidebar-11/index.tsx.txt", path: "/exmaples/sidebars/sidebar-11/index.tsx.txt" },
		{ name: "sidebar-12/components/app-sidebar", value: "sidebar-12/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-12/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-12/components/calendars", value: "sidebar-12/components/calendars.tsx.txt", path: "/exmaples/sidebars/sidebar-12/components/calendars.tsx.txt" },
		{ name: "sidebar-12/components/date-picker", value: "sidebar-12/components/date-picker.tsx.txt", path: "/exmaples/sidebars/sidebar-12/components/date-picker.tsx.txt" },
		{ name: "sidebar-12/components/nav-user", value: "sidebar-12/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-12/components/nav-user.tsx.txt" },
		{ name: "sidebar-12/index", value: "sidebar-12/index.tsx.txt", path: "/exmaples/sidebars/sidebar-12/index.tsx.txt" },
		{ name: "sidebar-13/components/settings-dialog", value: "sidebar-13/components/settings-dialog.tsx.txt", path: "/exmaples/sidebars/sidebar-13/components/settings-dialog.tsx.txt" },
		{ name: "sidebar-13/index", value: "sidebar-13/index.tsx.txt", path: "/exmaples/sidebars/sidebar-13/index.tsx.txt" },
		{ name: "sidebar-14/componentsapp-sidebar", value: "sidebar-14/componentsapp-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-14/componentsapp-sidebar.tsx.txt" },
		{ name: "sidebar-14/index", value: "sidebar-14/index.tsx.txt", path: "/exmaples/sidebars/sidebar-14/index.tsx.txt" },
		{ name: "sidebar-15/components/calendars", value: "sidebar-15/components/calendars.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/calendars.tsx.txt" },
		{ name: "sidebar-15/components/date-picker", value: "sidebar-15/components/date-picker.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/date-picker.tsx.txt" },
		{ name: "sidebar-15/components/nav-favorites", value: "sidebar-15/components/nav-favorites.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/nav-favorites.tsx.txt" },
		{ name: "sidebar-15/components/nav-main", value: "sidebar-15/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/nav-main.tsx.txt" },
		{ name: "sidebar-15/components/nav-secondary", value: "sidebar-15/components/nav-secondary.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/nav-secondary.tsx.txt" },
		{ name: "sidebar-15/components/nav-user", value: "sidebar-15/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/nav-user.tsx.txt" },
		{ name: "sidebar-15/components/nav-workspaces", value: "sidebar-15/components/nav-workspaces.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/nav-workspaces.tsx.txt" },
		{ name: "sidebar-15/components/sidebar-left", value: "sidebar-15/components/sidebar-left.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/sidebar-left.tsx.txt" },
		{ name: "sidebar-15/components/sidebar-right", value: "sidebar-15/components/sidebar-right.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/sidebar-right.tsx.txt" },
		{ name: "sidebar-15/components/team-switcher", value: "sidebar-15/components/team-switcher.tsx.txt", path: "/exmaples/sidebars/sidebar-15/components/team-switcher.tsx.txt" },
		{ name: "sidebar-15/index", value: "sidebar-15/index.tsx.txt", path: "/exmaples/sidebars/sidebar-15/index.tsx.txt" },
		{ name: "sidebar-16/components/app-sidebar", value: "sidebar-16/components/app-sidebar.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/app-sidebar.tsx.txt" },
		{ name: "sidebar-16/components/nav-main", value: "sidebar-16/components/nav-main.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/nav-main.tsx.txt" },
		{ name: "sidebar-16/components/nav-projects", value: "sidebar-16/components/nav-projects.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/nav-projects.tsx.txt" },
		{ name: "sidebar-16/components/nav-secondary", value: "sidebar-16/components/nav-secondary.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/nav-secondary.tsx.txt" },
		{ name: "sidebar-16/components/nav-user", value: "sidebar-16/components/nav-user.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/nav-user.tsx.txt" },
		{ name: "sidebar-16/components/search-form", value: "sidebar-16/components/search-form.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/search-form.tsx.txt" },
		{ name: "sidebar-16/components/site-header", value: "sidebar-16/components/site-header.tsx.txt", path: "/exmaples/sidebars/sidebar-16/components/site-header.tsx.txt" },
		{ name: "sidebar-16/index", value: "sidebar-16/index.tsx.txt", path: "/exmaples/sidebars/sidebar-16/index.tsx.txt" },
		{ name: "Corrected shadCN Sidebar Function", value: "correctedSidebarFunction", path: "/exmaples/sidebars/correctedSidebarFunction.tsx.txt" },
		{ name: "current SB Route", value: "currentFavRoute", path: "/exmaples/sidebars/currentFavRoute.tsx.txt" },
		{ name: "current Sb", value: "currentFavSb", path: "/exmaples/sidebars/currentFavSb.tsx.txt" },
	];
	


	let viewSelected;
	switch (name) {
		case "sidebar-01/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-01/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-01/components/search-form.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-01/components/search-form.tsx.txt" />;
			break;
		case "sidebar-01/components/version-switcher.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-01/components/version-switcher.tsx.txt" />;
			break;
		case "sidebar-01/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-01/index.tsx.txt" />;
			break;
		case "sidebar-02/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-02/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-02/components/search-form.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-02/components/search-form.tsx.txt" />;
			break;
		case "sidebar-02/components/version-switcher.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-02/components/version-switcher.tsx.txt" />;
			break;
		case "sidebar-02/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-02/index.tsx.txt" />;
			break;
		case "sidebar-03/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-03/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-03/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-03/index.tsx.txt" />;
			break;
		case "sidebar-04/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-04/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-04/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-04/index.tsx.txt" />;
			break;
		case "sidebar-05/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-05/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-05/components/search-form.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-05/components/search-form.tsx.txt" />;
			break;
		case "sidebar-05/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-05/index.tsx.txt" />;
			break;
		case "sidebar-06/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-06/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-06/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-06/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-06/components/sidebar-opt-in-form.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-06/components/sidebar-opt-in-form.tsx.txt" />;
			break;
		case "sidebar-06/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-06/index.tsx.txt" />;
			break;
		case "sidebar-07/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-07/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-07/components/nav-projects.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/components/nav-projects.tsx.txt" />;
			break;
		case "sidebar-07/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-07/components/team-switcher.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/components/team-switcher.tsx.txt" />;
			break;
		case "sidebar-07/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-07/index.tsx.txt" />;
			break;
		case "sidebar-08/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-08/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-08/components/nav-projects.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/components/nav-projects.tsx.txt" />;
			break;
		case "sidebar-08/components/nav-secondary.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/components/nav-secondary.tsx.txt" />;
			break;
		case "sidebar-08/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-08/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-08/index.tsx.txt" />;
			break;
		case "sidebar-09/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-09/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-09/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-09/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-09/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-09/index.tsx.txt" />;
			break;
		case "sidebar-10/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-10/components/nav-actions.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/nav-actions.tsx.txt" />;
			break;
		case "sidebar-10/components/nav-favorites.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/nav-favorites.tsx.txt" />;
			break;
		case "sidebar-10/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-10/components/nav-secondary.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/nav-secondary.tsx.txt" />;
			break;
		case "sidebar-10/components/nav-workspaces.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/nav-workspaces.tsx.txt" />;
			break;
		case "sidebar-10/components/team-switcher.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/components/team-switcher.tsx.txt" />;
			break;
		case "sidebar-10/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-10/index.tsx.txt" />;
			break;
		case "sidebar-11/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-11/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-11/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-11/index.tsx.txt" />;
			break;
		case "sidebar-12/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-12/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-12/components/calendars.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-12/components/calendars.tsx.txt" />;
			break;
		case "sidebar-12/components/date-picker.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-12/components/date-picker.tsx.txt" />;
			break;
		case "sidebar-12/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-12/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-12/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-12/index.tsx.txt" />;
			break;
		case "sidebar-13/components/settings-dialog.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-13/components/settings-dialog.tsx.txt" />;
			break;
		case "sidebar-13/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-13/index.tsx.txt" />;
			break;
		case "sidebar-14/componentsapp-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-14/componentsapp-sidebar.tsx.txt" />;
			break;
		case "sidebar-14/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-14/index.tsx.txt" />;
			break;
		case "sidebar-15/components/calendars.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/calendars.tsx.txt" />;
			break;
		case "sidebar-15/components/date-picker.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/date-picker.tsx.txt" />;
			break;
		case "sidebar-15/components/nav-favorites.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/nav-favorites.tsx.txt" />;
			break;
		case "sidebar-15/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-15/components/nav-secondary.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/nav-secondary.tsx.txt" />;
			break;
		case "sidebar-15/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-15/components/nav-workspaces.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/nav-workspaces.tsx.txt" />;
			break;
		case "sidebar-15/components/sidebar-left.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/sidebar-left.tsx.txt" />;
			break;
		case "sidebar-15/components/sidebar-right.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/sidebar-right.tsx.txt" />;
			break;
		case "sidebar-15/components/team-switcher.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/components/team-switcher.tsx.txt" />;
			break;
		case "sidebar-15/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-15/index.tsx.txt" />;
			break;
		case "sidebar-16/components/app-sidebar.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/app-sidebar.tsx.txt" />;
			break;
		case "sidebar-16/components/nav-main.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/nav-main.tsx.txt" />;
			break;
		case "sidebar-16/components/nav-projects.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/nav-projects.tsx.txt" />;
			break;
		case "sidebar-16/components/nav-secondary.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/nav-secondary.tsx.txt" />;
			break;
		case "sidebar-16/components/nav-user.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/nav-user.tsx.txt" />;
			break;
		case "sidebar-16/components/search-form.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/search-form.tsx.txt" />;
			break;
		case "sidebar-16/components/site-header.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/components/site-header.tsx.txt" />;
			break;
		case "sidebar-16/index.tsx.txt":
			viewSelect = <Scaffolding title="sidebar-16/index.tsx.txt" />;
			break;
				case "correctedSidebarFunction":
			viewSelect = <Scaffolding title="correctedSidebarFunction" />;
			break;
				case "currentFavRoute":
			viewSelect = <Scaffolding title="currentFavRoute" />;
			break;
				case "currentFavSb":
			viewSelect = <Scaffolding title="currentFavSb" />;
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
