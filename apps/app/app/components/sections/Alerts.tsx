import { AlertTriangle, XCircle, CheckCircle, Info, X } from 'lucide-react';

const bg = 900
const opacity = 40
const border = 600

export function AttentionSection({
  title = "Attention needed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
}) {
  return (
    <div className={`bg-yellow-900/40 border border-yellow-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-300" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-600">{title}</h3>
          <div className="mt-2 text-sm text-yellow-500">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ErrorSection({
  title = "There were 2 errors with your submission",
  desc = [
    "Your password must be at least 8 characters",
    "Your password must include at least one pro wrestling finishing move"
  ]
}) {
  return (
    <div className={`bg-red-900/40 border border-red-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircle className="h-5 w-5 text-red-300" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-600">{title}</h3>
          <div className="mt-2 text-sm text-red-500">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SuccessSection({
  title = "Order completed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  actionBtn1 = null,
  actionBtn2 = null
}) {
  return (
    <div className={`bg-green-900/40 border border-green-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-600">{title}</h3>
          <div className="mt-2 text-sm text-green-500">
            <p>{desc}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              {actionBtn1 && (
                <button
                  type="button"
                  className="rounded-md bg-green-900/40 px-2 py-1.5 text-sm font-medium text-green-600 hover:bg-green-700/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 cursor-pointer"
                >
                  {actionBtn1}
                </button>
              )}
              {actionBtn2 && (
                <button
                  type="button"
                  className="ml-3 rounded-md bg-green-900/40 px-2 py-1.5 text-sm font-medium text-green-600 hover:bg-green-700/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 cursor-pointer"
                >
                  {actionBtn2}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InfoSection({
  title = "A new software update is available. See what's new in version 2.0.4.",
  link = "#",
  linkText = "View update"
}) {
  return (
    <div className={`bg-blue-900/40 border border-blue-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-600">{title}</p>
          <p className="mt-3 text-sm md:ml-6 md:mt-0">
            <a href={link} className="whitespace-nowrap font-medium text-blue-500 hover:text-blue-600">
              {linkText}
              <span aria-hidden="true"> →</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export function AttentionSectionWithAccent({
  title = "Attention needed",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  linkText = "Upgrade your account to add more credits.",
  link = "#"
}) {
  return (
    <div className={`bg-yellow-900/40 border-l-4 border-yellow-400 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-600">
            You have no credits left.{' '}
            <a href={link} className="font-medium underline text-yellow-500 hover:text-yellow-600">
              {linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export function SuccessSectionWithDismissalButton({
  title = "Successfully uploaded",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
  onDismiss = () => {}
}) {
  return (
    <div className={`bg-green-900/40 border border-green-700 rounded-md p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-600">{title}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={onDismiss}
              className="inline-flex rounded-md  p-1.5  focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50  bg-green-900/40 text-green-600 hover:bg-green-700/40 cursor-pointer"
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export  function NotificationDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground mb-8">Notification Components</h1>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Attention Section</h2>
        <AttentionSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Error Section</h2>
        <ErrorSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Success Section</h2>
        <SuccessSection actionBtn1="View status" actionBtn2="Dismiss" />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Info Section</h2>
        <InfoSection />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Attention with Accent</h2>
        <AttentionSectionWithAccent />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Success with Dismissal</h2>
        <SuccessSectionWithDismissalButton onDismiss={() => alert('Dismissed!')} />
      </div>
    </div>
  )
}