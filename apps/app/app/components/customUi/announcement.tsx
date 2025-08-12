import { NavLink } from "@remix-run/react";
import { ArrowRightIcon, } from "lucide-react";

import { Badge, } from "~/components/ui/badge";

export function Announcement({
  announcement='',
  link='#',
}) {
  return (
    <Badge asChild variant="secondary" className="rounded-full">
      <NavLink to={link} className='flex items-center gap-3'>
        <span>{announcement}</span> <ArrowRightIcon />
      </NavLink>
    </Badge>
  )
}
