
import { cn } from "~/components/ui/utils"

import { DemoCookieSettings } from "./components/cookie-settings"
import { DemoCreateAccount } from "./components/create-account"
import { DemoDatePicker } from "./components/date-picker"
import { DemoGithub } from "./components/github-card"
import { DemoNotifications } from "./components/notifications"
import { DemoPaymentMethod } from "./components/payment-method"
import { DemoReportAnIssue } from "./components/report-an-issue"
import { DemoShareDocument } from "./components/share-document"
import { DemoTeamMembers } from "./components/team-members"
import CardsDemo2 from "../cards2"
import { NavLink } from "@remix-run/react"

export const meta: MetaFunction = () => {
	return [
		{ title: "Cards - 8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function CardsPage() {
  return (
    <div className="flex flex-col justify-center mt-[25px] gap-[25px]">
          <NavLink to="/blocks/examples/editor/components" className=" font-medium transition-colors hover:text-primary text-muted-foreground mx-auto"  >
        To get the code for this page click here, then search for cards
      </NavLink>
    <CardsDemo2 />
      <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </div>
  )
}

export async function loader({ request }: LoaderArgs) {
  return null
}