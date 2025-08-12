import { cn } from "~/components/ui/utils"


export  function BentoSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}



type BentoItem = {
  title: string
  description: string
  imageUrl: string
  layout: 'full' | 'half' | 'third'
  position?: 'left' | 'right' | 'middle'
  hasCodeExample?: boolean
}

type BentoSectionProps = {
  heading: string
  subheading: string
  items: BentoItem[]
  className?: string
}

export function BentoSection2({ heading, subheading, items, className }: BentoSectionProps) {
  return (
    <div className={cn("bg-gray-50 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">{subheading}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          {heading}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {items.map((item, index) => (
            <BentoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BentoCard({ item }: { item: BentoItem }) {
  const positionClasses = {
    left: 'lg:rounded-l-4xl',
    right: 'lg:rounded-r-4xl',
    middle: '',
  }

  const layoutClasses = {
    full: 'lg:col-span-3',
    half: 'lg:col-span-2',
    third: '',
  }

  const rowSpanClasses = {
    full: 'lg:row-span-2',
    half: '',
    third: '',
  }

  return (
    <div
      className={cn(
        "relative",
        item.layout === 'full' ? 'lg:row-span-2' : '',
        item.position === 'left' ? 'lg:col-start-1' : '',
        item.position === 'middle' ? 'lg:col-start-2' : '',
        item.position === 'right' ? 'lg:col-start-3' : ''
      )}
    >
      <div className={cn(
        "absolute inset-px rounded-lg bg-white",
        positionClasses[item.position || 'middle'],
        item.layout === 'full' ? 'max-lg:rounded-4xl' : '',
        item.position === 'left' ? 'max-lg:rounded-l-4xl' : '',
        item.position === 'right' ? 'max-lg:rounded-r-4xl' : ''
      )} />
      <div className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]",
        item.position === 'left' ? 'lg:rounded-l-[calc(2rem+1px)]' : '',
        item.position === 'right' ? 'lg:rounded-r-[calc(2rem+1px)]' : '',
        item.layout === 'full' ? 'max-lg:rounded-[calc(2rem+1px)]' : ''
      )}>
        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
            {item.title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
            {item.description}
          </p>
        </div>
        <div className={cn(
          "relative w-full grow",
          item.layout === 'full' ? "min-h-120 max-lg:mx-auto max-lg:max-w-sm" : "",
          item.hasCodeExample ? "min-h-120" : "flex items-center justify-center"
        )}>
          {item.hasCodeExample ? (
            <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
              <div className="flex bg-gray-900 outline outline-white/5">
                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                    NotificationSetting.jsx
                  </div>
                  <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                </div>
              </div>
              <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
            </div>
          ) : item.layout === 'full' ? (
            <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                alt=""
                src={item.imageUrl}
                className="size-full object-cover object-top"
              />
            </div>
          ) : (
            <img
              alt=""
              src={item.imageUrl}
              className={cn(
                "object-cover",
                item.layout === 'half' ? "w-full max-lg:max-w-xs" : "h-[min(152px,40cqw)]"
              )}
            />
          )}
        </div>
      </div>
      <div className={cn(
        "pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5",
        positionClasses[item.position || 'middle'],
        item.layout === 'full' ? 'max-lg:rounded-4xl' : '',
        item.position === 'left' ? 'max-lg:rounded-l-4xl' : '',
        item.position === 'right' ? 'max-lg:rounded-r-4xl' : ''
      )} />
    </div>
  )
}

// how to use 
// import { BentoSection } from "./components/bento-section"

export function BentoDemo() {
  const bentoItems = [
    {
      title: "Mobile friendly",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      imageUrl: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      layout: "full",
      position: "left"
    },
    {
      title: "Performance",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
      imageUrl: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png",
      layout: "third",
      position: "middle"
    },
    {
      title: "Security",
      description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
      imageUrl: "https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png",
      layout: "third"
    },
    {
      title: "Powerful APIs",
      description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
      imageUrl: "",
      layout: "full",
      position: "right",
      hasCodeExample: true
    }
  ]

  return (
    <BentoSection
      heading="Everything you need to deploy your app"
      subheading="Deploy faster"
      items={bentoItems}
    />
  )
}