import type { Product } from "./Product";

export type CartProduct = {
  product: Product;
  qty: number;
  size: number;
};
