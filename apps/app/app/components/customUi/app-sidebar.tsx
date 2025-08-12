import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "~/components/ui/collapsible"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, } from "~/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { NavLink } from "@remix-run/react"
import { NavMain } from "~/components/ui/sidebar/nav-main"
import { NavProjects } from "~/components/ui/sidebar/nav-projects"

export function AppSidebar({ data, user, URLS, ...props }: React.ComponentProps<typeof Sidebar>) {

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <TeamSwitcher items={data.navLocation} />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                <NavMain items={data.navMain} />
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}