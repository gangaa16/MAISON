"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/formatCurrency";
import { useCart } from "@/context/CartContext";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6">
        <h1 className="font-serif text-3xl font-light">
          Product not found
        </h1>

        <Link
          href="/"
          className="mt-6 border-b border-black pb-1 text-sm"
        >
          Return to Home
        </Link>
      </main>
    );
  }

  const handleAddToBag = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and colour.");
      return;
    }

    addToCart(product, selectedSize, selectedColor, quantity);
    alert("Product added to your bag!");
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Back to home */}
        <Link
          href="/"
          className="text-sm text-[#77746d] transition hover:text-black"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* Product image */}
          <div className="h-112.5 overflow-hidden bg-[#eeece6] sm:h-150 md:h-162.5 lg:h-187.5">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center py-5">
            <p className="text-xs tracking-[0.2em] text-[#8b8173]">
              {product.category.toUpperCase()}
            </p>

            <h1 className="mt-4 font-serif text-3xl md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-xl">
              {formatCurrency(product.price)}
            </p>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#77746d]">
              {product.description}
            </p>

            {/* Colour selector */}
            <div className="mt-9">
              <p className="mb-4 text-sm">
                Colour:{" "}
                <span className="font-medium">
                  {selectedColor || "Select a colour"}
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    aria-pressed={selectedColor === color}
                    className={`border px-4 py-3 text-sm transition ${
                      selectedColor === color
                        ? "border-[#25251f] bg-[#25251f] text-white"
                        : "border-[#d6d2c9] hover:border-[#25251f]"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mt-8">
              <p className="mb-4 text-sm">
                Size:{" "}
                <span className="font-medium">
                  {selectedSize || "Select a size"}
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                    className={`flex h-12 min-w-12 items-center justify-center border px-4 text-sm transition ${
                      selectedSize === size
                        ? "border-[#25251f] bg-[#25251f] text-white"
                        : "border-[#d6d2c9] hover:border-[#25251f]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mt-8">
              <p className="mb-4 text-sm">Quantity</p>

              <div className="flex h-12 w-36 items-center justify-between border border-[#d6d2c9]">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="h-full flex-1 transition hover:bg-[#eeece6]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="text-sm">{quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="h-full flex-1 transition hover:bg-[#eeece6]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to bag */}
            <button
              type="button"
              onClick={handleAddToBag}
              className="mt-8 w-full bg-[#25251f] px-6 py-5 text-xs tracking-[0.2em] text-white transition hover:bg-[#45453d]"
            >
              ADD TO BAG — {formatCurrency(product.price * quantity)}
            </button>

            <p className="mt-5 text-xs leading-6 text-[#77746d]">
              Thoughtfully selected pieces for a more considered everyday.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}