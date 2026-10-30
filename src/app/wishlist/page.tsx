"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { formatCurrency } from "@/lib/formatCurrency";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 border-b border-[#dedbd3] pb-7">
          <p className="mb-3 text-[10px] tracking-[0.3em] text-[#89867e]">
            YOUR PERSONAL COLLECTION
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl tracking-wide md:text-4xl">
                My Wishlist
              </h1>
              <p className="mt-3 text-sm text-[#89867e]">
                {wishlistItems.length === 1
                  ? "1 item saved for later"
                  : `${wishlistItems.length} items saved for later`}
              </p>
            </div>

            {wishlistItems.length > 0 && (
              <button
                type="button"
                onClick={clearWishlist}
                className="text-xs tracking-widest text-[#77736b] underline underline-offset-4 transition hover:text-black"
              >
                CLEAR WISHLIST
              </button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {wishlistItems.length === 0 ? (
          <div className="flex min-h-87.5 flex-col items-center justify-center text-center">
            <span className="mb-5 text-5xl text-[#b7b2a8]">♡</span>

            <h2 className="text-xl tracking-wide">
              Your wishlist is waiting
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#89867e]">
              Save the pieces you love and keep them together in one place.
            </p>

            <Link
              href="/"
              className="mt-8 bg-[#25251f] px-8 py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#44443b]"
            >
              EXPLORE MAISON
            </Link>
          </div>
        ) : (
          <>
            {/* Product grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
              {wishlistItems.map((product) => (
                <article key={product.id} className="group">
                  <div className="relative aspect-3/4 overflow-hidden bg-[#eeece6]">
                    <Link
                      href={`/products/${product.id}`}
                      className="block h-full w-full"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {product.badge && (
                      <span className="absolute left-3 top-3 bg-[#faf9f6] px-2 py-2 text-[8px] tracking-widest sm:px-3 sm:text-[9px]">
                        {product.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => removeFromWishlist(product.id)}
                      aria-label={`Remove ${product.name} from wishlist`}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-red-600 transition hover:bg-[#25251f] hover:text-white"
                    >
                      ♥
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-2 py-4">
                    <div>
                      <Link href={`/products/${product.id}`}>
                        <h2 className="text-sm transition hover:underline">
                          {product.name}
                        </h2>
                      </Link>

                      <p className="mt-1 text-xs text-[#89867e]">
                        {product.category}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-sm">
                      {formatCurrency(product.price)}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="block border border-[#25251f] py-3 text-center text-[10px] tracking-[0.18em] transition hover:bg-[#25251f] hover:text-white"
                  >
                    VIEW PRODUCT
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-14 border-t border-[#dedbd3] pt-8 text-center">
              <Link
                href="/"
                className="inline-block text-xs tracking-[0.2em] underline underline-offset-4 transition hover:text-[#89867e]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}