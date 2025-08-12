import { useState } from 'react'
import { Link, useFetcher } from '@remix-run/react'
import { X, Star } from 'lucide-react'
import { cn } from '~/components/ui/utils'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white border-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 border-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 border-gray-900' },
  ],
  sizes: [
    { id: 'xxs', name: 'XXS', inStock: true },
    { id: 'xs', name: 'XS', inStock: true },
    { id: 's', name: 'S', inStock: true },
    { id: 'm', name: 'M', inStock: true },
    { id: 'l', name: 'L', inStock: true },
    { id: 'xl', name: 'XL', inStock: true },
    { id: 'xxl', name: 'XXL', inStock: true },
    { id: 'xxxl', name: 'XXXL', inStock: false },
  ],
}

export function ProductQuickviewsSection() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('s')
  const fetcher = useFetcher()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    formData.append('productId', product.name)
    formData.append('color', selectedColor)
    formData.append('size', selectedSize)
    
    fetcher.submit(formData, { method: 'post' })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Quick View Product</Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl p-0">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          >
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" />
          </Button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-[2/3] w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
            />
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-2xl text-gray-900">{product.price}</p>

                {/* Reviews */}
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={cn(
                            'h-5 w-5',
                            product.rating > rating 
                              ? 'fill-gray-900 text-gray-900' 
                              : 'fill-gray-200 text-gray-200'
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{product.rating} out of 5 stars</p>
                    <Link 
                      to="#" 
                      className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      {product.reviewCount} reviews
                    </Link>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>

                <fetcher.Form onSubmit={handleSubmit}>
                  {/* Colors */}
                  <div>
                    <Label className="text-sm font-medium text-gray-900">Color</Label>
                    <RadioGroup 
                      value={selectedColor} 
                      onValueChange={setSelectedColor}
                      className="mt-4 flex items-center gap-x-3"
                    >
                      {product.colors.map((color) => (
                        <div key={color.id} className="flex items-center">
                          <RadioGroupItem
                            value={color.id}
                            id={color.id}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={color.id}
                            className={cn(
                              'h-8 w-8 rounded-full border-2 cursor-pointer ring-offset-2 transition-all',
                              color.classes,
                              selectedColor === color.id 
                                ? 'ring-2 ring-gray-900' 
                                : 'hover:scale-105'
                            )}
                            aria-label={color.name}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-gray-900">Size</Label>
                      <Link 
                        to="#" 
                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                      >
                        Size guide
                      </Link>
                    </div>

                    <RadioGroup 
                      value={selectedSize} 
                      onValueChange={setSelectedSize}
                      className="mt-2 grid grid-cols-4 gap-3"
                    >
                      {product.sizes.map((size) => (
                        <div key={size.id}>
                          <RadioGroupItem
                            value={size.id}
                            id={size.id}
                            disabled={!size.inStock}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={size.id}
                            className={cn(
                              'group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 cursor-pointer transition-all',
                              'hover:bg-gray-50',
                              selectedSize === size.id && size.inStock
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'text-gray-900',
                              !size.inStock && 'border-gray-400 bg-gray-200 opacity-25 cursor-not-allowed'
                            )}
                            aria-label={size.name}
                          >
                            <span className={cn(
                              'text-sm font-medium uppercase',
                              selectedSize === size.id && size.inStock
                                ? 'text-white'
                                : 'text-gray-900'
                            )}>
                              {size.name}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="mt-6 w-full"
                    disabled={fetcher.state === 'submitting'}
                  >
                    {fetcher.state === 'submitting' ? 'Adding to bag...' : 'Add to bag'}
                  </Button>
                </fetcher.Form>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}