import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { SidebarTrigger } from "~/components/ui/sidebar"
import { Zap } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b border-border transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 mt-3">
                <SidebarTrigger className="-ml-5 -mt-3" />
                <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4  -mt-3" />
                <div className="ml-auto flex items-center gap-2">
                    <div className="flex items-center space-x-3 -mt-2 mb-2">
                        <span className="text-2xl font-bold text-muted-foreground ">
                           8an3/Bane
                        </span>
                        <div className="w-9 h-9 bg-transparent rounded-[0px] flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
