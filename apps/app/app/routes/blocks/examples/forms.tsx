import { Separator } from "~/components/ui/separator";
import { SidebarNav } from "./forms/components/sidebar-nav";
import { NavLink, Outlet } from "@remix-run/react";

const sidebarNavItems = [
	{
		title: "Profile",
		href: "/blocks/examples/forms/profile",
	},
	{
		title: "Account",
		href: "/blocks/examples/forms/account",
	},
	{
		title: "Appearance",
		href: "/blocks/examples/forms/appearance",
	},
	{
		title: "Notifications",
		href: "/blocks/examples/forms/notifications",
	},
	{
		title: "Display",
		href: "/blocks/examples/forms/display",
	},
];

interface SettingsLayoutProps {
	children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<>
			<div className="space-y-6 p-10 pb-16">
				<div className="space-y-0.5">
					<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
					<NavLink to="/blocks/examples/editor/components" className=" font-medium transition-colors hover:text-primary text-muted-foreground mx-auto">
						If you need the sidebar click here, then search for 'Forms - sidebar nav'
					</NavLink>
					<p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
				</div>
				<Separator className="my-6" />
				<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
					<aside className="-mx-4 lg:w-1/5">
						<SidebarNav items={sidebarNavItems} />
					</aside>
					<div className="flex-1 w-full">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
export const meta: MetaFunction = () => {
	return [{ title: "Forms - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};

export async function loader({ request }: LoaderArgs) {
	return null;
}
