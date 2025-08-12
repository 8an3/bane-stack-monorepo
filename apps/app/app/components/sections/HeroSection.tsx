import { cn } from "~/components/ui/utils";
import { Button } from "~/components/ui/button"

export   function HeroSection({ 
  title= "Theme Builder" ,
   desc ="Build VSCode themes visually without hunting down property names. Because life's too short for endless documentation searches.",
    className = `text-foreground bg-background`,
     className2 = `text-muted-foreground `
     }) {
    return (
        <div className="sticky top-0 z-10 bg-background backdrop-blur supports-[backdrop-filter]:bg-background pb-4 pt-8">
            <div className="text-center">
                <h2 className={cn("text-2xl md:text-3xl font-bold mb-4 text-foreground", className)}>
                    {title}
                </h2>
                <p className={cn("max-w-3xl mx-auto leading-relaxed", className2)}>
                    {desc}
                </p>
            </div>
        </div>
    )
}
 


export   function HeroStatsSection({
  title = "Work with us",
  description = "Join our team and help build the future of technology. We're looking for passionate individuals to grow with our company.",
  backgroundImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
  links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ],
  stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ],
  showGradients = true,
  className,
  titleClassName,
  descriptionClassName,
  statsClassName,
  linksClassName
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", className)}>
      {/* Background Image */}
      {backgroundImage && (
        <img
          alt=""
          src={backgroundImage}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
      )}
      
      {/* Gradient Overlays */}
      {showGradients && (
        <>
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:ml-16 sm:translate-x-0"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
        </>
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Content */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className={cn(
            "text-5xl font-semibold tracking-tight text-white sm:text-7xl", 
            titleClassName
          )}>
            {title}
          </h1>
          <p className={cn(
            "mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8", 
            descriptionClassName
          )}>
            {description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* Links */}
          {links && links.length > 0 && (
            <div className={cn(
              "grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10",
              linksClassName
            )}>
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <dl className={cn(
              "mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4",
              statsClassName
            )}>
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  )
}

// Variant for CTA-focused hero (no stats, more CTAs)
export function HeroCTASection({
  title = "Ready to get started?",
  description = "Join thousands of companies that trust our platform to power their business growth.",
  backgroundImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply",
  primaryCTA = { text: "Get Started", href: "#" },
  secondaryCTA = { text: "Learn More", href: "#" },
  features = [
    "14-day free trial",
    "No credit card required", 
    "Cancel anytime",
    "24/7 support"
  ],
  showGradients = true,
  className,
  titleClassName,
  descriptionClassName
}) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32", className)}>
      {/* Background Image */}
      {backgroundImage && (
        <img
          alt=""
          src={backgroundImage}
          className="absolute inset-0 -z-10 size-full object-cover object-center"
        />
      )}
      
      {/* Gradient Overlays */}
      {showGradients && (
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
          />
        </div>
      )}

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <h1 className={cn(
          "text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6", 
          titleClassName
        )}>
          {title}
        </h1>
        <p className={cn(
          "text-lg text-gray-300 mb-10 max-w-2xl mx-auto", 
          descriptionClassName
        )}>
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <a href={primaryCTA.href}>{primaryCTA.text}</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
            <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
          </Button>
        </div>

        {/* Feature List */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {features.map((feature, idx) => (
              <div key={feature} className="flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}





