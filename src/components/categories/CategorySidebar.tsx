"use client";

export interface CategoryFilters {
  sortBy: string;
  categories: string[];
  priceRange: string;
  minRating: number;
  sizes: string[];
  colors: string[];
}

interface CategorySidebarProps {
  filters: CategoryFilters;
  onChange: (filters: CategoryFilters) => void;
  onClear: () => void;
}

export default function CategorySidebar({
  filters,
  onChange,
  onClear,
}: CategorySidebarProps) {
  function toggleValue(
    key: "categories" | "sizes" | "colors",
    value: string
  ) {
    const current = filters[key];

    onChange({
      ...filters,
      [key]: current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    });
  }

  return (
    <aside className="space-y-8">
      {/* Sort */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Sort By</h3>

        <select
          value={filters.sortBy}
          onChange={(e) =>
            onChange({ ...filters, sortBy: e.target.value })
          }
          className="w-full border border-[#d6d2c9] bg-transparent p-3 text-sm"
        >
          <option value="recommended">Recommended</option>
          <option value="newest">Newest Arrivals</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </section>

      {/* Category */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Category</h3>

        {["Clothing", "Accessories", "Essentials"].map((category) => (
          <label
            key={category}
            className="mb-3 flex cursor-pointer items-center gap-3 text-sm"
          >
            <input
              type="checkbox"
              checked={filters.categories.includes(category)}
              onChange={() => toggleValue("categories", category)}
              className="accent-[#25251f]"
            />
            {category}
          </label>
        ))}
      </section>

      {/* Price */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Price Range</h3>

        <select
          value={filters.priceRange}
          onChange={(e) =>
            onChange({ ...filters, priceRange: e.target.value })
          }
          className="w-full border border-[#d6d2c9] bg-transparent p-3 text-sm"
        >
          <option value="all">All Prices</option>
          <option value="0-999">Under ₹1,000</option>
          <option value="1000-1999">₹1,000 – ₹1,999</option>
          <option value="2000-4999">₹2,000 – ₹4,999</option>
          <option value="5000+">₹5,000+</option>
        </select>
      </section>

      {/* Rating */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Customer Rating</h3>

        {[4, 3, 2].map((rating) => (
          <label
            key={rating}
            className="mb-3 flex cursor-pointer items-center gap-3 text-sm"
          >
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === rating}
              onChange={() =>
                onChange({ ...filters, minRating: rating })
              }
              className="accent-[#25251f]"
            />
            <span>{"★".repeat(rating)} & above</span>
          </label>
        ))}

        <button
          type="button"
          onClick={() => onChange({ ...filters, minRating: 0 })}
          className="mt-1 text-xs text-[#77746d] underline"
        >
          Any rating
        </button>
      </section>

      {/* Size */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Size</h3>

        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => toggleValue("sizes", size)}
              className={`h-10 min-w-10 border px-3 text-xs ${
                filters.sizes.includes(size)
                  ? "border-[#25251f] bg-[#25251f] text-white"
                  : "border-[#d6d2c9]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </section>

      {/* Colour */}
      <section>
        <h3 className="mb-4 text-sm font-medium">Colour</h3>

        {["Black", "White", "Beige", "Brown", "Blue", "Grey"].map(
          (color) => (
            <label
              key={color}
              className="mb-3 flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={filters.colors.includes(color)}
                onChange={() => toggleValue("colors", color)}
                className="accent-[#25251f]"
              />
              {color}
            </label>
          )
        )}
      </section>

      <button
        type="button"
        onClick={onClear}
        className="w-full border border-[#25251f] py-3 text-xs tracking-widest transition hover:bg-[#25251f] hover:text-white"
      >
        CLEAR FILTERS
      </button>
    </aside>
  );
}