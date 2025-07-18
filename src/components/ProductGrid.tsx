import { useState } from 'react'
import ProductCard from './ProductCard'
import { QuickViewModal } from './QuickViewModal'
import { Button } from '@/components/ui/button'
import { SlidersHorizontal } from 'lucide-react'

// Enhanced mock product data with premium details
const mockProducts = [
  {
    id: '1',
    name: 'Awaken The Flame Dragon Tee',
    price: 89,
    originalPrice: 119,
    image: '/lovable-uploads/ec5f521b-5ea3-4485-968a-1a9bfa51fcf0.png',
    hoverImage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop&crop=center',
    rating: 4.9,
    material: '100% Premium Cotton',
    colors: ['Black', 'White', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isNew: true,
    isSale: true,
    description: 'Limited edition dragon graphic tee featuring premium cotton construction and exclusive artwork. Small dragon chest print with full back design.'
  },
  {
    id: '2',
    name: 'Minimal Crew Tee',
    price: 89,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&crop=center',
    rating: 4.6,
    material: '100% Pima Cotton',
    colors: ['White', 'Black', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false,
    description: 'Essential crew neck tee in premium Pima cotton with a perfect relaxed fit.'
  },
  {
    id: '3',
    name: 'Tailored Wide Pants',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1506629905237-f18f5aa75c71?w=600&h=800&fit=crop&crop=center',
    rating: 4.7,
    material: 'Wool Blend',
    colors: ['Black', 'Camel', 'Navy'],
    sizes: ['26', '28', '30', '32', '34'],
    isSale: true,
    description: 'High-waisted wide-leg pants in premium wool blend. Perfect for both casual and formal occasions.'
  },
  {
    id: '4',
    name: 'Structured Blazer',
    price: 329,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600&h=800&fit=crop&crop=center',
    rating: 4.9,
    material: 'Italian Wool',
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Impeccably tailored blazer in Italian wool with a modern slim fit and clean lines.'
  },
  {
    id: '5',
    name: 'Cropped Knit Cardigan',
    price: 189,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&crop=center',
    rating: 4.5,
    material: 'Cashmere Blend',
    colors: ['Cream', 'Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
    description: 'Luxurious cropped cardigan in soft cashmere blend with button closure.'
  },
  {
    id: '6',
    name: 'Premium Denim Shorts',
    price: 119,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop&crop=center',
    hoverImage: 'https://images.unsplash.com/photo-1506629905237-f18f5aa75c71?w=600&h=800&fit=crop&crop=center',
    rating: 4.4,
    material: 'Japanese Denim',
    colors: ['Indigo', 'Black', 'Light Blue'],
    sizes: ['26', '28', '30', '32'],
    description: 'High-quality denim shorts crafted from premium Japanese selvedge denim.'
  }
]

const ProductGrid = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null)
  const [sortBy, setSortBy] = useState('newest')

  const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product)
    // This would integrate with your cart state management
  }

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product)
  }

  return (
    <section id="collection" className="scroll-section py-luxury bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="font-display text-display font-semibold tracking-tight mb-6">
            Essential Collection
          </h2>
          <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto">
            Carefully curated pieces that embody our philosophy of minimal luxury and timeless design.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Showing {mockProducts.length} products
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="gap-2 text-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm bg-transparent border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {mockProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="btn-minimal px-12">
            Load More Products
          </Button>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </section>
  )
}

export default ProductGrid;