import { useState, } from 'react';
import { Sheet, SheetContent, SheetTrigger, } from '~/components/ui/sheet';
import { Button, } from '~/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from '~/components/ui/navigation-menu';
import { ChevronDown, Phone, Play, Menu, X, BarChart3, MousePointer, Shield, Grid3X3, RefreshCw, } from 'lucide-react';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: BarChart3 },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: MousePointer },
  { name: 'Security', description: 'Your customers\' data will be safe and secure', href: '#', icon: Shield },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: Grid3X3 },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: RefreshCw },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: Play },
  { name: 'Contact sales', href: '#', icon: Phone },
]

export   function HeadersSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="-m-2.5 p-2.5">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex items-center justify-between mb-6">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              
              <div className="flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-base font-semibold">
                        Product
                        <ChevronDown className="ml-auto h-5 w-5" />
                      </Button>
                      <div className="pl-4 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 px-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-semibold text-gray-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-screen max-w-md p-4 bg-white rounded-lg shadow-lg">
                  <div className="space-y-1">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 mt-4 rounded-lg">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 first:rounded-l-lg last:rounded-r-lg"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#" 
                className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#" 
                className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              >
                Marketplace
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#" 
                className="text-sm font-semibold text-gray-900 hover:text-gray-700"
              >
                Company
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-700">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  )
}