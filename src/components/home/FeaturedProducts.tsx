"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  function handleAddToCart() {
    setCartCount((count) => count + 1);
  }

  return (
    <section
      id="new-arrivals"
      className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[0.2em] text-[#8b8173]">
            THE EDIT
          </p>
          <h2 className="text-3xl font-light md:text-4xl">
            Selected for you
          </h2>
          <p className="mt-3 text-sm text-[#77746d]">
            Considered pieces for everyday living.
          </p>
        </div>

        <label className="block">
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full border-b border-[#bdb8ad] bg-transparent px-1 py-3 text-sm outline-none focus:border-[#25251f] sm:w-56"
          />
        </label>
      </div>

      <div className="mb-6 text-xs text-[#77746d]">
        Bag items: {cartCount}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-sm text-[#77746d]">
          No products found. Try another search.
        </p>
      )}
    </section>
  );
}