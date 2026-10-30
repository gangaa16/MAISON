"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { formatCurrency } from "@/lib/formatCurrency";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  return (
    <article className="group">
      <div className="relative aspect-3/4 overflow-hidden bg-[#eeece6]">
        <Link
          href={`/products/${product.id}`}
          className="block h-full w-full"
        >
          {/* Product image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 bg-[#faf9f6] px-3 py-2 text-[9px] tracking-widest">
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl transition ${
            isWishlisted
              ? "text-red-600"
              : "text-neutral-800 hover:text-red-600"
          }`}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {/* Add to bag */}
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-[#faf9f6] py-4 text-xs tracking-widest transition hover:bg-[#25251f] hover:text-white"
        >
          ADD TO BAG
        </button>
      </div>

      {/* Product information */}
      <div className="flex items-start justify-between gap-3 py-4">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm hover:underline">{product.name}</h3>
          </Link>

          <p className="mt-1 text-xs text-[#89867e]">
            {product.category}
          </p>
        </div>

        <p className="whitespace-nowrap text-sm">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}