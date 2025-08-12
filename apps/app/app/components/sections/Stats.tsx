import { cn } from "~/components/ui/utils"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

export   function Stats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}




// Stats Section Component
export function StatsSection({
  stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ],
  title,
  subtitle,
  description,
  theme = "dark", // "dark" or "light"
  layout = "center", // "center" or "left"
  columns = 3, // 2, 3, or 4
  className,
  titleClassName,
  descriptionClassName,
  statsClassName,
  statClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Optional Header */}
        {(title || subtitle || description) && (
          <div className={cn(
            "mb-16",
            layout === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
          )}>
            {subtitle && (
              <p className={cn(
                "text-base font-semibold mb-2",
                isDark ? "text-primary" : "text-primary"
              )}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn(
                "text-3xl font-bold tracking-tight sm:text-4xl",
                isDark ? "text-white" : "text-foreground",
                titleClassName
              )}>
                {title}
              </h2>
            )}
            {description && (
              <p className={cn(
                "mt-4 text-lg",
                isDark ? "text-gray-300" : "text-muted-foreground",
                descriptionClassName
              )}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <dl className={cn(
          "grid grid-cols-1 gap-x-8 gap-y-16 text-center",
          columns === 2 ? "lg:grid-cols-2" : "",
          columns === 3 ? "lg:grid-cols-3" : "",
          columns === 4 ? "lg:grid-cols-4" : "",
          statsClassName
        )}>
          {stats.map((stat) => (
            <div key={stat.id} className={cn(
              "mx-auto flex max-w-xs flex-col gap-y-4",
              statClassName
            )}>
              <dt className={cn(
                "text-base/7",
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                {stat.name}
              </dt>
              <dd className={cn(
                "order-first text-3xl font-semibold tracking-tight sm:text-5xl",
                isDark ? "text-white" : "text-foreground"
              )}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

// Card variant for stats
export function StatsCardSection({
  stats = [
    { id: 1, name: 'Happy Customers', value: '10,000+', description: 'Businesses trust our platform' },
    { id: 2, name: 'Uptime', value: '99.9%', description: 'Reliable service guaranteed' },
    { id: 3, name: 'Countries', value: '50+', description: 'Global presence worldwide' },
  ],
  title = "Trusted by businesses worldwide",
  subtitle = "Our Impact",
  className,
  titleClassName
}) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight", titleClassName)}>
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.name}</div>
                {stat.description && (
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

