import { 
  Truck, 
  RotateCcw, 
  Shield, 
  Headphones, 
  CreditCard, 
  Award,
  Clock,
  Star,
  Gift,
  Zap
} from 'lucide-react';

// Simple grid layout with icons
export function SimpleIncentives() {
  const incentives = [
    {
      name: 'Free shipping',
      description: 'Free shipping on orders over $25',
      icon: Truck,
    },
    {
      name: 'Free returns',
      description: '30-day return policy',
      icon: RotateCcw,
    },
    {
      name: 'Warranty',
      description: '2-year manufacturer warranty',
      icon: Shield,
    },
    {
      name: '24/7 support',
      description: 'Call us anytime at 1-800-555-0199',
      icon: Headphones,
    },
  ]

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <incentive.icon className="mx-auto h-16 w-16 text-gray-400" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-semibold text-gray-900">{incentive.name}</h3>
                <p className="mt-3 text-sm text-gray-500">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Card-based layout with background colors
export function CardIncentives() {
  const incentives = [
    {
      name: 'Free Shipping',
      description: 'Free shipping worldwide on orders over $50',
      icon: Truck,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Easy Returns',
      description: '30-day hassle-free returns',
      icon: RotateCcw,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      name: 'Secure Payment',
      description: 'Your payment information is safe with us',
      icon: CreditCard,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      name: 'Premium Support',
      description: '24/7 customer support via chat and email',
      icon: Headphones,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why shop with us?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're committed to providing you with the best shopping experience possible
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="flex rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10">
              <div>
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-lg ${incentive.bgColor}`}>
                  <incentive.icon className={`h-8 w-8 ${incentive.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{incentive.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Banner style incentives
export function BannerIncentives() {
  const incentives = [
    {
      name: 'Free shipping on orders over $75',
      icon: Truck,
    },
    {
      name: '30-day money-back guarantee',
      icon: RotateCcw,
    },
    {
      name: 'Award-winning customer service',
      icon: Award,
    },
  ]

  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <Gift className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white">
              <span>Limited time offer!</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <div className="flex space-x-6">
              {incentives.map((incentive, index) => (
                <div key={index} className="flex items-center text-sm text-indigo-200">
                  <incentive.icon className="mr-2 h-4 w-4" />
                  <span>{incentive.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Feature grid with emphasis
export function FeatureIncentives() {
  const incentives = [
    {
      name: 'Lightning Fast Delivery',
      description: 'Get your order delivered in 24-48 hours with our express shipping option.',
      icon: Zap,
      featured: true,
    },
    {
      name: 'Quality Guarantee',
      description: 'Every product comes with our quality promise and full manufacturer warranty.',
      icon: Shield,
      featured: false,
    },
    {
      name: 'Expert Support',
      description: 'Our product experts are available 7 days a week to help you make the right choice.',
      icon: Headphones,
      featured: false,
    },
    {
      name: '5-Star Reviews',
      description: 'Join thousands of happy customers who have rated us 5 stars.',
      icon: Star,
      featured: true,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping made simple
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've built our reputation on providing exceptional service and quality products that exceed expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    incentive.featured ? 'bg-indigo-600' : 'bg-gray-100'
                  }`}>
                    <incentive.icon 
                      className={`h-6 w-6 ${incentive.featured ? 'text-white' : 'text-gray-600'}`} 
                      aria-hidden="true" 
                    />
                  </div>
                  {incentive.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{incentive.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

// Compact horizontal layout
export function CompactIncentives() {
  const incentives = [
    { name: 'Free shipping over $50', icon: Truck },
    { name: '24/7 customer support', icon: Clock },
    { name: '30-day returns', icon: RotateCcw },
    { name: 'Secure payments', icon: Shield },
  ]

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {incentives.map((incentive, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 text-white">
              <incentive.icon className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium">{incentive.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Demo component showing all variations
export   function IncentiveDemo() {
  return (
    <div className="space-y-0">
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ecommerce Incentive Sections</h1>
          <p className="text-gray-600 mb-8">Different styles of incentive sections to build trust and encourage purchases</p>
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Simple Grid Layout</h2>
            <p className="text-gray-600 text-sm">Clean icons with minimal text in a responsive grid</p>
          </div>
          <SimpleIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Card-Based Layout</h2>
            <p className="text-gray-600 text-sm">Cards with colored backgrounds and detailed descriptions</p>
          </div>
          <CardIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Banner Style</h2>
            <p className="text-gray-600 text-sm">Compact banner highlighting key incentives</p>
          </div>
          <BannerIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Feature Grid</h2>
            <p className="text-gray-600 text-sm">Detailed descriptions with featured highlights</p>
          </div>
          <FeatureIncentives />
        </section>

        <section>
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Compact Footer Style</h2>
            <p className="text-gray-600 text-sm">Minimal horizontal layout perfect for footers</p>
          </div>
          <CompactIncentives />
        </section>
      </div>
    </div>
  )
}