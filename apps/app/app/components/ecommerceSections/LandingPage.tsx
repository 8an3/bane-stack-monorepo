import { Link, } from "@remix-run/react";
import { Button, } from "~/components/ui/button";
import { Badge, } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "~/components/ui/card";
import { Input, } from "~/components/ui/input";
import { Separator, } from "~/components/ui/separator";
import { ArrowRight, Check, Star, Zap, Shield, Users, BarChart3, Globe, Smartphone, Menu, X, ChevronDown, } from "lucide-react";
import { useState, } from "react";

export   function LandingPageSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every layer of our platform."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using real-time collaboration tools."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your data with comprehensive analytics."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Scale",
      description: "Deploy worldwide with our global content delivery network."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Ready",
      description: "Fully responsive design that works perfectly on all devices."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "Community support",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom solutions",
        "Unlimited storage",
        "SSO integration",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "This platform has completely transformed how we work. The productivity gains are incredible.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "SJ"
    },
    {
      quote: "The best investment we've made for our development team. Highly recommended!",
      author: "Michael Chen",
      role: "CTO, StartupXYZ",
      avatar: "MC"
    },
    {
      quote: "Outstanding customer support and a product that just works. Five stars!",
      author: "Emily Davis",
      role: "Product Manager, BigTech",
      avatar: "ED"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="ml-2 text-xl font-bold">ProductName</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="#features" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link to="#pricing" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link to="#testimonials" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Testimonials
                </Link>
                <Link to="#contact" className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link to="#features" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link to="#pricing" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link to="#testimonials" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Testimonials
              </Link>
              <Link to="#contact" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <Badge className="mb-4" variant="secondary">
            🎉 New: Advanced Analytics Dashboard
          </Badge>
          
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl dark:text-slate-100">
            Build your next
            <span className="relative whitespace-nowrap text-primary">
              <span className="relative"> amazing project</span>
            </span>
            faster than ever
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-slate-300">
            The ultimate platform for developers and teams to build, deploy, and scale applications with unprecedented speed and reliability.
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6">
            <Button size="lg" className="px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative rounded-2xl bg-slate-50 p-2 ring-1 ring-inset ring-slate-900/10 lg:rounded-2xl lg:p-4 dark:bg-slate-800/50 dark:ring-slate-800">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Product screenshot"
                className="rounded-md bg-white shadow-2xl ring-1 ring-slate-900/10 dark:bg-slate-900 dark:ring-slate-100/10"
                width="1824"
                height="1080"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Powerful features for modern development
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our platform provides all the tools you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-slate-50 py-24 sm:py-32 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by thousands of developers
            </p>
          </div>
          
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {testimonial.avatar}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Choose the right plan for you
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Start free and scale as you grow. All plans include our core features.
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-base font-semibold leading-6 text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
              Join thousands of developers who trust our platform to build amazing applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                Start your free trial
              </Button>
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                Contact sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay updated</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get the latest updates, tips, and announcements delivered to your inbox.
            </p>
            <div className="mt-6 flex max-w-md mx-auto gap-x-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-auto"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              We care about your data. Read our{' '}
              <Link to="#" className="underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; 2024 ProductName, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}