import React, { useState } from 'react';
import { Star, ThumbsUp, ChevronDown, Filter, } from 'lucide-react';
import { Button, } from '~/components/ui/button';
import { Badge, } from '~/components/ui/badge';

export function ReviewsSection   ()   {
  const [sortBy, setSortBy] = useState('most-helpful');
  const [showFilters, setShowFilters] = useState(false);

  const overallRating = {
    average: 4.0,
    total: 1624,
    counts: [
      { rating: 5, count: 1019 },
      { rating: 4, count: 162 },
      { rating: 3, count: 97 },
      { rating: 2, count: 199 },
      { rating: 1, count: 147 }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Emily Selman',
      avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      rating: 5,
      date: 'July 16, 2021',
      title: 'Can\'t say enough good things',
      content: 'I was really pleased with the overall shopping experience. My order even included a little personal note, which delighted me!',
      pros: ['Good packaging', 'Fast shipping'],
      cons: [],
      helpful: 19,
      notHelpful: 3,
      verified: true
    },
    {
      id: 2,
      author: 'Hector Gibbons',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      rating: 5,
      date: 'July 12, 2021',
      title: 'Blown away by how polished this is',
      content: 'I\'ve been using this product for a few weeks now and I\'m really impressed with the quality. The design is clean and modern, and it works exactly as advertised. Highly recommend!',
      pros: ['Excellent build quality', 'Great design'],
      cons: [],
      helpful: 14,
      notHelpful: 2,
      verified: true
    },
    {
      id: 3,
      author: 'Mark Edwards',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      rating: 4,
      date: 'July 9, 2021',
      title: 'Good quality, some minor issues',
      content: 'Overall very satisfied with the purchase. The product arrived quickly and was well packaged. There are a couple of minor issues but nothing that would prevent me from recommending it.',
      pros: ['Fast delivery', 'Good value'],
      cons: ['Minor quality issues'],
      helpful: 6,
      notHelpful: 0,
      verified: true
    },
    {
      id: 4,
      author: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      rating: 3,
      date: 'July 2, 2021',
      title: 'It\'s okay',
      content: 'The product is decent but not amazing. It does what it\'s supposed to do but I expected a bit more for the price. Customer service was helpful when I had questions.',
      pros: ['Helpful customer service'],
      cons: ['Overpriced', 'Average quality'],
      helpful: 8,
      notHelpful: 4,
      verified: false
    }
  ];

  const StarRating = ({ rating, size = 'sm' }) => {
    const sizeClass = size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
    
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const getPercentage = (count, total) => {
    return Math.round((count / total) * 100);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                <StarRating rating={Math.floor(overallRating.average)} size="lg" />
                <p className="ml-2 text-sm text-gray-900">
                  Based on {overallRating.total} reviews
                </p>
              </div>
              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {overallRating.counts.map((count) => (
                    <div key={count.rating} className="flex items-center text-sm">
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                          <Star className="h-4 w-4 flex-shrink-0 text-yellow-400 fill-current" />
                          <div className="ml-3 flex-1">
                            <div className="relative">
                              <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                              <div
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                style={{ width: `calc(${count.count} / ${overallRating.total} * 100%)` }}
                              />
                            </div>
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                        {getPercentage(count.count, overallRating.total)}%
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
            <p className="mt-1 text-sm text-gray-600">
              If you've used this product, share your thoughts with other customers
            </p>

            <Button className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full" variant="outline">
              Write a review
            </Button>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">{overallRating.total} reviews</h4>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="most-helpful">Most Helpful</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="lowest-rated">Lowest Rated</option>
                </select>
              </div>
            </div>

            <div className="-my-12 divide-y divide-gray-200">
              {reviews.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img
                      src={review.avatar}
                      alt={`${review.author}.`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        <StarRating rating={review.rating} />
                        {review.verified && (
                          <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-6 text-base italic text-gray-600">
                    <h5 className="font-semibold not-italic text-gray-900">{review.title}</h5>
                    <p className="not-italic">{review.content}</p>
                  </div>

                  {(review.pros.length > 0 || review.cons.length > 0) && (
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {review.pros.length > 0 && (
                        <div>
                          <h6 className="text-sm font-medium text-gray-900">Pros</h6>
                          <ul className="mt-2 space-y-1">
                            {review.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {review.cons.length > 0 && (
                        <div>
                          <h6 className="text-sm font-medium text-gray-900">Cons</h6>
                          <ul className="mt-2 space-y-1">
                            {review.cons.map((con, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      <time dateTime={review.date}>{review.date}</time>
                    </p>
                    <div className="flex items-center space-x-6">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
                      >
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        Helpful ({review.helpful})
                      </button>
                      <span className="text-gray-300">·</span>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline">
              Load more reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
