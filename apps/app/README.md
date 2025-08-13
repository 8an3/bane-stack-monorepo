# Bane - Remix-Run Stack

>Start with a project that already includes all the resources you need to build complete features—hero sections, sidebars, pre-configured tables, and more. This eliminates the time-consuming cycle of searching the internet for inspiration, hunting down components, reading documentation, or looking for code examples.

>The core stack intentionally remains the default Remix with Vite setup. I've found that the real time sink isn't in the initial framework configuration—it's in the endless cycle of designing layouts, testing them with users, redesigning based on feedback, and iterating until you get it right.
>By keeping the core stack simple and focusing on providing ready-to-use components and layouts, you can cut down time where you have the most impact doing so.

>[8an3/bane Monorepo](https://github.com/8an3/bane-stack-monorepo.git)


## TOC
- I.  [Getting Started](#getting-started)
- II.  [Tech](#tech)
- III.   [Included Components](#included-components)
  - [Blocks Route](#blocks-route)
  - [portal Route](#portal-route)
  - [__auth Route](#__auth-route)
  - [__client Route](#__client-route)
  - [Custom UI Components](#custom-ui-components)
  - [Utils](#utils)
  - [Auth](#auth)
- IV.  [Dev](#dev)
- V.  [Acknowledgments](#acknowledgments)

---

## Getting Started

## Tech
- @remix-run
- @radix-ui / ShadCN 
- @remix-run/v1-route-convention
- superuser-task-runner
- @tanstack/react-table
- react-day-picker
- remix-auth
- @faker-js/faker
- remix-auth-totp
- sonner
- tailwindcss
- vite
- @tabler/icons-react
- lucide-react
- @prisma/client
- input-otp
- react-day-picker
- recharts
- monaco editor

## Included Components

>With each viewer there is an editor where you can make changes before you copy / export the code without having to leave the page. 

Editor Useage
- Whenver you are finished with the current item, to return to the search, just click on the X in the top right corner.
- to the left is maximize, converting to a full screen layout
- then A copy button, taking whatever is in the editor and placing it in your clipboard
- export file, downloading to your default download folder,

>Components editor, is the catch all for anything that doesn't display well, if at all. For example, included are hooks or icon buttons that use hooks, this would look terrible taking up half a page for a button that is 15 pixels in h/w. Everything was put into the blocks route, so whenever your done the project, just move / delete the route. 

>You can either stand the project up on a personal deployment and visit whenever you like, adding your own code to build upon your resource ( or send it to me and I'll build a users folder within examples ), or if you have devStack, this will be on there as well since I treat that as a personal deployment. I should get back to one of my clients projects, but I'll probably just bang that out right now, as it should be pretty clear cut, with copy / paste



## Blocks Route

>Examples and sidebar are there for you to view, along with their children examples. Each section will either have 1 or many code examples to view. The following items code is in components/blocks

```sh
└── Project/
    ├── Sidebars/
    │   ├── featured/
    │   ├── email/
    │   ├── left-sb-1-and-right-sb/
    │   └── left-sb-2/
    ├── Examples/
    │   ├── Authentication/
    │   │   └── OTP-Login-and-Sign-Up-pages/
    │   ├── Cards/
    │   ├── Dashboard/
    │   └── Ecommerce/
    │       ├── CategoryFilters
    │       ├── CategoryPage
    │       ├── CategoryPreviews
    │       ├── CheckoutForm
    │       ├── CheckoutPage
    │       ├── DetailsScreen
    │       ├── FeedComponents
    │       ├── GridLists
    │       ├── HomeScreen
    │       ├── IncentiveSection
    │       ├── LandingPage
    │       ├── OrderDetailsPage
    │       ├── OrderHistory
    │       ├── OrderSummaries
    │       ├── PageHeadings
    │       ├── PricingPage
    │       ├── ProductLists
    │       ├── ProductOverviews
    │       ├── ProductPages
    │       ├── ProductQuickviews
    │       ├── ProductsFeatures
    │       ├── PromoSection
    │       ├── ReviewsSection
    │       ├── SectionHeadings
    │       ├── SettingsScreen
    │       ├── ShoppingCart
    │       ├── ShoppingCartPage
    │       ├── StackedLayouts
    │       ├── StackedLists
    │       ├── StorefrontPages
    │       └── StoreNav
    ├── Editor/
    │   ├── index/
    │   ├── component/
    │   │   ├── custom-ui/
    │   │   │   ├── announcement
    │   │   │   ├── app-sidebar
    │   │   │   ├── ButtonStyled
    │   │   │   ├── callout
    │   │   │   ├── copyText
    │   │   │   ├── data
    │   │   │   ├── debouncedInput
    │   │   │   ├── exportFile
    │   │   │   ├── filter
    │   │   │   ├── fuzzyFilter
    │   │   │   ├── fuzzySort
    │   │   │   ├── incId
    │   │   │   ├── loadErrorPage
    │   │   │   ├── loading
    │   │   │   ├── loadingPage
    │   │   │   ├── nav-main
    │   │   │   ├── nav-projects
    │   │   │   ├── nav-user
    │   │   │   ├── NavButton
    │   │   │   ├── NavButtonStyled
    │   │   │   ├── option
    │   │   │   ├── page-header
    │   │   │   ├── PaginationButton
    │   │   │   ├── scaffolding
    │   │   │   ├── smallTable
    │   │   │   ├── team-switcher
    │   │   │   ├── theme-selector
    │   │   │   └── tooltipButton
    │   │   ├── hooks/
    │   │   │   ├── use-copy-to-clipboard
    │   │   │   ├── use-mobile
    │   │   │   ├── use-mounted
    │   │   │   ├── use-mutation-observer
    │   │   │   ├── useExportMarkdown
    │   │   │   ├── useExportTsx
    │   │   │   ├── useFuzzySearch
    │   │   │   └── useMediaQuery
    │   │   └── utils/
    │   │       ├── client-only
    │   │       └── client-only
    │   ├── Editor/
    │   ├── Other/
    │   ├── lo-fi/
    │   ├── card/
    │   ├── login/
    │   └── component2/
    ├── Forms/
    ├── Mail/
    ├── Music/
    ├── Playground/
    ├── Products/
    ├── Sections/
    │   ├── Alerts/
    │   ├── Banner/
    │   ├── BentoGrid/
    │   ├── Blog/
    │   ├── Changelog/
    │   ├── ConfigSection/
    │   ├── Contact/
    │   ├── Content/
    │   ├── CTA/
    │   ├── DescriptionList/
    │   ├── DisplayCode/
    │   ├── DisplayGithubInstall/
    │   ├── DisplayInstallCode/
    │   ├── DisplayInstallCodeArray/
    │   ├── FeatureSection/
    │   ├── FlyoutMenu/
    │   ├── Headers/
    │   ├── HeroSection/
    │   ├── ImageSection/
    │   ├── JsonSection/
    │   ├── Newsletter/
    │   ├── NoteSection/
    │   ├── PageHeader/
    │   ├── PageNav/
    │   ├── Pricing/
    │   ├── SectionTitle/
    │   ├── StackedLayouts/
    │   ├── Stats/
    │   ├── Team/
    │   ├── Testimonial/
    │   ├── TsxSection/
    │   ├── UsageSection/
    │   └── UsageSectionNoDash/
    ├── Tasks/
    └── Tickets/
```

---

#### Still needs completing
- sidebars, instead of creating 23 side bars, create 4 ( theres only 4 base variants ), in each of the 4 place the variety of layout / nav configs just so your not wasting time or space 
- the right sidebar will also have a left side bar showcasing that ui
- As for the editor and copying / exporting the code, it will not follow what is on the ui, like the rest of the sections, to make it easier for you, each sidebar config will be its own sidebar so you don't have to deconstruct and waste time on the ones I built. That way your not trying to figure out which nav menu / layout is what


- sidebar configs
  - email 
    - collasible - icon
    - collapsible - none
    - variant - inset
    - variant - sidebar
  - right sb
    - variant - inset
    - layouts
      - A left and right sidebar
      - A sidebar with a sticky site header
      - A sidebar with submenus as dropdowns
      - A sidebar with a calendar
      - news letter form in footer
  - left sb 1
    - dropdown - top and bot
    - variant - floating
    - collapsible - off-canvas
    - layouts
        - A sidebar with collapsible sections
        - A simple sidebar with navigation grouped by section
        - A sidebar with a collapsible file tree
        - A sidebar in a dialog
        - A left and right sidebar
  - left sb 2
    - dropdown - top 
    - footer will hold newsletter sub form
    - variant - inset
    - collapsible - none
    - layouts
      - A sidebar with submenus
      - A sidebar in a popover
      - A floating sidebar with submenus
      - A sidebar with collapsible submenus
      - A sidebar that collapses to icons
      - An inset sidebar with secondary navigation
      - 
---

## portal Route
- Dashbord
- Default template route

---
## __auth Route
- login
- logout

---
## __client Route
- client
  - login ( using otp )
  - logout
  - dashboard

---


## Auth

>user: johnwick@thecontinental.com
>password: daisy

- Remix auth login ( this one is being used as the current auth config )
- Remix auth logout ( ^ )
- Sessions and authenticator configuration
  - /components/auth/remix
  - /modules/auth
- OTP Login
- OTP Logout
- email & authenticating functionality
- with its own sessions within the otp folder
  - /components/auth/otp
  - /modules/otp
 

## Dev
- Sections will continue to be added overtime, as of right I do plan on adding more to ecommerce and sections
- When this happens instead of starting fresh, just download the new pages and paste them into your project
- If a new library is needed for that section, I'll leave a note at the top of the file under imports

## Acknowledgments
>To shadcn and tailwind
