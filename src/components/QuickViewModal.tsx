import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingBag } from 'lucide-react'

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
}

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart?: (product: Product) => void
}

export function QuickViewModal({ product, isOpen, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')

  if (!product) return null

  const colors = product.colors || ['Black', 'White', 'Grey']
  const sizes = product.sizes || ['XS', 'S', 'M', 'L', 'XL']
  const rating = product.rating || 4.5

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Images */}
          <div className="relative aspect-[3/4] bg-muted/20">
            <img
              src={selectedColor === 1 && product.hoverImage ? product.hoverImage : product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Product Details */}
          <div className="p-8 space-y-6">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl tracking-tight">
                {product.name}
              </DialogTitle>
              <p className="text-sm text-muted-foreground font-light">
                {product.material || '100% Premium Cotton'}
              </p>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({rating})</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-display font-semibold">
              ${product.price}
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Color</h4>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`text-xs px-3 py-1 border rounded-full transition-all ${
                      selectedColor === index
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Size</h4>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs px-3 py-1 border rounded-full transition-all ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description || 'Crafted with premium materials and attention to detail. This piece embodies our philosophy of minimal luxury and timeless design.'}
            </p>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => {
                  onAddToCart?.(product)
                  onClose()
                }}
                className="flex-1 h-12"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Features */}
            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Free shipping over $100</span>
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}