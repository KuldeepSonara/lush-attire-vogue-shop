import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted/30 mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="product-image group-hover:scale-105"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className="product-image absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              loading="lazy"
            />
          )}
          
          {/* Add to cart overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="btn-minimal"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      
      <div className="space-y-2">
        <h3 className="font-display text-lg font-medium tracking-tight">
          {product.name}
        </h3>
        <p className="text-base font-light text-muted-foreground">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;