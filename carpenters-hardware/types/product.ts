export type Category =
  | "Power Tools"
  | "Hand Tools"
  | "Fasteners & Hardware"
  | "Lumber & Building Materials"
  | "Safety Gear"
  | "Paint & Finishing";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  sku: string;
  stock: number;
  featured?: boolean;
}
