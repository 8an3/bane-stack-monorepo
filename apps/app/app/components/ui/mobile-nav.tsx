
import React, { useState } from "react"
import { cn } from "./utils"
import { Button } from "~/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, } from "~/components/ui/drawer"
import { NavLink } from "@remix-run/react"
import { docsConfig } from "~/routes"
import { HomeExamples } from "./examples-nav"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='mx-auto max-w-[361px] outline-none h-auto h-full rounded-[36px] rounded-b-[36px] mb-4 overflow-hidden h-[540px]'>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className='text-center mt-5'>Catalyst CRM</DrawerTitle>
            <DrawerDescription></DrawerDescription>
            <div className="grid grid-cols-1 justify-center space-y-3">
              {docsConfig.mainNav?.map(
                (item) =>
                  item.href && (
                    <MobileLink
                      className='mx-auto text-muted-foreground'
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                    >
                      {item.title}
                    </MobileLink>
                  )
              )}
            </div>
            <DrawerTitle className='text-center mt-5 mb-2'>The Pitch</DrawerTitle>
            <div className="grid grid-cols-1 justify-center space-y-3">
              {HomeExamples?.map(
                (item) =>
                  item.href && (
                    <MobileLink
                      className='mx-auto text-muted-foreground'
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                    >
                      {item.title}
                    </MobileLink>
                  )
              )}
            </div>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <NavLink
      to={href}
      onClick={() => {
        setOpen(false)
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </NavLink>
  )
}
