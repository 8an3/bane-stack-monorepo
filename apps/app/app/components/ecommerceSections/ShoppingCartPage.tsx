import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  Heart, 
  ShoppingBag,
  CreditCard,
  Truck,
  Shield,
  ArrowLeft,
  Gift,
  Tag,
  Info,
  Lock,
  Check,
  X,
  Edit3
} from 'lucide-react';

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199,
    originalPrice: 249,
    quantity: 1,
    image: '🎧',
    color: 'Midnight Black',
    size: null,
    inStock: true,
    shipping: 'free'
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    price: 35,
    originalPrice: null,
    quantity: 2,
    image: '👕',
    color: 'Ocean Blue',
    size: 'Medium',
    inStock: true,
    shipping: 'standard'
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    price: 89,
    originalPrice: 120,
    quantity: 1,
    image: '👜',
    color: 'Cognac Brown',
    size: null,
    inStock: false,
    shipping: 'express'
  }
];

// Cart Item Component
export function CartItem   ({ item, onUpdateQuantity, onRemove, onMoveToWishlist })  {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={`flex gap-4 p-4 border-b ${!item.inStock ? 'opacity-60' : ''}`}>
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
        {item.image}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <div className="flex gap-4 text-sm text-gray-600 mt-1">
              <span>Color: {item.color}</span>
              {item.size && <span>Size: {item.size}</span>}
            </div>
            {!item.inStock && (
              <p className="text-red-600 text-sm font-medium mt-1">Out of Stock</p>
            )}
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2">
              {item.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
              )}
              <span className="text-lg font-bold text-gray-900">${item.price}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                className="p-2 hover:bg-gray-100 disabled:opacity-50"
                disabled={!item.inStock}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 min-w-[3rem] text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-2 hover:bg-gray-100 disabled:opacity-50"
                disabled={!item.inStock}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => onMoveToWishlist(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Move to wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              title="Remove item"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Order Summary Component
export function OrderSummary  ({ items, showCheckoutButton = true, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15;
  const tax = subtotal * 0.08;
  const discount = 25;
  const total = subtotal + shipping + tax - discount;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span>Subtotal ({items.length} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-green-600">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {showCheckoutButton && (
        <button
          onClick={onCheckout}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Lock className="h-4 w-4" />
          Secure Checkout
        </button>
      )}
      
      <div className="mt-4 space-y-2 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span>Secure payment with SSL encryption</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4" />
          <span>Free shipping on orders over $75</span>
        </div>
      </div>
    </div>
  );
};

// Promo Code Component
export function PromoCode   ()   {
  const [promoCode, setPromoCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setIsApplied(true);
    }
  };

  return (
    <div className="bg-white border rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Promo Code</h3>
      {!isApplied ? (
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleApplyPromo}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium"
          >
            Apply
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <Tag className="h-4 w-4" />
            <span className="font-medium">SAVE25 applied</span>
          </div>
          <button
            onClick={() => setIsApplied(false)}
            className="text-green-600 hover:text-green-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

// Recommended Products Component
export function RecommendedProducts  ()  {
  const recommendations = [
    { id: 1, name: 'Phone Case', price: 25, image: '📱' },
    { id: 2, name: 'Wireless Charger', price: 45, image: '🔋' },
    { id: 3, name: 'Screen Protector', price: 15, image: '📱' },
    { id: 4, name: 'Car Mount', price: 35, image: '🚗' }
  ];

  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">You might also like</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {recommendations.map(product => (
          <div key={product.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-2">
              {product.image}
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
            <p className="text-sm font-bold text-gray-900">${product.price}</p>
            <button className="w-full mt-2 py-1 px-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Shopping Cart Page Component
export function ShoppingCartPage  ()   {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [showCheckout, setShowCheckout] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const moveToWishlist = (id) => {
    // In a real app, this would move the item to wishlist
    removeItem(id);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-300" />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="text-sm text-gray-500">({cartItems.length} items)</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                    onMoveToWishlist={moveToWishlist}
                  />
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div className="mt-6">
              <PromoCode />
            </div>

            {/* Recommended Products */}
            <div className="mt-6">
              <RecommendedProducts />
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-8 lg:mt-0">
            <div className="sticky top-4">
              <OrderSummary 
                items={cartItems}
                onCheckout={() => setShowCheckout(true)}
              />
              
              {/* Trust Indicators */}
              <div className="mt-6 bg-white border rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Why shop with us?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Free returns on all orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal/Page Transition */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Ready to checkout?</h3>
            <p className="text-gray-600 mb-6">
              You'll be redirected to our secure checkout page to complete your order.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCheckout(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Continue Shopping
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
