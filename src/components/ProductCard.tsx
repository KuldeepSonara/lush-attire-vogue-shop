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
    <div className="group relative">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-lg mb-4">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge variant="secondary" className="text-xs px-2 py-1 bg-background/90 backdrop-blur-sm">
              New
            </Badge>
          )}
          {product.isSale && (
            <Badge variant="destructive" className="text-xs px-2 py-1">
              Sale
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="secondary" className="text-xs px-2 py-1 bg-background/90 backdrop-blur-sm">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'
              }`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.preventDefault()
              onQuickView?.(product)
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart - Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <Button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart?.(product)
            }}
            className="w-full h-11 bg-background/90 backdrop-blur-sm text-foreground border border-border hover:bg-foreground hover:text-background transition-all duration-300"
            variant="outline"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Material/Category */}
        <p className="text-xs text-muted-foreground font-light uppercase tracking-wider">
          {product.material || '100% Premium Cotton'}
        </p>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-medium tracking-tight hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 ${
                  star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-display font-semibold">
            ${product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Options Preview */}
        {product.colors && (
          <div className="flex gap-1 pt-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-border"
                style={{
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                   color.toLowerCase() === 'black' ? '#000000' :
                                   color.toLowerCase() === 'grey' ? '#9ca3af' :
                                   color.toLowerCase() === 'blue' ? '#3b82f6' :
                                   color.toLowerCase() === 'red' ? '#ef4444' : '#6b7280'
                }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard;