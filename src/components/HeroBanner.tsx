import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="container-luxury text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="font-display text-hero font-semibold tracking-tight leading-none">
            Minimal.
            <br />
            <span className="text-muted-foreground">Luxurious.</span>
            <br />
            Essential.
          </h1>
          
          <p className="text-large font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of premium streetwear and essential clothing, 
            designed for the modern minimalist who values quality and timeless aesthetics.
          </p>
          
          <div className="pt-8">
            <Link to="/collection">
              <Button className="btn-minimal text-base px-12 py-4">
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-0.5 h-12 bg-muted-foreground/30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroBanner;