import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from '~/components/ui/navigation-menu';
import { ChevronDown, Phone, Play, BarChart3, MousePointer, Shield, Grid3X3, RefreshCw, } from 'lucide-react';

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: BarChart3 },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: MousePointer },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: Shield },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: Grid3X3 },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: RefreshCw },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: Play },
  { name: 'Contact sales', href: '#', icon: Phone },
]

export   function FlyoutMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="inline-flex items-center gap-x-1 text-sm font-semibold text-gray-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            <span>Solutions</span>
            <ChevronDown aria-hidden="true" className="h-5 w-5" />
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="left-1/2 -translate-x-1/2">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm shadow-lg border border-gray-200">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div>
                      <a href={item.href} className="font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}