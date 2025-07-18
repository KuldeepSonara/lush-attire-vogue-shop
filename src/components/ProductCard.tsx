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
    <div className="group relative editorial-card" style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Hero Product Image - Full Width, No Borders */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

        {/* Single Badge - Top Left */}
        {(product.isNew || product.isSale || hasDiscount) && (
          <div className="absolute top-4 left-4 z-10">
            {product.isNew ? (
              <span className="px-3 py-1 bg-black text-white text-xs font-medium tracking-wide rounded-full">
                NEW
              </span>
            ) : product.isSale ? (
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium tracking-wide rounded-full">
                LIMITED
              </span>
            ) : hasDiscount ? (
              <span className="px-3 py-1 bg-emerald-700 text-white text-xs font-medium tracking-wide rounded-full">
                SALE
              </span>
            ) : null}
          </div>
        )}

        {/* Favorite Heart - Top Right, No Border */}
        <div className="absolute top-4 right-4 z-10">
          <button
            className="p-2 transition-transform duration-200 hover:scale-110"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart 
              className={`h-5 w-5 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700 hover:text-red-400'
              }`} 
            />
          </button>
        </div>

        {/* Quick View - Center on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <Button
            onClick={(e) => {
              e.preventDefault()
              onQuickView?.(product)
            }}
            className="px-6 py-2 bg-white text-black hover:bg-gray-100 font-medium tracking-wide transition-all duration-200"
            style={{ borderRadius: '2px' }}
          >
            QUICK VIEW
          </Button>
        </div>
      </div>

      {/* Product Info - Generous Spacing */}
      <div className="px-2 py-6 space-y-4">
        {/* Material Label - Thin Sans Serif, Faded */}
        <p className="text-xs text-muted-foreground font-normal tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          {product.material || '100% PREMIUM COTTON'}
        </p>

        {/* Product Title - Bold Serif, Capitalized */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors leading-tight tracking-tight" style={{ textTransform: 'capitalize' }}>
            {product.name}
          </h3>
        </Link>

        {/* Rating - Soft Star Icons */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">({rating})</span>
        </div>

        {/* Price - Large, Generous Spacing */}
        <div className="flex items-baseline gap-3 py-2">
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif', color: '#4B3621' }}>
            ${product.price}
          </span>
          {hasDiscount && (
            <span className="text-lg text-muted-foreground line-through font-medium">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Swatches - Clean Dots with Thin Outlines */}
        {product.colors && (
          <div className="flex gap-3 py-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full border border-gray-300 hover:scale-110 transition-all duration-200 hover:shadow-md"
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
              <span className="text-sm text-muted-foreground font-medium ml-2 self-center">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Add to Bag - Minimalist Full-Width, Mocha Brown */}
        <Button
          onClick={(e) => {
            e.preventDefault()
            onAddToCart?.(product)
          }}
          className="w-full mt-6 py-3 text-white font-medium tracking-wide transition-all duration-300 hover:brightness-110"
          style={{ 
            backgroundColor: '#4B3621',
            borderRadius: '2px',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          ADD TO BAG
        </Button>
      </div>
    </div>
  )
}

export default ProductCard;