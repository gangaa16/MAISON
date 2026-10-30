"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { products } from "@/data/products";
import { formatCurrency } from "@/lib/formatCurrency";
import CategorySidebar, {
  type CategoryFilters,
} from "@/components/categories/CategorySidebar";

const initialFilters: CategoryFilters = {
  sortBy: "recommended",
  categories: [],
  priceRange: "all",
  minRating: 0,
  sizes: [],
  colors: [],
};

const categoryInfo: Record<string, { title: string; description: string }> = {
  women: {
    title: "Women",
    description: "Effortless style. Timeless essentials.",
  },
  men: {
    title: "Men",
    description: "Modern essentials, made for every day.",
  },
  accessories: {
    title: "Accessories",
    description: "The finishing touches that make it yours.",
  },
  essentials: {
    title: "Essentials",
    description: "Considered pieces for everyday living.",
  },
};

export default function CategoryPage() {
  const params = useParams<{ category: string }>();
  const slug = params.category.toLowerCase();
  const info = categoryInfo[slug];

  const [filters, setFilters] = useState<CategoryFilters>(initialFilters);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      if (slug === "accessories") {
        return product.category === "Accessories";
      }

      if (slug === "essentials") {
        return product.category === "Essentials";
      }

      if (slug === "women" || slug === "men") {
        return (
          product.audience.toLowerCase() === slug ||
          product.audience === "Unisex"
        );
      }

      return false;
    });

    if (filters.categories.length) {
      result = result.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (filters.priceRange !== "all") {
      result = result.filter((product) => {
        if (filters.priceRange === "5000+") return product.price >= 5000;

        const [min, max] = filters.priceRange.split("-").map(Number);
        return product.price >= min && product.price <= max;
      });
    }

    if (filters.minRating > 0) {
      result = result.filter(
        (product) => product.rating >= filters.minRating
      );
    }

    if (filters.sizes.length) {
      result = result.filter((product) =>
        filters.sizes.some((size) => product.sizes.includes(size))
      );
    }

    if (filters.colors.length) {
      result = result.filter((product) =>
        filters.colors.some((color) => product.colors.includes(color))
      );
    }

    if (filters.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === "newest") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [slug, filters]);

  if (!info) {
    return (
      <main className="min-h-screen bg-[#faf9f6] p-10">
        <h1 className="text-2xl">Category not found</h1>
        <Link href="/" className="mt-4 inline-block underline">
          Return Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm text-[#77746d] hover:text-black">
          ← Home
        </Link>

        <header className="py-10 md:py-14">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#8b8173]">
            THE MAISON COLLECTION
          </p>

          <h1 className="font-serif text-4xl md:text-6xl">
            {info.title}
          </h1>

          <p className="mt-4 text-sm text-[#77746d]">
            {info.description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr]">
          <div>
            <h2 className="mb-5 text-xs tracking-[0.2em]">FILTER & SORT</h2>

            <CategorySidebar
              filters={filters}
              onChange={setFilters}
              onClear={() => setFilters(initialFilters)}
            />
          </div>

          <section>
            <div className="mb-6 flex items-center justify-between border-b border-[#e5e1d8] pb-4">
              <p className="text-sm">
                {filteredProducts.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg">No products found</p>
                <p className="mt-2 text-sm text-[#77746d]">
                  Try changing or clearing your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group"
                  >
                    <div className="aspect-3/4 overflow-hidden bg-[#eeece6]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-3 py-4">
                      <div>
                        <h3 className="text-sm">{product.name}</h3>
                        <p className="mt-1 text-xs text-[#89867e]">
                          {product.category}
                        </p>
                        <p className="mt-2 text-xs text-[#8b8173]">
                          ★ {product.rating.toFixed(1)}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-sm">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}