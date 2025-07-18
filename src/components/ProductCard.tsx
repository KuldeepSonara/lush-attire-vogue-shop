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
    <div className="group relative bg-card rounded-xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Product Image Container - Full Edge to Edge */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          )}
        </Link>

        {/* Premium Pill Badges - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs font-medium rounded-full shadow-lg">
              New
            </span>
          )}
          {product.isSale && (
            <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-medium rounded-full shadow-lg">
              Limited
            </span>
          )}
          {hasDiscount && (
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-xs font-medium rounded-full shadow-lg">
              -{Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% Off
            </span>
          )}
        </div>

        {/* Heart Icon - Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white border-0 shadow-lg transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart 
              className={`h-4 w-4 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600'
              }`} 
            />
          </Button>
        </div>

        {/* Quick View Button - Center Bottom (appears on hover) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
          <Button
            onClick={(e) => {
              e.preventDefault()
              onQuickView?.(product)
            }}
            className="px-6 py-2 bg-white/95 text-gray-900 hover:bg-white border-0 rounded-full font-medium shadow-xl transition-all duration-300 hover:scale-105"
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-4 space-y-3">
        {/* Material Label - Small Text */}
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {product.material || '100% Premium Cotton'}
        </p>

        {/* Product Title - Serif Font */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-foreground hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Star Rating - Minimalist */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">({rating})</span>
        </div>

        {/* Price with Strikethrough */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-display font-bold text-foreground">
            ${product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through font-medium">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Swatches - Dot Style with Hover Scale */}
        {product.colors && (
          <div className="flex gap-2 pt-1">
            {product.colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-200 hover:scale-110 transition-transform duration-200 shadow-sm"
                style={{
                  backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                                   color.toLowerCase() === 'black' ? '#000000' :
                                   color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#9ca3af' :
                                   color.toLowerCase() === 'charcoal' ? '#374151' :
                                   color.toLowerCase() === 'blue' ? '#3b82f6' :
                                   color.toLowerCase() === 'red' ? '#ef4444' : '#6b7280'
                }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-muted-foreground font-medium ml-1 self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Add to Bag Button */}
        <Button
          onClick={(e) => {
            e.preventDefault()
            onAddToCart?.(product)
          }}
          className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-11 font-medium transition-all duration-300 hover:shadow-lg"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Bag
        </Button>
      </div>
    </div>
  )
}

export default ProductCard;