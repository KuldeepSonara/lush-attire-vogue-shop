import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, Eye, ShoppingBag } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  hoverImage?: string
  description?: string
  rating?: number
  colors?: string[]
  sizes?: string[]
  material?: string
  originalPrice?: number
  isNew?: boolean
  isSale?: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
  onQuickView?: (product: Product) => void
}

const ProductCard = ({ product, onAddToCart, onQuickView }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const rating = product.rating || 4.5
  const hasDiscount = product.originalPrice && product.originalPrice > product.price

  return (
    <div className="group relative product-card">
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-card rounded-sm mb-6 shadow-sm">
        <Link to={`/product/${product.id}`}>
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
              className="absolute inset-0 product-image-hover opacity-0 group-hover:opacity-100 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </Link>

        {/* Premium Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="badge-new text-xs px-3 py-1 font-medium tracking-wide border">
              NEW
            </Badge>
          )}
          {product.isSale && (
            <Badge className="badge-sale text-xs px-3 py-1 font-medium tracking-wide border">
              SALE
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="badge-premium text-xs px-3 py-1 font-medium tracking-wide border">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
            </Badge>
          )}
        </div>

        {/* Refined Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-md hover:bg-background hover:scale-110 shadow-lg border border-border/30"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart 
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-foreground hover:text-red-500'
              }`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-md hover:bg-background hover:scale-110 shadow-lg border border-border/30"
            onClick={(e) => {
              e.preventDefault()
              onQuickView?.(product)
            }}
          >
            <Eye className="h-4 w-4 text-foreground hover:text-primary transition-colors duration-300" />
          </Button>
        </div>

        {/* Elegant Quick Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1)">
          <Button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart?.(product)
            }}
            className="w-full h-12 bg-background/95 backdrop-blur-md text-foreground border border-border/30 hover:bg-foreground hover:text-background hover:scale-[1.02] transition-all duration-400 font-medium tracking-wide shadow-lg"
            variant="outline"
          >
            <ShoppingBag className="h-4 w-4 mr-3" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Premium Product Info */}
      <div className="space-y-3">
        {/* Material/Category */}
        <p className="text-xs text-muted-foreground font-light uppercase tracking-[0.1em] opacity-75">
          {product.material || '100% Premium Cotton'}
        </p>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-xl font-medium tracking-tight hover:text-primary transition-all duration-300 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Refined Rating */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 transition-colors duration-200 ${
                  star <= rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-light">({rating})</span>
        </div>

        {/* Premium Price Display */}
        <div className="flex items-baseline gap-3 pt-1">
          <span className="text-xl font-serif font-semibold tracking-tight">
            ${product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through font-light">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Elegant Color Options */}
        {product.colors && (
          <div className="flex items-center gap-2 pt-2">
            <div className="flex gap-1.5">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-5 h-5 rounded-full border-2 border-border hover:border-primary transition-colors duration-300 cursor-pointer hover:scale-110 transform"
                  style={{
                    backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                     color.toLowerCase() === 'black' ? '#1a1a1a' :
                                     color.toLowerCase() === 'grey' ? '#9ca3af' :
                                     color.toLowerCase() === 'blue' ? '#3b82f6' :
                                     color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                     color.toLowerCase() === 'red' ? '#ef4444' :
                                     color.toLowerCase() === 'cream' ? '#f5f5dc' :
                                     color.toLowerCase() === 'beige' ? '#e6ddd4' :
                                     color.toLowerCase() === 'camel' ? '#c19a6b' : '#6b7280'
                  }}
                />
              ))}
            </div>
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground font-light">
                +{product.colors.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard;