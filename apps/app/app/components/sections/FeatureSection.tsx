import { cn } from "~/components/ui/utils"
import { CloudUpload, Lock, Server, Zap, Shield, BarChart3 } from "lucide-react"



export const FeatureSection = ({ title, items, className = "" }) => (
    <div className={`mb-8 ${className}`}>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <ul className="text-muted-foreground space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export function FeatureSectionDemo() {
  return(
    <FeatureSection
                        title="Files"
                        items={[
                            "Quick access to your most-used files.",
                            "Add files to custom folders and subfolders.",
                            "Edit display labels for files.",
                            "Remove files from the navigation pane.",
                            "Copy file paths with a single click.",
                            "Reveal files in your system’s file explorer.",
                            "Add multiple files to the quick access pane at once.",
                        ]}
                    />
  )
}

export   function FeaturesSection2({
  subtitle = "Deploy faster",
  title = "A better workflow",
  description = "Streamline your development process with our powerful tools designed to help teams ship faster and more reliably.",
  features = [
    {
      name: 'Push to deploy.',
      description: 'Deploy your applications instantly with our streamlined CI/CD pipeline. No complex configurations required.',
      icon: CloudUpload,
    },
    {
      name: 'SSL certificates.',
      description: 'Automatic SSL certificate provisioning and renewal keeps your applications secure without manual intervention.',
      icon: Lock,
    },
    {
      name: 'Database backups.',
      description: 'Automated daily backups with point-in-time recovery ensure your data is always protected and recoverable.',
      icon: Server,
    },
  ],
  image = {
    src: "https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png",
    alt: "Product screenshot",
    width: 2432,
    height: 1442
  },
  layout = "image-right", // "image-right", "image-left", "no-image"
  theme = "dark", // "dark" or "light"
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  featuresClassName,
  imageClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "overflow-hidden py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn(
          "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none",
          layout !== "no-image" ? "lg:grid-cols-2" : "lg:grid-cols-1",
          containerClassName
        )}>
          
          {/* Content */}
          <div className={cn(
            layout === "image-left" ? "lg:order-2 lg:pl-8" : "lg:pr-8",
            layout === "no-image" ? "max-w-4xl mx-auto text-center" : "",
            "lg:pt-4"
          )}>
            <div className={cn(layout !== "no-image" ? "lg:max-w-lg" : "max-w-3xl mx-auto")}>
              {subtitle && (
                <h2 className={cn(
                  "text-base/7 font-semibold",
                  isDark ? "text-primary" : "text-primary"
                )}>
                  {subtitle}
                </h2>
              )}
              <p className={cn(
                "mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl",
                isDark ? "text-white" : "text-foreground",
                titleClassName
              )}>
                {title}
              </p>
              <p className={cn(
                "mt-6 text-lg/8",
                isDark ? "text-gray-300" : "text-muted-foreground",
                descriptionClassName
              )}>
                {description}
              </p>
              
              {/* Features List */}
              <dl className={cn(
                "mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none",
                featuresClassName
              )}>
                {features.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className={cn(
                        "inline font-semibold",
                        isDark ? "text-white" : "text-foreground"
                      )}>
                        <IconComponent 
                          aria-hidden="true" 
                          className={cn(
                            "absolute top-1 left-1 size-5",
                            isDark ? "text-primary" : "text-primary"
                          )} 
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className={cn(
                        "inline",
                        isDark ? "text-gray-400" : "text-muted-foreground"
                      )}>
                        {feature.description}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>

          {/* Image */}
          {layout !== "no-image" && image && (
            <div className={cn(
              layout === "image-left" ? "lg:order-1" : "",
              "flex items-center"
            )}>
              <img
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
                className={cn(
                  "w-full max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem]",
                  isDark ? "ring-white/10" : "ring-gray-200",
                  layout === "image-left" ? "md:-mr-4 lg:-mr-0" : "md:-ml-4 lg:-ml-0",
                  imageClassName
                )}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Grid variant for multiple feature highlights
export function FeaturesGridSection({
  subtitle = "Everything you need",
  title = "Powerful features for modern teams",
  description = "Our comprehensive platform provides all the tools your team needs to build, deploy, and scale applications efficiently.",
  features = [
    {
      name: 'Lightning Fast',
      description: 'Deploy applications in seconds with our optimized infrastructure and global CDN.',
      icon: Zap,
    },
    {
      name: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance certifications.',
      icon: Shield,
    },
    {
      name: 'Advanced Analytics',
      description: 'Deep insights into performance, user behavior, and business metrics.',
      icon: BarChart3,
    },
    {
      name: 'Auto Scaling',
      description: 'Automatically scale resources based on demand without manual intervention.',
      icon: Server,
    },
    {
      name: 'One-Click Deploy',
      description: 'Deploy from Git with zero configuration. We handle the complexity for you.',
      icon: CloudUpload,
    },
    {
      name: 'SSL & Security',
      description: 'Automatic SSL certificates and security headers protect your applications.',
      icon: Lock,
    },
  ],
  columns = 3, // 2, 3, or 4
  theme = "light",
  className,
  titleClassName,
  descriptionClassName,
  featureClassName
}) {
  const isDark = theme === "dark"
  
  return (
    <section className={cn(
      "py-24 sm:py-32",
      isDark ? "bg-gray-900" : "bg-background",
      className
    )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {subtitle && (
            <h2 className={cn(
              "text-base/7 font-semibold",
              isDark ? "text-primary" : "text-primary"
            )}>
              {subtitle}
            </h2>
          )}
          <p className={cn(
            "mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl",
            isDark ? "text-white" : "text-foreground",
            titleClassName
          )}>
            {title}
          </p>
          <p className={cn(
            "mt-6 text-lg/8",
            isDark ? "text-gray-300" : "text-muted-foreground",
            descriptionClassName
          )}>
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className={cn(
            "grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none",
            columns === 2 ? "lg:grid-cols-2" : "",
            columns === 3 ? "lg:grid-cols-3" : "",
            columns === 4 ? "lg:grid-cols-4" : ""
          )}>
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.name} className={cn("flex flex-col", featureClassName)}>
                  <dt className={cn(
                    "flex items-center gap-x-3 text-base/7 font-semibold",
                    isDark ? "text-white" : "text-foreground"
                  )}>
                    <IconComponent 
                      aria-hidden="true" 
                      className={cn(
                        "size-5 flex-none",
                        isDark ? "text-primary" : "text-primary"
                      )} 
                    />
                    {feature.name}
                  </dt>
                  <dd className={cn(
                    "mt-4 flex flex-auto flex-col text-base/7",
                    isDark ? "text-gray-400" : "text-muted-foreground"
                  )}>
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}