
import { Mail, } from "./components/mail";
import { accounts, mails, } from "./data";
import Sidebar9 from "~/components/blocks/sidebars/sidebar-09";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "~/components/ui/tabs";


export default function MailPage() {
  const layout = null
  const collapsed = null

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className="flex-col md:flex mt-5">
        <Tabs defaultValue="Mail 01">
  <TabsList>
    <TabsTrigger value="Mail 01">Mail 01</TabsTrigger>
    <TabsTrigger value="Mail 02">Mail 02</TabsTrigger>
  </TabsList>
  <TabsContent value="Mail 01">
    <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
  </TabsContent>
  <TabsContent value="Mail 02">
    <Sidebar9 />
  </TabsContent>
</Tabs>
      </div>
    </>
  )
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Mail - 8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};
export async function loader({ request }: LoaderArgs) {
  return null
}