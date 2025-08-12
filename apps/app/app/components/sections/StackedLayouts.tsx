import { Menu, Bell, X, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "~/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/utils"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export function StackedLayoutsSection() {
  return (
    <div className="min-h-full">
      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  alt="Your Company"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="size-8"
                />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavigationMenu className="ml-10">
                  <NavigationMenuList className="space-x-4">
                    {navigation.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            item.current 
                              ? 'bg-gray-900 text-white' 
                              : 'text-gray-300 hover:bg-white/5 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Desktop User Menu */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white">
                  <span className="sr-only">View notifications</span>
                  <Bell className="size-6" />
                </Button>

                {/* Profile dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative size-8 rounded-full p-0">
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="size-8 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48" align="end">
                    {userNavigation.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <a href={item.href} className="w-full">
                          {item.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    <Menu className="block size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-800 p-0">
                  <div className="flex h-full flex-col">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={cn(
                            item.current 
                              ? 'bg-gray-900 text-white' 
                              : 'text-gray-300 hover:bg-white/5 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-white/10 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="shrink-0">
                          <img
                            alt=""
                            src={user.imageUrl}
                            className="size-10 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium text-white">{user.name}</div>
                          <div className="text-sm font-medium text-gray-400">{user.email}</div>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-auto text-gray-400 hover:text-white">
                          <span className="sr-only">View notifications</span>
                          <Bell className="size-6" />
                        </Button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Content</h1>

        </div>
      </main>
    </div>
  )
}