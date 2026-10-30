import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "The Everyday Blazer",
    category: "Clothing",
    price: 1299,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85",
    description:
      "A timeless tailored blazer designed for effortless everyday styling.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Beige", "Brown"],
    rating: 4.5,
    audience: "Women",
  },
  {
    id: 2,
    name: "The Studio Overshirt",
    category: "Clothing",
    price: 1490,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=85",
    description:
      "An elevated overshirt with a relaxed fit, tailored for everyday layers.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Stone"],
    rating: 4.3,
    audience: "Men",
  },
  {
    id: 3,
    name: "The Quiet Leather Tote",
    category: "Accessories",
    price: 1899,
    badge: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Structured everyday leather tote with a polished silhouette and deep storage.",
    sizes: ["One Size"],
    colors: ["Black", "Tan", "Espresso"],
    rating: 4.8,
    audience: "Unisex",
  },
  {
    id: 4,
    name: "The Everyday Wool Scarf",
    category: "Accessories",
    price: 750,
    badge: "TOP PICK",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
    description:
      "A soft wool scarf that layers beautifully from crisp mornings to late evenings.",
    sizes: ["One Size"],
    colors: ["Cream", "Grey", "Forest"],
    rating: 4.6,
    audience: "Unisex",
  },
  {
    id: 5,
    name: "The Signature Cotton Tee",
    category: "Essentials",
    price: 899,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description:
      "A soft, heavyweight cotton tee designed to be your everyday uniform.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blue"],
    rating: 4.4,
    audience: "Unisex",
  },
  {
    id: 6,
    name: "The Tailored Pleat Trouser",
    category: "Clothing",
    price: 2199,
    badge: "EDITOR'S PICK",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined trouser with structure, ease, and an effortlessly polished finish.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Stone", "Taupe"],
    rating: 4.7,
    audience: "Women",
  },
  {
    id: 7,
    name: "The Atlas Work Bag",
    category: "Accessories",
    price: 2499,
    badge: "NEW SEASON",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    description:
      "A versatile work-ready bag with clean lines, generous space, and everyday utility.",
    sizes: ["One Size"],
    colors: ["Black", "Sand", "Grey"],
    rating: 4.5,
    audience: "Men",
  },
  {
    id: 8,
    name: "The Soft Knit Polo",
    category: "Essentials",
    price: 1399,
    badge: "CLASSIC",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    description:
      "An easy knit polo for refined casual dressing, from morning to evening.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Forest"],
    rating: 4.2,
    audience: "Men",
  },
];
