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
      <div className="relative aspect-[4/5] overflow-hidden bg-card rounded-xl mb-4 shadow-soft">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          )}
        </Link>

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Premium Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="text-xs px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white border-0 font-medium shadow-lg">
              New Arrival
            </Badge>
          )}
          {product.isSale && (
            <Badge className="text-xs px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white border-0 font-medium shadow-lg">
              Limited Sale
            </Badge>
          )}
          {hasDiscount && (
            <Badge className="text-xs px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0 font-medium shadow-lg">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
            </Badge>
          )}
        </div>

        {/* Premium Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-border/20 shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart 
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-foreground'
              }`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/95 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-border/20 shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              onQuickView?.(product)
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Premium Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out">
          <Button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart?.(product)
            }}
            className="w-full h-12 bg-primary/95 backdrop-blur-md text-primary-foreground hover:bg-primary border-0 rounded-xl font-medium shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
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