import { Briefcase, Calendar, Check, ChevronDown, DollarSign, Link, MapPin, Pencil, } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '~/components/ui/dropdown-menu';
import { Button, } from '~/components/ui/button';

export   function PageHeadingsSection() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-400">
            <Briefcase className="mr-1.5 size-5 shrink-0 text-gray-500" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-400">
            <MapPin className="mr-1.5 size-5 shrink-0 text-gray-500" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-400">
            <DollarSign className="mr-1.5 size-5 shrink-0 text-gray-500" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-400">
            <Calendar className="mr-1.5 size-5 shrink-0 text-gray-500" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
            <Pencil className="-ml-0.5 mr-1.5 size-5 text-white" />
            Edit
          </Button>
        </span>

        <span className="ml-3 hidden sm:block">
          <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
            <Link className="-ml-0.5 mr-1.5 size-5 text-white" />
            View
          </Button>
        </span>

        <span className="sm:ml-3">
          <Button className="bg-indigo-500 text-white hover:bg-indigo-400">
            <Check className="-ml-0.5 mr-1.5 size-5" />
            Publish
          </Button>
        </span>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="sm:hidden">
            <Button variant="ghost" className="ml-3 bg-white/10 text-white hover:bg-white/20">
              More
              <ChevronDown className="-mr-1 ml-1.5 size-5 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-24 bg-gray-800 outline outline-1 outline-white/10">
            <DropdownMenuItem className="text-gray-300 focus:bg-white/5">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 focus:bg-white/5">
              View
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}