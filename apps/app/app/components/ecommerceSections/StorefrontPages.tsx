// app/routes/storefront.tsx
import { Link, } from "@remix-run/react";
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown, Star, ChevronLeft, ChevronRight, Check, Plus, Minus, } from "lucide-react";
import { Button, } from "~/components/ui/button";
import { Input, } from "~/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage, } from "~/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "~/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "~/components/ui/card";
import { Badge, } from "~/components/ui/badge";

export   function StorefrontPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="#">
                  <span className="sr-only">Your Company</span>
                  <h1 className="text-xl font-bold">ACME</h1>
                </Link>
              </div>

              {/* Flyout menus */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        Women
                        <ChevronDown className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuLabel>Women's Clothing</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Tops</DropdownMenuItem>
                      <DropdownMenuItem>Dresses</DropdownMenuItem>
                      <DropdownMenuItem>Pants</DropdownMenuItem>
                      <DropdownMenuItem>Denim</DropdownMenuItem>
                      <DropdownMenuItem>Sweaters</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        Men
                        <ChevronDown className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuLabel>Men's Clothing</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>T-Shirts</DropdownMenuItem>
                      <DropdownMenuItem>Polo Shirts</DropdownMenuItem>
                      <DropdownMenuItem>Pants</DropdownMenuItem>
                      <DropdownMenuItem>Jeans</DropdownMenuItem>
                      <DropdownMenuItem>Jackets</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link
                    to="#"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Company
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Stores
                  </Link>
                </div>
              </div>

              {/* Search */}
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Button variant="ghost" size="icon" className="group -m-2 flex items-center p-2">
                  <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </Button>
              </div>

              {/* User */}
              <div className="ml-4 flow-root lg:ml-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="group -m-2 flex items-center p-2">
                      <User className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                      <span className="sr-only">User menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Wishlist</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="relative bg-gray-900">
          <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-50" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Summer styles are finally here</h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">This year, our new summer collection will shelter you</h1>
              <p className="mt-6 text-base leading-7 text-gray-300">
                The weather might be unpredictable, but your style doesn't have to be. Keep your cool with our summer collection.
              </p>
              <div className="mt-8">
                <Button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Shop collection
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending products */}
        <section aria-labelledby="trending-heading" className="bg-white">
          <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-0">
              <h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Trending products
              </h2>
              <Link to="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                See everything
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {/* Product 1 */}
              <Card>
                <CardHeader className="relative">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                      alt="Front of men's Basic Tee in black."
                      className="h-full w-full object-cover object-center hover:opacity-75"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Basic Tee
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${rating < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Product 2 */}
              <Card>
                <CardHeader className="relative">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg"
                      alt="Front of men's Basic Tee in white."
                      className="h-full w-full object-cover object-center hover:opacity-75"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Basic Tee
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">White</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${rating < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Product 3 */}
              <Card>
                <CardHeader className="relative">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg"
                      alt="Front of men's Basic Tee in dark gray."
                      className="h-full w-full object-cover object-center hover:opacity-75"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Basic Tee
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Charcoal</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${rating < 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Product 4 */}
              <Card>
                <CardHeader className="relative">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-04.jpg"
                      alt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube."
                      className="h-full w-full object-cover object-center hover:opacity-75"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          Artwork Tee
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">Peach</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$45</p>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${rating < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Category section */}
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Category
              </h2>
              <Link to="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-01.jpg"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-cover object-center group-hover:opacity-75"
                />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link to="#">
                        <span className="absolute inset-0" />
                        New Arrivals
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-02.jpg"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link to="#">
                        <span className="absolute inset-0" />
                        Accessories
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-category-03.jpg"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link to="#">
                        <span className="absolute inset-0" />
                        Workspace
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <Link to="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="social-impact-heading" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-feature-section-full-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Level up</span>
                  <span className="block sm:inline">your desk</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
                  life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
                  desk setup.
                </p>
                <Button className="mt-8 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Shop Workspace
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product detail section */}
        <section aria-labelledby="product-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product images */}
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                alt="Model wearing plain black basic tee."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-10 lg:mt-0">
              <h1 id="product-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Basic Tee
              </h1>
              <div className="mt-4 flex items-center">
                <p className="text-lg font-medium text-gray-900">$35</p>
                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 flex-shrink-0 ${rating < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700">
                  The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.
                  Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway:
                  "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">Hand cut and sewn locally</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Dyed with our proprietary colors</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Pre-washed & pre-shrunk</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our
                    subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray"
                    limited release.
                  </p>
                </div>
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-900">Color</h3>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a color</legend>
                    <div className="flex items-center space-x-3">
                      <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                        <input type="radio" name="color-choice" value="Black" className="sr-only" />
                        <span className="sr-only">Black</span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
                        />
                      </label>
                      <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                        <input type="radio" name="color-choice" value="Heather Grey" className="sr-only" />
                        <span className="sr-only">Heather Grey</span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-400"
                        />
                      </label>
                      <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none">
                        <input type="radio" name="color-choice" value="White" className="sr-only" />
                        <span className="sr-only">White</span>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"
                        />
                      </label>
                    </div>
                  </fieldset>
                </div>

                {/* Sizes */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900">Size</h3>
                    <Link to="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </Link>
                  </div>

                  <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-4 gap-4">
                      {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <div key={size} className="flex items-center">
                          <input
                            id={`size-${size}`}
                            name="size"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`size-${size}`}
                            className="ml-3 text-sm font-medium text-gray-700"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Quantity */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-gray-900">Quantity</h3>
                  </div>
                  <div className="mt-2 flex items-center space-x-4">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">1</span>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-10 flex">
                  <Button className="flex-1 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                    Add to bag
                  </Button>
                  <Button variant="outline" className="ml-4 flex-1 rounded-md border border-gray-300 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer aria-labelledby="footer-heading" className="bg-gray-50">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                <h1 className="text-xl font-bold">ACME</h1>
              </div>

              {/* Sitemap sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Products</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Bags
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Tees
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Objects
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Home Goods
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Who we are
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Sustainability
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Press
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Careers
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="text-sm">
                        <Link to="#" className="text-gray-500 hover:text-gray-600">
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Contact
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Shipping
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Returns
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Warranty
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Secure Payments
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        FAQ
                      </Link>
                    </li>
                    <li className="text-sm">
                      <Link to="#" className="text-gray-500 hover:text-gray-600">
                        Find a store
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 className="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
                <p className="mt-6 text-sm text-gray-500">
                  The latest deals and savings, sent to your inbox weekly.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <Button
                    type="submit"
                    className="ml-4 flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">&copy; 2023 ACME, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}