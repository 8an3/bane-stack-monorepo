import { NavLink } from "@remix-run/react";
import { ArrowRightIcon, } from "lucide-react";

import { Badge, } from "~/components/ui/badge";

export function Announcement({
  announcement='',
  link='#',
  variant="secondary"
}) {
  return (
    <Badge asChild variant={variant} className="rounded-full w-auto">
      <NavLink to={link} className='flex items-center gap-3'>
        <span>{announcement}</span> <ArrowRightIcon />
      </NavLink>
    </Badge>
  )
}
