import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const orderSummary = {
    items: [
      { name: 'Essential Oversized Tee', price: 89, quantity: 2 },
      { name: 'Minimal Crew Sweatshirt', price: 139, quantity: 1 }
    ],
    subtotal: 317,
    shipping: 0,
    total: 317
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-luxury">
        <div className="container-luxury">
          <h1 className="font-display text-display font-semibold tracking-tight mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Checkout Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Contact Information */}
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-sm font-light text-muted-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-minimal"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-light text-muted-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="input-minimal"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-light text-muted-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="input-minimal"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="text-sm font-light text-muted-foreground">
                        Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="input-minimal"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-sm font-light text-muted-foreground">
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="input-minimal"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-sm font-light text-muted-foreground">
                          ZIP Code
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="input-minimal"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight mb-6">
                    Payment Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-sm font-light text-muted-foreground">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="input-minimal"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-sm font-light text-muted-foreground">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="input-minimal"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-sm font-light text-muted-foreground">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="input-minimal"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardName" className="text-sm font-light text-muted-foreground">
                        Name on Card
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="input-minimal"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full btn-minimal py-4 text-base">
                  Complete Order
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="bg-muted/30 p-8 space-y-6">
                <h2 className="font-display text-xl font-medium tracking-tight">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  {orderSummary.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="font-light">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-light">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-light text-muted-foreground">Subtotal</span>
                    <span className="font-light">${orderSummary.subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-light text-muted-foreground">Shipping</span>
                    <span className="font-light">
                      {orderSummary.shipping === 0 ? 'Free' : `$${orderSummary.shipping}`}
                    </span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-display font-medium">Total</span>
                      <span className="font-medium">${orderSummary.total}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/cart" className="block">
                    <Button variant="ghost" className="w-full btn-ghost">
                      ← Back to Cart
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

export default Checkout;