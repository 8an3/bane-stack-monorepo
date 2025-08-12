import { Link, useLoaderData } from "@remix-run/react";
import { ChevronLeft, Package, Calendar, CreditCard, Truck, Check, MoreVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";

/**export async function loader() {
  // In a real app, you'd fetch this data from your database/API
  return {
    order: {
      id: "WU88191111",
      date: "January 22, 2024",
      status: "delivered",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        phone: "555-123-4567",
      },
      shipping: {
        address: "1234 Main St",
        city: "San Francisco",
        state: "CA",
        zip: "94111",
        country: "United States",
        method: "Express",
        estimatedDelivery: "January 26, 2024",
        actualDelivery: "January 25, 2024",
      },
      payment: {
        method: "Visa",
        cardNumber: "•••• •••• •••• 4242",
        total: "$135.00",
        subtotal: "$120.00",
        tax: "$10.00",
        shipping: "$5.00",
      },
      items: [
        {
          id: 1,
          name: "Basic Tee",
          price: "$35.00",
          quantity: 2,
          total: "$70.00",
          color: "Black",
          size: "M",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/order-history-03.jpg",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          price: "$35.00",
          quantity: 1,
          total: "$35.00",
          color: "White",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/order-history-02.jpg",
        },
      ],
    },
  };
} */

export function OrderDetailsPage() {
	///const { order } = useLoaderData<typeof loader>();
	const order = {
		id: "WU88191111",
		date: "January 22, 2024",
		status: "delivered",
		customer: {
			name: "John Smith",
			email: "john@example.com",
			phone: "555-123-4567",
		},
		shipping: {
			address: "1234 Main St",
			city: "San Francisco",
			state: "CA",
			zip: "94111",
			country: "United States",
			method: "Express",
			estimatedDelivery: "January 26, 2024",
			actualDelivery: "January 25, 2024",
		},
		payment: {
			method: "Visa",
			cardNumber: "•••• •••• •••• 4242",
			total: "$135.00",
			subtotal: "$120.00",
			tax: "$10.00",
			shipping: "$5.00",
		},
		items: [
			{
				id: 1,
				name: "Basic Tee",
				price: "$35.00",
				quantity: 2,
				total: "$70.00",
				color: "Black",
				size: "M",
				imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-03.jpg",
			},
			{
				id: 2,
				name: "Nomad Tumbler",
				price: "$35.00",
				quantity: 1,
				total: "$35.00",
				color: "White",
				imageSrc: "https://tailwindui.com/img/ecommerce-images/order-history-02.jpg",
			},
		],
	};
	return (
		<div className="bg-background">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				{/* Back button */}
				<div className="mb-6">
					<Button variant="ghost" asChild>
						<Link to="/orders" className="flex items-center">
							<ChevronLeft className="mr-2 h-4 w-4" />
							Back to orders
						</Link>
					</Button>
				</div>

				{/* Order header */}
				<div className="flex flex-col justify-between sm:flex-row sm:items-center">
					<div>
						<h1 className="text-2xl font-bold tracking-tight text-foreground">Order #{order.id}</h1>
						<p className="mt-2 text-sm text-muted-foreground">Placed on {order.date}</p>
					</div>
					<div className="mt-4 sm:mt-0">
						<Badge variant={order.status === "delivered" ? "success" : order.status === "shipped" ? "default" : "secondary"} className="text-sm">
							{order.status.charAt(0).toUpperCase() + order.status.slice(1)}
						</Badge>
					</div>
				</div>

				{/* Order details */}
				<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
					{/* Shipping information */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<Truck className="h-5 w-5 text-muted-foreground" />
								<span>Shipping information</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Shipping address</h3>
									<p className="mt-1 text-sm text-foreground">{order.customer.name}</p>
									<p className="text-sm text-foreground">{order.shipping.address}</p>
									<p className="text-sm text-foreground">
										{order.shipping.city}, {order.shipping.state} {order.shipping.zip}
									</p>
									<p className="text-sm text-foreground">{order.shipping.country}</p>
								</div>

								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Shipping method</h3>
									<p className="mt-1 text-sm text-foreground">
										{order.shipping.method} • {order.shipping.estimatedDelivery}
									</p>
								</div>

								{order.status === "delivered" && (
									<div>
										<h3 className="text-sm font-medium text-muted-foreground">Delivered</h3>
										<p className="mt-1 text-sm text-foreground">{order.shipping.actualDelivery}</p>
									</div>
								)}
							</div>
						</CardContent>
					</Card>

					{/* Payment information */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<CreditCard className="h-5 w-5 text-muted-foreground" />
								<span>Payment information</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Payment method</h3>
									<p className="mt-1 text-sm text-foreground">
										{order.payment.method} {order.payment.cardNumber}
									</p>
								</div>

								<div>
									<h3 className="text-sm font-medium text-muted-foreground">Billing address</h3>
									<p className="mt-1 text-sm text-foreground">Same as shipping address</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Order items */}
				<Card className="mt-8">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Package className="h-5 w-5 text-muted-foreground" />
							<span>Order items</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px]">Product</TableHead>
									<TableHead>Price</TableHead>
									<TableHead>Qty</TableHead>
									<TableHead className="text-right">Total</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.items.map((item) => (
									<TableRow key={item.id}>
										<TableCell className="font-medium">
											<div className="flex items-center">
												<div className="mr-4 h-16 w-16 overflow-hidden rounded-md border border-border">
													<img src={item.imageSrc} alt={item.name} className="h-full w-full object-cover object-center" />
												</div>
												<div>
													<p className="text-sm font-medium text-foreground">{item.name}</p>
													<p className="text-sm text-muted-foreground">
														{item.color}
														{item.size && ` • ${item.size}`}
													</p>
												</div>
											</div>
										</TableCell>
										<TableCell>{item.price}</TableCell>
										<TableCell>{item.quantity}</TableCell>
										<TableCell className="text-right">{item.total}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						{/* Order summary */}
						<div className="mt-8 border-t border-border pt-6">
							<div className="space-y-3">
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Subtotal</p>
									<p className="text-sm text-foreground">{order.payment.subtotal}</p>
								</div>
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Shipping</p>
									<p className="text-sm text-foreground">{order.payment.shipping}</p>
								</div>
								<div className="flex justify-between">
									<p className="text-sm text-muted-foreground">Tax</p>
									<p className="text-sm text-foreground">{order.payment.tax}</p>
								</div>
								<div className="flex justify-between border-t border-border pt-3">
									<p className="text-base font-medium text-foreground">Total</p>
									<p className="text-base font-medium text-foreground">{order.payment.total}</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Order status timeline */}
				<Card className="mt-8">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Calendar className="h-5 w-5 text-muted-foreground" />
							<span>Order status</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="relative">
							{/* Timeline */}
							<div className="space-y-6">
								{/* Order placed */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Order placed</h3>
											<time dateTime={order.date} className="text-sm text-muted-foreground">
												{order.date}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order was placed and is being processed.</p>
									</div>
								</div>

								{/* Payment processed */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Payment processed</h3>
											<time dateTime={order.date} className="text-sm text-muted-foreground">
												{order.date}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your payment was successfully processed.</p>
									</div>
								</div>

								{/* Shipped */}
								<div className="relative flex items-start">
									<div className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border" />
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Shipped</h3>
											<time dateTime={order.shipping.estimatedDelivery} className="text-sm text-muted-foreground">
												January 24, 2024
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order has been shipped.</p>
									</div>
								</div>

								{/* Delivered */}
								<div className="relative flex items-start">
									<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
										<Check className="h-4 w-4 text-primary-foreground" />
									</div>
									<div className="ml-6 flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-sm font-medium text-foreground">Delivered</h3>
											<time dateTime={order.shipping.actualDelivery} className="text-sm text-muted-foreground">
												{order.shipping.actualDelivery}
											</time>
										</div>
										<p className="mt-1 text-sm text-muted-foreground">Your order has been delivered.</p>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Actions */}
				<div className="mt-8 flex justify-end space-x-4">
					<Button variant="outline" asChild>
						<Link to="#">Invoice</Link>
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<MoreVertical className="h-4 w-4" />
								<span className="sr-only">More actions</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>Reorder</DropdownMenuItem>
							<DropdownMenuItem>Return items</DropdownMenuItem>
							<DropdownMenuItem>Contact support</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}
