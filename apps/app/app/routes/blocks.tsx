import { Outlet, useLoaderData } from "@remix-run/react";
import { Sidebar, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, useSidebar, SidebarMenuAction, SidebarFooter, SidebarHeader, SidebarContent, SidebarProvider, SidebarInset, } from "~/components/ui/sidebar";
import eP from '~/utils/ext';
import { useState } from "react";
import { SiteHeader } from "~/components/site/site-header";
import { AppSidebar, navItems } from "./portal";


export async function loader({ request, params }: LoaderFunction) {
	//const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	//const email = session.get("email");
	//const user = await eP.user.all(email)
	///if (!user) return redirect(import.meta.env.LOGIN)
 
	//const s = eP.parentStore.one()
 
	return null
}

export default function Quote() {
//	const { navItems } = useLoaderData()
	const [navData, setNavData] = useState(navItems)

	return (
			<SidebarProvider className="min-h-screen" defaultOpen={false}>
				<AppSidebar
					data={navData}
					variant="inset" />
				<SidebarInset>
					<div className='bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(100vh-54px)] flex-1 flex-col'>
						<SiteHeader />
						<div className="flex-1 ml-2 mr-2 mb-2 lg:mt-[25px] min-h-0 overflow-y-auto">
							<Outlet />
						</div>
					</div>
				</SidebarInset>
			</SidebarProvider>
	);
}

 
 
