"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";

export default function CartPage() {
  const {
    cartItems,
    itemCount,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const shipping = subtotal === 0 || subtotal >= 2000 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-white px-5 py-12 text-neutral-900 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-10 border-b border-neutral-200 pb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            MAISON / YOUR BAG
          </p>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-3xl font-light tracking-tight sm:text-4xl">
              Shopping Bag
            </h1>

            <p className="text-sm text-neutral-500">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty cart */
          <div className="flex min-h-100 flex-col items-center justify-center py-16 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7h12l1 14H5L6 7Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V6a3 3 0 0 1 6 0v3"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-light">
              Your bag is currently empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
              Discover thoughtfully selected pieces designed for everyday
              living.
            </p>

            <Link
              href="/categories/women"
              className="mt-8 bg-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_360px]">
            {/* Cart items */}
            <section aria-label="Shopping bag items">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-sm font-medium uppercase tracking-[0.15em]">
                  Your Selection
                </h2>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-neutral-500 underline underline-offset-4 transition hover:text-black"
                >
                  Clear bag
                </button>
              </div>

              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {cartItems.map((item) => (
                  <article
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-4 py-6 sm:gap-6"
                  >
                    {/* Product image */}
                    <Link
                      href={`/products/${item.product.id}`}
                      className="relative h-36 w-28 shrink-0 overflow-hidden bg-neutral-100 sm:h-44 sm:w-36"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="(max-width: 640px) 112px, 144px"
                        className="object-cover"
                      />
                    </Link>

                    {/* Product details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                              {item.product.category}
                            </p>

                            <Link
                              href={`/products/${item.product.id}`}
                              className="mt-2 block text-sm font-medium sm:text-base"
                            >
                              {item.product.name}
                            </Link>
                          </div>

                          <p className="whitespace-nowrap text-sm">
                            {formatCurrency(
                              item.product.price * item.quantity
                            )}
                          </p>
                        </div>

                        <div className="mt-3 space-y-1 text-xs text-neutral-500">
                          <p>Colour: {item.color}</p>
                          <p>Size: {item.size}</p>
                          <p>
                            Unit price: {formatCurrency(item.product.price)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity controls */}
                        <div className="flex h-9 items-center border border-neutral-200">
                          <button
                            type="button"
                            aria-label={`Decrease quantity of ${item.product.name}`}
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="flex h-full w-9 items-center justify-center text-lg transition hover:bg-neutral-100"
                          >
                            −
                          </button>

                          <span
                            aria-label="Quantity"
                            className="min-w-8 text-center text-xs"
                          >
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Increase quantity of ${item.product.name}`}
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="flex h-full w-9 items-center justify-center text-lg transition hover:bg-neutral-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(
                              item.product.id,
                              item.size,
                              item.color
                            )
                          }
                          className="text-xs text-neutral-500 underline underline-offset-4 transition hover:text-black"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="/categories/women"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-600 transition hover:text-black"
              >
                <span aria-hidden="true">←</span>
                Continue shopping
              </Link>
            </section>

            {/* Order summary */}
            <aside className="border border-neutral-200 p-6 sm:p-8">
              <h2 className="text-sm font-medium uppercase tracking-[0.15em]">
                Order Summary
              </h2>

              <div className="mt-7 space-y-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">
                    Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                  </span>

                  <span>{formatCurrency(subtotal)}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-neutral-500">Shipping</span>

                  <span>
                    {shipping === 0 ? "Free" : formatCurrency(shipping)}
                  </span>
                </div>

                <p className="border-t border-neutral-200 pt-4 text-xs leading-5 text-neutral-500">
                  {subtotal >= 2000
                    ? "Your order qualifies for free shipping."
                    : `Spend ${formatCurrency(
                        2000 - subtotal
                      )} more to qualify for free shipping.`}
                </p>

                <div className="flex justify-between gap-4 border-t border-neutral-200 pt-5">
                  <span className="font-medium">Total</span>

                  <span className="text-base font-medium">
                    {formatCurrency(total)}
                  </span>
                </div>

                <p className="text-xs leading-5 text-neutral-500">
                  Taxes are included where applicable. Final charges will be
                  confirmed at checkout.
                </p>
              </div>

              <button
                type="button"
                disabled
                title="Checkout will be enabled when we build the checkout flow."
                className="mt-8 w-full cursor-not-allowed bg-neutral-300 px-5 py-4 text-xs uppercase tracking-[0.2em] text-neutral-600"
              >
                Checkout — Coming Soon
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect x="5" y="10" width="14" height="11" rx="1" />
                  <path
                    strokeLinecap="round"
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                  />
                </svg>

                Secure checkout coming soon
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}