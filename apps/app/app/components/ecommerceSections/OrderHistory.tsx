import React from 'react';
import { ChevronRight, Package, Truck, CheckCircle, Clock, } from 'lucide-react';
import { Button, } from '~/components/ui/button';
import { Badge, } from '~/components/ui/badge';

export function OrderHistory   ()  {
  const orders = [
    {
      id: 'WU88191111',
      date: 'January 22, 2021',
      total: '$302.00',
      status: 'delivered',
      items: [
        {
          id: 1,
          name: 'Micro Backpack',
          description: 'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          price: '$70.00',
          color: 'Moss',
          size: '5L',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
        },
        {
          id: 2,
          name: 'Basic Tee 6-Pack',
          description: 'Get back to basics with our everyday T-shirts. From the studio to the streets, this versatile essential delivers cool comfort.',
          price: '$192.00',
          color: 'Black',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        }
      ]
    },
    {
      id: 'WU88191112',
      date: 'March 15, 2021',
      total: '$157.00',
      status: 'out-for-delivery',
      items: [
        {
          id: 3,
          name: 'Nomad Tumbler',
          description: 'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          price: '$35.00',
          color: 'White',
          size: '20oz',
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
        }
      ]
    },
    {
      id: 'WU88191113',
      date: 'April 2, 2021',
      total: '$89.00',
      status: 'processing',
      items: [
        {
          id: 4,
          name: 'Focus Paper Refill',
          description: 'Get the most out of your Focus system with this set of paper refills. Available in lined, graph, or blank options.',
          price: '$89.00',
          color: 'White',
          size: 'Letter',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'out-for-delivery':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      delivered: 'bg-green-100 text-green-800',
      'out-for-delivery': 'bg-blue-100 text-blue-800',
      processing: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <Badge className={`${variants[status]} hover:${variants[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </Badge>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Order history
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and download invoices.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-16 sm:space-y-24">
            {orders.map((order) => (
              <div key={order.id}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.date}>{order.date}</time>
                </h3>

                <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <dl className="flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between md:block">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="md:mt-1">{order.id}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="md:mt-1">
                        <time dateTime={order.date}>{order.date}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                      <dt>Total amount</dt>
                      <dd className="md:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex items-center space-x-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Order
                      </Button>
                      <Button variant="outline" size="sm">
                        View Invoice
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                  <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex py-6 sm:py-10">
                        <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                            <div className="sm:flex">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {item.name}
                                </h4>
                                <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                  {item.description}
                                </p>
                              </div>
                              <p className="mt-1 font-medium text-gray-900 sm:ml-6 sm:mt-0">
                                {item.price}
                              </p>
                            </div>
                            <div className="mt-2 flex text-sm font-medium sm:mt-4">
                              <span className="text-gray-500">Color: {item.color}</span>
                              <span className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 font-medium">
                            {order.status === 'delivered' ? (
                              <div className="flex space-x-4">
                                <Button variant="outline" size="sm">
                                  Buy again
                                </Button>
                                <Button variant="outline" size="sm">
                                  Shop similar
                                </Button>
                              </div>
                            ) : (
                              <Button variant="link" className="p-0 h-auto text-indigo-600 hover:text-indigo-500">
                                View product <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-center">
          <Button variant="outline">
            View all orders
          </Button>
        </div>
      </div>
    </div>
  );
};
