import { useLocation, useNavigation, } from "@remix-run/react"
import { ButtonNL } from "./button-loading"
import { cn } from "./utils"

export const HomeExamples = [
  {
    name: "The Advantage",
    title: "The Advantage",
    to: "/items/advantage",
    href: "/items/advantage",
    hidden: false,
  },
  {
    name: "Features",
    title: "Features",
    href: "/items/features",
    to: "/items/features",
    hidden: false,
  },
  { 
    name: "Pricing",
    title: "Pricing",
    to: "/items/pricing",
    href: "/items/pricing",
    hidden: false,
  },
  {
    name: "FAQ",
    title: "FAQ",
    to: "/items/faq",
    href: "/items/faq",
    hidden: false,
  },
 
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const location = useLocation();
  const pathname = location.pathname
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="relative">
      <div className="max-w-[600px] lg:max-w-none overflow-x-auto overflow-hidden">
        <div className={cn("flex items-center", className)} {...props}>
          <ExampleLink
            className=' text-muted-foreground hover:text-foreground'
            example={{ name: "Home", to: "/items/home", code: "", hidden: false }}
            isActive={pathname === "/items/home"}
            isSubmitting={isSubmitting}
          />
          {HomeExamples.map((example) => (
            <ExampleLink
              key={example.to}
              example={example}
              isSubmitting={isSubmitting}
              isActive={pathname?.startsWith(example.to) ?? false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ExampleLink({
  example,
  isActive,
  isSubmitting
}: {
  example: (typeof HomeExamples)[number]
  isActive: boolean
  isSubmitting: boolean
}) {
  if (example.hidden) {
    return null
  }


  return (
    <ButtonNL
      to={example.to}
      key={example.to}
      isSubmitting={isSubmitting}
      className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary hover:bg-transparent"
      data-active={isActive}
    >
      {example.name}
    </ButtonNL>
  )
}