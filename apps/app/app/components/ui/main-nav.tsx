import { cn } from "./utils"
import { NavLink, useLocation } from "@remix-run/react"

export function MainNav() {
  const location = useLocation()
  const pathname = location.pathname

  return (
<div className="mr-4 hidden md:flex justify-between items-center w-full">
  <NavLink  prefetch="intent" to="/items/home" className="mr-4 flex items-center gap-2 lg:mr-6 flex-shrink-0">
    <span className="hidden font-bold lg:inline-block">Catalyst CRM</span>
  </NavLink>
  <div className="flex items-center gap-4 text-sm xl:gap-6 flex-shrink-0">
     <NavLink  prefetch="intent" to="/items/mission" className="transition-colors hover:text-primary text-muted-foreground ">
    Mission
    </NavLink>
    <NavLink  prefetch="intent" to="/items/contact" className="transition-colors hover:text-primary text-muted-foreground ">
      Request Demo
    </NavLink>
    <NavLink  prefetch="intent" to="/items/contact" className="transition-colors hover:text-primary text-muted-foreground ">
      Contact Sales
    </NavLink>
    <NavLink prefetch="intent" to="/items/pricing" className="transition-colors hover:text-primary text-muted-foreground ">
      Pricing
    </NavLink>
    <NavLink  prefetch="intent" to="/authportal/auth/login" className="transition-colors hover:text-primary text-muted-foreground ">
      Login
    </NavLink>
  </div>
</div>
  
  )
}
