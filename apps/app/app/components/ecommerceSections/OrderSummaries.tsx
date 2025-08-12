import React from 'react';
import { ChevronRight, Package, Truck, CheckCircle, Clock, Calendar, CreditCard, MapPin, } from 'lucide-react';
import { Button, } from '~/components/ui/button';
import { Badge, } from '~/components/ui/badge';

export function OrderSummaries   ()   {
  const orders = [
    {
      id: 'WU88191111',
      number: '#4376',
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      status: 'delivered',
      total: '$160.00',
      items: [
        {
          id: 1,
          name: 'Micro Backpack',
          price: '$70.00',
          color: 'Moss',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
        },
        {
          id: 2,
          name: 'Basic Tee',
          price: '$32.00',
          color: 'Sienna',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        },
        {
          id: 3,
          name: 'Basic Tee',
          price: '$32.00',
          color: 'Natural',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        }
      ],
      deliveredTo: 'Front door',
      deliveryDate: 'July 15, 2021'
    },
    {
      id: 'WU88191112',
      number: '#4375',
      date: 'July 6, 2021',
      datetime: '2021-07-06',
      status: 'out-for-delivery',
      total: '$104.00',
      items: [
        {
          id: 4,
          name: 'Basic Tee',
          price: '$32.00',
          color: 'Black',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        },
        {
          id: 5,
          name: 'Basic Tee',
          price: '$32.00',
          color: 'Sienna',
          size: 'Large',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        }
      ],
      estimatedDelivery: 'July 8, 2021'
    },
    {
      id: 'WU88191113',
      number: '#4374',
      date: 'June 24, 2021',
      datetime: '2021-06-24',
      status: 'processing',
      total: '$35.00',
      items: [
        {
          id: 6,
          name: 'Nomad Tumbler',
          price: '$35.00',
          color: 'White',
          size: '20oz',
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'
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

  const getStatusText = (status) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'out-for-delivery':
        return 'Out for delivery';
      case 'processing':
        return 'Processing';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600';
      case 'out-for-delivery':
        return 'text-blue-600';
      case 'processing':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover similar products.
          </p>
        </div>

        <section aria-labelledby="recent-heading" className="mt-16">
          <h2 id="recent-heading" className="sr-only">
            Recent orders
          </h2>

          <div className="space-y-20">
            {orders.map((order) => (
              <div key={order.id}>
                <h3 className="sr-only">
                  Order placed on <time dateTime={order.datetime}>{order.date}</time>
                </h3>

                <div className="rounded-lg bg-gray-50 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
                  <dl className="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between sm:block">
                      <dt className="font-medium text-gray-900">Date placed</dt>
                      <dd className="sm:mt-1">
                        <time dateTime={order.datetime}>{order.date}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between pt-6 sm:block sm:pt-0">
                      <dt className="font-medium text-gray-900">Order number</dt>
                      <dd className="sm:mt-1">{order.number}</dd>
                    </div>
                    <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                      <dt>Total amount</dt>
                      <dd className="sm:mt-1">{order.total}</dd>
                    </div>
                  </dl>
                  <Button className="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto" variant="outline">
                    View Order
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <table className="mt-4 w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
                    <tr>
                      <th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
                        Product
                      </th>
                      <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                        Price
                      </th>
                      <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                        Status
                      </th>
                      <th scope="col" className="w-0 py-3 text-right font-normal">
                        Info
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                    {order.items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-6 pr-8">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="mr-6 h-16 w-16 rounded object-center object-cover"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{item.name}</div>
                              <div className="mt-1 sm:hidden">{item.price}</div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden py-6 pr-8 sm:table-cell">{item.price}</td>
                        <td className="hidden py-6 pr-8 sm:table-cell">
                          <div className="flex items-center">
                            {getStatusIcon(order.status)}
                            <span className={`ml-2 text-sm font-medium ${getStatusColor(order.status)}`}>
                              {getStatusText(order.status)}
                            </span>
                            {order.status === 'delivered' && order.deliveredTo && (
                              <div className="ml-2 text-sm text-gray-500">
                                to {order.deliveredTo}
                              </div>
                            )}
                          </div>
                          {order.status === 'delivered' && order.deliveryDate && (
                            <div className="mt-1 text-sm text-gray-500">
                              on <time dateTime={order.deliveryDate}>{order.deliveryDate}</time>
                            </div>
                          )}
                          {order.status === 'out-for-delivery' && order.estimatedDelivery && (
                            <div className="mt-1 text-sm text-gray-500">
                              Arrives {order.estimatedDelivery}
                            </div>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-6 text-right font-medium">
                          <Button variant="link" className="text-indigo-600 hover:text-indigo-500 p-0 h-auto">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="sm:hidden">
                  {order.items.map((item) => (
                    <div key={item.id} className="mt-6 flex space-x-6">
                      <div className="flex-auto">
                        <div className="flex items-center">
                          {getStatusIcon(order.status)}
                          <span className={`ml-2 text-sm font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                          {order.status === 'delivered' && order.deliveredTo && (
                            <span className="ml-2 text-sm text-gray-500">
                              to {order.deliveredTo}
                            </span>
                          )}
                        </div>
                        {order.status === 'delivered' && order.deliveryDate && (
                          <p className="mt-1 text-sm text-gray-500">
                            on <time dateTime={order.deliveryDate}>{order.deliveryDate}</time>
                          </p>
                        )}
                        {order.status === 'out-for-delivery' && order.estimatedDelivery && (
                          <p className="mt-1 text-sm text-gray-500">
                            Arrives {order.estimatedDelivery}
                          </p>
                        )}
                      </div>
                      <Button variant="link" className="text-indigo-600 hover:text-indigo-500 p-0 h-auto">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
