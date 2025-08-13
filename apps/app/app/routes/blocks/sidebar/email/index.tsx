import { AppSidebar, } from "./app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "~/components/ui/breadcrumb";
import { Separator, } from "~/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger, } from "~/components/ui/sidebar";
import { useEffect, useState, } from "react";
import MonacoEditor from "../../examples/editor/components2";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
         <DefaultPage />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



export  function DefaultPage() {
    const [selectedCode, setSelectedCode] = useState("");
    const [name, setName] = useState("AccountForm");

    const sections = [{ name: "AccountForm", value: "AccountForm", path: "/examples/forms/account/account-form.tsx.txt" }];
    let viewSelected;
    switch (name) {
        case "AccountForm":
            viewSelected = <AccountForm />;
            break;
    }
    useEffect(() => {
        if (!selectedCode) return;

        const loadHookCode = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const codeContent = await response.text();
                setSelectedCode(codeContent);
            } catch (error) {
                console.error(`Failed to load ${url}:`, error);
                setSelectedCode(`// Failed to load ${url}\n// Error: ${error.message}`);
            }
        };

        loadHookCode(selectedCode);
    }, [selectedCode]);
    return (
        <div className="flex flex-col justify-center gap-4">
            <MonacoEditor viewSelected={viewSelected} code={selectedCode} sections={sections} setName={setName} name={name} />
        </div>
    );
}

