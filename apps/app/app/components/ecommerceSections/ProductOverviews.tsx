import { Link, useLoaderData } from "@remix-run/react";
import { Star, ChevronRight, ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";



export   function ProductOverviews() {
//  const { product, relatedProducts } = useLoaderData<typeof loader>();
const relatedProducts =   [
      { id: 2, name: "Nomad Tumbler", price: "$35", href: "#" },
      { id: 3, name: "Artwork Tee", price: "$48", href: "#" },
    ]
    const product =    {
      id: 1,
      name: "Basic Tee",
      price: "$35",
      rating: 3.9,
      reviewCount: 512,
      colors: [
        { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
        { name: "Heather Grey", bgColor: "bg-gray-400", selectedColor: "ring-gray-400" },
      ],
      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: false },
      ],
      description: `
        The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.
        Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black".
        Need to add an extra pop of color to your outfit? Our white tee has you covered.
      `,
      highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
      ],
      details: `
        The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service
        and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.
      `,
    }
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="#" className="font-medium text-muted-foreground hover:text-foreground">
                Men
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </li>
            <li>
              <Link to="#" className="font-medium text-muted-foreground hover:text-foreground">
                Clothing
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </li>
            <li>
              <Link to="#" aria-current="page" className="font-medium text-foreground">
                {product.name}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square h-24 w-full cursor-pointer rounded-md bg-muted object-cover object-center"
                  >
                    <img
                      src={`https://tailwindui.com/img/ecommerce-images/product-page-0${i}-secondary-background.jpg`}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square w-full rounded-lg bg-muted">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-background.jpg"
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-foreground">{product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-5 w-5 ${
                        rating < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                      fill={
                        rating < Math.floor(product.rating) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-muted-foreground">{product.description}</p>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-muted-foreground">Color</h3>
                <div className="mt-2 flex space-x-2">
                  {product.colors.map((color) => (
                    <div
                      key={color.name}
                      className={`relative h-10 w-10 cursor-pointer rounded-full ${color.bgColor} flex items-center justify-center ring-2 ring-offset-2 ${color.selectedColor}`}
                    >
                      <span className="sr-only">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-muted-foreground">Size</h3>
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Size guide
                  </Link>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <Button
                      key={size.name}
                      variant={size.inStock ? "outline" : "ghost"}
                      disabled={!size.inStock}
                      className={`flex items-center justify-center rounded-md px-3 py-3 text-sm font-medium uppercase ${
                        !size.inStock
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {size.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-x-3">
                <Button
                  type="button"
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to bag
                </Button>
                <Button type="button" size="lg" variant="outline">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
              </div>
            </form>

            <div className="mt-6 flex items-center space-x-4 border-t border-border pt-6">
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-foreground">Highlights</h3>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-medium text-foreground">Details</h3>
                <p className="text-sm text-muted-foreground">{product.details}</p>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-foreground">Customer Reviews</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review}>
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <div className="h-10 w-10 rounded-full bg-muted"></div>
                          <div>
                            <CardTitle className="text-sm">John Doe</CardTitle>
                            <div className="flex">
                              {[0, 1, 2, 3, 4].map((star) => (
                                <Star
                                  key={star}
                                  className="h-4 w-4 text-yellow-400"
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          This is the best product I've ever purchased. Highly recommend!
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        <div className="mt-16">
          <h2 className="text-lg font-medium text-foreground">Customers also purchased</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-muted lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`https://tailwindui.com/img/ecommerce-images/product-page-0${product.id}-related-product-background.jpg`}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-foreground">
                      <Link to={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-foreground">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**export async function loader() {
  // In a real app, you'd fetch this data from your database/API
  return {
    product: {
      id: 1,
      name: "Basic Tee",
      price: "$35",
      rating: 3.9,
      reviewCount: 512,
      colors: [
        { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
        { name: "Heather Grey", bgColor: "bg-gray-400", selectedColor: "ring-gray-400" },
      ],
      sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: false },
      ],
      description: `
        The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.
        Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black".
        Need to add an extra pop of color to your outfit? Our white tee has you covered.
      `,
      highlights: [
        "Hand cut and sewn locally",
        "Dyed with our proprietary colors",
        "Pre-washed & pre-shrunk",
        "Ultra-soft 100% cotton",
      ],
      details: `
        The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service
        and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.
      `,
    },
    relatedProducts: [
      { id: 2, name: "Nomad Tumbler", price: "$35", href: "#" },
      { id: 3, name: "Artwork Tee", price: "$48", href: "#" },
    ],
  };
} */