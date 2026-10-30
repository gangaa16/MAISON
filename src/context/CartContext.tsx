"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cartItems: CartItem[];
  itemCount: number;
  addToCart: (
    product: Product,
    size: string,
    color: string,
    quantity?: number
  ) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (
    id: number,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "maison-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);

      if (!savedCart) return [];

      const parsedCart: unknown = JSON.parse(savedCart);
      return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
    } catch (error) {
      console.error("Failed to load the cart:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save the cart:", error);
    }
  }, [cartItems]);

  const addToCart = useCallback(
    (
      product: Product,
      size: string,
      color: string,
      quantity = 1
    ) => {
      if (quantity < 1) return;

      setCartItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) =>
            item.product.id === product.id &&
            item.size === size &&
            item.color === color
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.product.id === product.id &&
            item.size === size &&
            item.color === color
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [
          ...currentItems,
          { product, size, color, quantity },
        ];
      });
    },
    []
  );

  const removeFromCart = useCallback(
    (id: number, size: string, color: string) => {
      setCartItems((currentItems) =>
        currentItems.filter(
          (item) =>
            !(
              item.product.id === id &&
              item.size === size &&
              item.color === color
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (id: number, size: string, color: string, quantity: number) => {
      if (quantity < 1) {
        removeFromCart(id, size, color);
        return;
      }

      setCartItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === id &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}