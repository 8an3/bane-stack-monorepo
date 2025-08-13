import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger, useSidebar } from "~/components/ui/sidebar";
import { GalleryVerticalEnd, Zap } from "lucide-react";
import eP from "~/utils/ext";
import { SiteHeader } from "~/components/site/site-header";
import { NavMain } from "~/components/customUi/nav-main";
import { NavUser } from "~/components/customUi/nav-user";

export const navItems = {
	navMain: [
		{
			title: "Portal",
			url: "#",
			items: [
				{
					title: "Dashboard",
					url: "/portal/dashboard",
				},
				{
					title: "Template",
					url: "/portal/template",
				},
			],
		},
		{
			title: "Blocks",
			url: "#",
			items: [
				{
					title: "Authentication",
					url: "/blocks/examples/authentication",
				},
				{
					title: "Cards",
					url: "/blocks/examples/cards",
				},
				{
					title: "Dashboard",
					url: "/blocks/examples/dashboard",
				},
				{
					title: "E-Commerce",
					url: "/blocks/examples/ecommerce",
				},
				{
					title: "Forms",
					url: "/blocks/examples/forms",
				},
				{
					title: "Mail",
					url: "/blocks/examples/mail",
				},
				{
					title: "Music",
					url: "/blocks/examples/music",
				},
				{
					title: "Playground",
					url: "/blocks/examples/playground",
				},
				{
					title: "Products",
					url: "/blocks/examples/products",
				},
				{
					title: "Sections",
					url: "/blocks/examples/sections/viewer",
				},
				{
					title: "Tasks",
					url: "/blocks/examples/tasks",
				},
				{
					title: "Tickets",
					url: "/blocks/tickets",
				},
			],
		},
		{
			title: "Sidebars",
			url: "#",
			items: [
				{
					title: "Featured",
					url: "/blocks/sidebar/one",
				},
			],
		},
		{
			title: "Auth",
			url: "#",
			items: [
				{
					title: "Login",
					url: "/login",
				},
				{
					title: "Logout",
					url: "/logout",
				},
			],
		},
	],
	navLocation: [
		// parent store
		{
			name: "Bane",
			address: "Acme Inc",
			postal: "Acme Inc",
			prov: "Acme Inc",
			country: "Acme Inc",
			phone: "Acme Inc",
			logo: GalleryVerticalEnd,
		},
		// map through stores
		{
			name: "Acme Inc",
			address: "Acme Inc",
			postal: "Acme Inc",
			prov: "Acme Inc",
			country: "Acme Inc",
			phone: "Acme Inc",
			logo: GalleryVerticalEnd,
		},
	],
};

export async function loader({ request, params }: LoaderFunction) {
	/**const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	const email = session.get("email");
	const user = await eP.user.all(email)
	if (!user) return redirect(import.meta.env.LOGIN) */
	//	const s = eP.parentStore.one()
	return null;
}
export default function ProviderRoute() {
	//	const { navItems } = useLoaderData()
	return (
		<div className="bg-[#11827] w-[100vw] h-[100vh] overflow-hidden">
			<SidebarProvider>
				<AppSidebar variant="inset" data={navItems} />
				<SidebarInset>
			<div className={`${open ? "" : ""}`}>
				<SiteHeader />
				<div className="flex flex-1 flex-col m-3">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<Outlet />
					</div>
				</div>
			</div>
		</SidebarInset>
			</SidebarProvider>
		</div>
	);
}

export function AppSidebar({ data, ...props }: React.ComponentProps<typeof Sidebar>) {
	const user = {
		name: "8an3/ban3",
		email: "skylerzanth@gmail.com",
		website: "https://catalyst-software.vercel.app/DevStack/home",
		avatar: "/avatars/shadcn.jpg",
	};
	return (
		<Sidebar collapsible="offcanvas" className="-ml-2 w-[16rem]" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
							<NavLink href="/">
								<Zap className="!size-5 text-primary" />
								<span className="text-base font-semibold">8an3/Bane</span>
							</NavLink>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="">
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
