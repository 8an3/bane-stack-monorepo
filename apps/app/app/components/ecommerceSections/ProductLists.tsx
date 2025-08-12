import { Link } from "@remix-run/react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export   function ProductListPage() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      price: "$35",
      color: "Black",
      inStock: true,
      size: "8",
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-background.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      rating: 3.9,
      reviewCount: 512,
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      color: "White",
      inStock: true,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of Nomad Tumbler.",
      rating: 4.2,
      reviewCount: 128,
    },
    // Add more products as needed
  ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "black", label: "Black" },
        { value: "grey", label: "Grey" },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
      ],
    },
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">New Arrivals</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Checkout out the latest release of Basic Tees, new and improved with four openings!
        </p>

        <div className="mt-8 border-b border-border pb-5">
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 pl-10"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="most-popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <div className="hidden lg:block">
            <h3 className="sr-only">Filters</h3>
            <div className="space-y-6">
              {filters.map((filter) => (
                <div key={filter.id}>
                  <h4 className="text-sm font-medium text-foreground">
                    {filter.name}
                  </h4>
                  <div className="mt-2 space-y-3">
                    {filter.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor={`filter-${filter.id}-${option.value}`}
                          className="ml-3 text-sm text-muted-foreground"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border"
                >
                  <div className="aspect-square bg-muted">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-foreground">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.color}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm font-medium text-foreground">
                        {product.price}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`h-4 w-4 ${
                            rating < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                          fill={
                            rating < Math.floor(product.rating) ? "currentColor" : "none"
                          }
                        />
                      ))}
                      <span className="ml-1 text-xs text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-primary hover:text-primary-foreground"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to cart
                      </Button>
                      <Button variant="ghost" size="sm" className="px-2">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}