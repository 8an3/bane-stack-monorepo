import { NavLink, useNavigation } from "@remix-run/react";
import { cn, } from "~/components/ui/utils";
import { ScrollArea, ScrollBar, } from "~/components/ui/scroll-area";

const examples = [
      {
    name: "Authentication",
    href: "/blocks/examples/authentication",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },
      {
    name: "Cards",
    href: "/blocks/examples/cards",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },
  {
    name: "Dashboard",
    href: "/blocks/examples/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
    hidden: false,
  },
    {
    name: "E-Commerce",
    href: "/blocks/examples/ecommerce",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/dashboard",
    hidden: false,
  },
      {
    name: "Forms",
    href: "/blocks/examples/forms/profile",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },
   {
    name: "Mail",
    href: "/blocks/examples/mail",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },
     {
    name: "Music",
    href: "/blocks/examples/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/authentication",
    hidden: false,
  },

  {
    name: "Playground",
    href: "/blocks/examples/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
    hidden: false,
  },
    {
    name: "Products",
    href: "/blocks/examples/products/table",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
    hidden: false,
  },
    {
    name: "Sections",
    href: "/blocks/examples/sections/viewer",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/playground",
    hidden: false,
  },
    {
    name: "Tasks",
    href: "/blocks/examples/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/v4/app/(app)/examples/tasks",
    hidden: false,
  },
]

export function ExamplesNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const nav = useNavigation()
  const pathname = nav.location?.pathname

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <ScrollArea className="max-w-[96%] md:max-w-[600px] lg:max-w-none">
        <div className="flex items-center">
          <ExampleLink
            example={{ name: "Examples", href: "/", code: "", hidden: false }}
            isActive={pathname === "/"}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function ExampleLink({
  example,
  isActive,
}: {
  example: (typeof examples)[number]
  isActive: boolean
}) {
  if (example.hidden) {
    return null
  }

  return (
    <NavLink
      to={example.href}
      key={example.href}
      className="text-muted-foreground hover:text-primary data-[active=true]:text-primary flex h-7 items-center justify-center px-4 text-center text-base font-medium transition-colors"
      data-active={isActive}
    >
      {example.name}
    </NavLink>
  )
}
