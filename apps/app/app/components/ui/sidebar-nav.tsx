
import { useLocation } from "@remix-run/react"
import { NavButton } from "./button-loading"
import { cn } from "./utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    to: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation()
  const path = location.pathname
  return (
    <nav
      className={cn(
        "flex space-x-2 flex-row max-w-[95%] lg:flex-col lg:space-x-0 lg:space-y-1 mt-3",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NavButton
          disabled={item.disabled || false}
          key={item.to}
          to={item.to}
          className={cn(
            "bg-muted after:bg-[#155dfc] relative rounded-md p-3 pl-6 text-sm cursor-pointer transition-colors after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full w-full",
            path === item.to ? "bg-background ring-2 ring-blue-200" : "hover:bg-background",
          )}
        >
          <p className='text-left justify-start'>{item.title}</p>
        </NavButton>
      ))}
    </nav>
  )
}
