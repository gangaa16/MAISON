"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const navItems = [
  { label: "Women", href: "/categories/women" },
  { label: "Men", href: "/categories/men" },
  { label: "Accessories", href: "/categories/accessories" },
  { label: "Essentials", href: "/categories/essentials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { itemCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="border-b border-[#e7e2d8] bg-[#faf9f6]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="text-lg tracking-[0.3em] text-[#25251f]">
          MAISON
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] tracking-[0.22em] text-[#4e4a45] transition hover:text-[#25251f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            aria-label={`Wishlist, ${wishlistCount} saved ${
              wishlistCount === 1 ? "product" : "products"
            }`}
            className="relative flex items-center justify-center text-[#25251f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20.5s-7.5-4.35-9.5-8.6C1.3 9.3 3.2 5 7.5 5c2.2 0 3.5 1.2 4.5 2.4A6.2 6.2 0 0 1 16.5 5c4.3 0 6.2 4.3 5 6.9-2 4.25-9.5 8.6-9.5 8.6Z" />
            </svg>

            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#25251f] px-1 text-[9px] text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Shopping bag */}
          <Link
            href="/cart"
            aria-label={`Shopping bag, ${itemCount} ${
              itemCount === 1 ? "item" : "items"
            }`}
            className="relative flex items-center justify-center text-[#25251f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 8h12l-1 11H7L6 8Z" />
              <path d="M9 8V7a3 3 0 0 1 6 0v1" />
            </svg>

            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#25251f] px-1 text-[9px] text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link
            href="/account"
            aria-label="Profile"
            className="flex items-center justify-center text-[#25251f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 19a8 8 0 0 1 16 0" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d0c3] text-[#25251f] md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
                  isMenuOpen ? "opacity-0" : "top-1.5 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all ${
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="border-t border-[#e7e2d8] bg-[#faf9f6] px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm tracking-[0.2em] text-[#25251f]"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm tracking-[0.2em] text-[#25251f]"
              >
                Wishlist ({wishlistCount})
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}