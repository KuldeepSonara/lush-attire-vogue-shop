import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: '1',
    name: 'Essential Oversized Tee',
    price: 89,
    description: 'Crafted from premium organic cotton, this oversized tee embodies minimalist luxury. The relaxed fit and dropped shoulders create an effortlessly elegant silhouette, perfect for the modern urban lifestyle.',
    details: [
      '100% Organic Cotton',
      'Oversized fit with dropped shoulders',
      'Pre-shrunk fabric',
      'Reinforced seams',
      'Made in Portugal'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=1000&fit=crop'
    ]
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, size: selectedSize, quantity });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-luxury">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden bg-muted/30 ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-display text-display font-semibold tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-light">${product.price}</p>
              </div>

              <p className="text-large font-light text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <h3 className="font-display text-lg font-medium mb-4 tracking-tight">
                  Size
                </h3>
                <div className="grid grid-cols-6 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 border text-sm font-light transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-display text-lg font-medium mb-4 tracking-tight">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-light min-w-[3ch] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full btn-minimal py-4 text-base"
                >
                  Add to Cart
                </Button>
                
                <div className="flex space-x-4">
                  <Button variant="ghost" className="flex-1 btn-ghost">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="ghost" className="flex-1 btn-ghost">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="font-display text-lg font-medium mb-4 tracking-tight">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-sm font-light text-muted-foreground">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;