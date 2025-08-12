// app/routes/checkout.tsx
import { Link } from "@remix-run/react";
import { 
  CreditCard, 
  ChevronLeft, 
  ChevronDown, 
  HelpCircle 
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export   function CheckoutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Left column - Customer information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/cart" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back to cart
                </Link>
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
              <div className="mt-4">
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <Label htmlFor="first-name">First name</Label>
                  <Input type="text" id="first-name" name="first-name" autoComplete="given-name" />
                </div>

                <div>
                  <Label htmlFor="last-name">Last name</Label>
                  <Input type="text" id="last-name" name="last-name" autoComplete="family-name" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input type="text" id="company" name="company" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" autoComplete="street-address" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input type="text" id="apartment" name="apartment" />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" name="city" autoComplete="address-level2" />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="mx">Mexico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="region">State / Province</Label>
                  <Input type="text" id="region" name="region" autoComplete="address-level1" />
                </div>

                <div>
                  <Label htmlFor="postal-code">Postal code</Label>
                  <Input type="text" id="postal-code" name="postal-code" autoComplete="postal-code" />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="text" id="phone" name="phone" autoComplete="tel" />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900">Shipping method</h2>
              <div className="mt-4">
                <RadioGroup defaultValue="standard" className="grid gap-4">
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex items-center justify-between w-full">
                      <span>Standard</span>
                      <span className="text-sm font-medium text-gray-900">$5.00</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex items-center justify-between w-full">
                      <span>Express</span>
                      <span className="text-sm font-medium text-gray-900">$16.00</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-span-1 mt-10 lg:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Order summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-md bg-gray-100 overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg"
                          alt="Front of men's Basic Tee in black."
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">Basic Tee</h3>
                        <p className="text-sm text-gray-500">Black</p>
                        <p className="text-sm text-gray-500">Large</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$32.00</p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">$32.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Tax</dt>
                    <dd className="text-sm font-medium text-gray-900">$3.20</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">$40.20</dd>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="w-full">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Payment</h3>
                  <div className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">Credit card</span>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid gap-4 w-full">
                  <div>
                    <Label htmlFor="card-number">Card number</Label>
                    <Input id="card-number" name="card-number" placeholder="0000 0000 0000 0000" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiration-date">Expiration date (MM/YY)</Label>
                      <Input id="expiration-date" name="expiration-date" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">
                        <div className="flex items-center">
                          <span>CVC</span>
                          <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                        </div>
                      </Label>
                      <Input id="cvc" name="cvc" placeholder="000" />
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Pay $40.20
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By placing your order, you agree to our{' '}
                  <Link to="/terms" className="font-medium text-gray-900 underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}