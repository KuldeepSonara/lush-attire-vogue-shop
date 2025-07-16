interface FilterSidebarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterSidebar = ({ selectedFilter, onFilterChange }: FilterSidebarProps) => {
  const filters = [
    { id: 'all', label: 'All Items' },
    { id: 'tees', label: 'T-Shirts & Tops' },
    { id: 'sweats', label: 'Sweatshirts' },
    { id: 'bottoms', label: 'Bottoms' },
    { id: 'outerwear', label: 'Outerwear' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const priceRanges = [
    'Under $100',
    '$100 - $200',
    '$200 - $300',
    'Over $300'
  ];

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-display text-lg font-medium mb-6 tracking-tight">
          Categories
        </h3>
        <div className="space-y-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`block w-full text-left py-2 text-sm font-light transition-colors duration-200 ${
                selectedFilter === filter.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-display text-lg font-medium mb-6 tracking-tight">
          Size
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className="border border-border py-2 px-3 text-sm font-light hover:border-primary transition-colors duration-200"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-display text-lg font-medium mb-6 tracking-tight">
          Price Range
        </h3>
        <div className="space-y-3">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="mr-3 rounded border-border"
              />
              <span className="text-sm font-light text-muted-foreground">
                {range}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-display text-lg font-medium mb-6 tracking-tight">
          Color
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {['#000000', '#ffffff', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#525252', '#171717'].map((color, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-full border border-border hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;