
import { cn } from "~/components/ui/utils"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"

// Testimonial Section Component
export function TestimonialSection({
  testimonial = {
    quote: "This platform has completely transformed how we work. The ease of use and powerful features have made our team more productive than ever before.",
    author: {
      name: "Judith Black",
      title: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  logo = {
    src: "https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg",
    alt: "Company logo"
  },
  showBackground = true,
  theme = "light", // "light" or "dark"
  className,
  titleClassName,
  quoteClassName,
  authorClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      {/* Background Elements */}
      {showBackground && !isDark && (
        <>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-100),transparent)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl ring-1 shadow-primary/10 ring-border sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        </>
      )}
      
      {showBackground && isDark && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-primary-500),transparent)] opacity-10" />
      )}

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* Company Logo */}
        {logo && (
          <img
            alt={logo.alt}
            src={logo.src}
            className="mx-auto h-12"
          />
        )}
        
        <figure className="mt-10">
          {/* Quote */}
          <blockquote className={cn(
            "text-center text-xl/8 font-semibold sm:text-2xl/9",
            isDark ? "text-white" : "text-foreground",
            quoteClassName
          )}>
            <p>"{testimonial.quote}"</p>
          </blockquote>
          
          {/* Author */}
          <figcaption className="mt-10">
            {testimonial.author.image && (
              <img
                alt={`${testimonial.author.name} profile`}
                src={testimonial.author.image}
                className="mx-auto size-10 rounded-full"
              />
            )}
            <div className={cn(
              "mt-4 flex items-center justify-center space-x-3 text-base",
              authorClassName
            )}>
              <div className={cn(
                "font-semibold",
                isDark ? "text-white" : "text-foreground"
              )}>
                {testimonial.author.name}
              </div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className={cn(
                "fill-current",
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className={cn(
                isDark ? "text-gray-400" : "text-muted-foreground"
              )}>
                {testimonial.author.title}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

// Multi-testimonial grid variant
export function TestimonialsGridSection({
  title = "What our customers say",
  subtitle = "Testimonials",
  testimonials = [
    {
      id: 1,
      quote: "This platform has revolutionized our workflow. Highly recommended!",
      author: {
        name: "Sarah Johnson",
        title: "CTO at TechCorp",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 2,
      quote: "Outstanding support and incredible features. Our team loves it.",
      author: {
        name: "Mike Chen",
        title: "Product Manager at StartupXYZ",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      id: 3,
      quote: "The best investment we've made for our business operations.",
      author: {
        name: "Emily Davis",
        title: "Founder at GrowthCo",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ],
  className,
  titleClassName
}) {
  return (
    <section className={cn("py-16 lg:py-24 bg-muted/30", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h2 className={cn("text-3xl lg:text-4xl font-bold tracking-tight", titleClassName)}>
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <blockquote className="text-lg font-medium flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  {testimonial.author.image && (
                    <img
                      src={testimonial.author.image}
                      alt={`${testimonial.author.name} profile`}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.author.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}