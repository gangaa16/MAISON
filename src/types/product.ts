export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  badge?: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  audience: "Women" | "Men" | "Unisex";
}