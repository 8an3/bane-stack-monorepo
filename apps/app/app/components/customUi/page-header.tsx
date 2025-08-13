import React from "react";
import { cn } from "~/components/ui/utils";
import { NavButton } from "~/components/customUi/NavButton";
import { Announcement } from "./announcement";

export function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("flex justify-center min-h-[20vh] py-[100px] md:py-[100px] lg:py-[100px]", className)} {...props}>
      <div className="container-wrapper w-full">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">{children}</div>
      </div>
    </section>
  )
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn("text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]", className)} {...props} />
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-lg max-w-2xl text-balance font-light text-muted-foreground", className)} {...props} />
}

export function PageActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center justify-center gap-4 pt-6", className)} {...props} />
}

export function PageHeaderFunction({
  title = "8an3/Bane Remix Stack",
  description = "Pre-made components and page sections",
  announcement = "More content coming soon",
  aLink = "#",
  nav1 = "Blocks",
  nav1To = '/blocks/examples/ecommerce',
  nav2 = "Sidebar",
  nav2To = '/blocks/sidebar/one',
    nav3 = "Login",
  nav3To = '/login'
}) {
  return (
    <div className="flex  py-[75px]  ">
      <PageHeader>
        <Announcement announcement={announcement} link={aLink} />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <NavButton variant='outline' to={nav1To} className='text-muted-foreground'>{nav1}</NavButton>
          <NavButton variant='outline' to={nav2To} className='text-muted-foreground'>{nav2}</NavButton>
          <NavButton variant='outline' to={nav3To} className='text-muted-foreground'>{nav3}</NavButton>
        </PageActions>
      </PageHeader>
    </div>
  )
}