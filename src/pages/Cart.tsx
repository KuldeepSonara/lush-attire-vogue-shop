import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Essential Oversized Tee',
      price: 89,
      size: 'M',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'Minimal Crew Sweatshirt',
      price: 139,
      size: 'L',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop'
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-luxury">
          <div className="container-luxury text-center">
            <div className="max-w-md mx-auto space-y-8">
              <h1 className="font-display text-display font-semibold tracking-tight">
                Your cart is empty
              </h1>
              <p className="text-large font-light text-muted-foreground">
                Discover our curated collection of essential pieces.
              </p>
              <Link to="/collection">
                <Button className="btn-minimal px-12">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-luxury">
        <div className="container-luxury">
          <h1 className="font-display text-display font-semibold tracking-tight mb-12">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-6 pb-8 border-b border-border">
                  
                  {/* Product Image */}
                  <div className="w-24 h-32 bg-muted/30 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Size: {item.size}
                      </p>
                      <p className="text-lg font-light mt-2">
                        ${item.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-light min-w-[2ch] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 p-8 space-y-6">
                <h2 className="font-display text-xl font-medium tracking-tight">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-light text-muted-foreground">Subtotal</span>
                    <span className="font-light">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-light text-muted-foreground">Shipping</span>
                    <span className="font-light">
                      {shipping === 0 ? 'Free' : `$${shipping}`}
                    </span>
                  </div>
                  {subtotal <= 150 && (
                    <p className="text-xs text-muted-foreground">
                      Free shipping on orders over $150
                    </p>
                  )}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-display font-medium">Total</span>
                      <span className="font-medium">${total}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link to="/checkout" className="block">
                    <Button className="w-full btn-minimal py-4">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link to="/collection" className="block">
                    <Button variant="ghost" className="w-full btn-ghost">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;