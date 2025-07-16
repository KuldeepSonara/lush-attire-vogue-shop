import ProductCard from './ProductCard';

// Mock product data - this would come from your backend/API
const mockProducts = [
  {
    id: '1',
    name: 'Essential Hoodie',
    price: 189,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&crop=center'
  },
  {
    id: '2',
    name: 'Minimal Tee',
    price: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&crop=center'
  },
  {
    id: '3',
    name: 'Luxury Joggers',
    price: 149,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1506629905237-f18f5aa75c71?w=600&h=800&fit=crop&crop=center'
  },
  {
    id: '4',
    name: 'Classic Blazer',
    price: 329,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop&crop=center'
  },
  {
    id: '5',
    name: 'Statement Jacket',
    price: 289,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&crop=center'
  },
  {
    id: '6',
    name: 'Premium Shorts',
    price: 119,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1506629905237-f18f5aa75c71?w=600&h=800&fit=crop&crop=center'
  }
];

const ProductGrid = () => {
  const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product);
    // This would integrate with your cart state management
  };

  return (
    <section id="collection" className="scroll-section py-luxury bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-display font-semibold tracking-tight mb-6">
            Essential Collection
          </h2>
          <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto">
            Carefully curated pieces that embody our philosophy of minimal luxury and timeless design.
          </p>
        </div>
        
        <div className="grid-products">
          {mockProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="btn-minimal">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;