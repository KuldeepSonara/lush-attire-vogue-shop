import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { Button } from '@/components/ui/button';

const Collection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Essential Oversized Tee',
      price: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop',
      category: 'tees'
    },
    {
      id: '2', 
      name: 'Minimal Crew Sweatshirt',
      price: 139,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
      category: 'sweats'
    },
    {
      id: '3',
      name: 'Tailored Wide Pants',
      price: 179,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1506629905607-d405b47e5591?w=600&h=800&fit=crop',
      category: 'bottoms'
    },
    {
      id: '4',
      name: 'Structured Blazer',
      price: 259,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1479763089805-0637b6799c4c?w=600&h=800&fit=crop',
      category: 'outerwear'
    },
    {
      id: '5',
      name: 'Cropped Knit Top',
      price: 119,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop',
      category: 'tees'
    },
    {
      id: '6',
      name: 'Premium Hoodie',
      price: 189,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      category: 'sweats'
    }
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(product => product.category === selectedFilter);

  const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-luxury text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="font-display text-display font-semibold tracking-tight">
              Essential Collection
            </h1>
            <p className="text-large font-light text-muted-foreground leading-relaxed">
              Timeless pieces crafted for the modern minimalist.
              <br />
              Discover our curated selection of premium streetwear.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-luxury">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Filter Sidebar */}
            <div className="lg:w-1/4">
              <FilterSidebar 
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-12">
                <p className="text-sm text-muted-foreground font-light">
                  Showing {filteredProducts.length} products
                </p>
                <Button variant="ghost" className="text-sm font-light">
                  Sort by: Newest
                </Button>
              </div>

              <div className="grid-products">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-16">
                <Button className="btn-minimal px-12">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;