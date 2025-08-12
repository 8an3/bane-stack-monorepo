import { useFetcher } from '@remix-run/react'
import { Calendar1, Hand } from 'lucide-react'
import { ButtonStyled, Input, Label } from '../ui'

export   function NewsletterSection({
  title="Subscribe to our newsletter",
  desc ="Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
  title1 = "Weekly articles",
desc1 = "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
title2 ="No spam",
desc2= "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim."
}) {
  const fether = useFetcher()
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">{title}</h2>
            <p className="mt-4 text-lg text-gray-300">
              {desc}
            </p>
            <fetcher.Form method='post' className="mt-6 flex max-w-md gap-x-4">
              <Label  >
                Email address
              </Label>
              <Input name="email" type="email" required autoComplete="email" />
              <ButtonStyled value='newsletterSignup' >
                Subscribe
              </ButtonStyled>
            </fetcher.Form>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Calendar1 aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">{title1}</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                {desc1}
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Hand aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">{title2}</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                {desc2}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  )
}
