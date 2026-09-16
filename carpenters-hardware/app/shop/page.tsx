import type { Metadata } from "next";
import { products } from "@/data/products";
import { categoryFromSlug } from "@/data/categories";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";

export const metadata: Metadata = {
  title: "Shop | Carpenters Hardware",
};

export default async function ShopPage({ searchParams }: PageProps<"/shop">) {
  const params = await searchParams;
  const categorySlug =
    typeof params.category === "string" ? params.category : undefined;
  const category = categorySlug ? categoryFromSlug(categorySlug) : undefined;

  const visibleProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wide">
        {category ?? "All Products"}
      </h1>
      <div className="mt-6">
        <CategoryFilter activeSlug={categorySlug} />
      </div>
      <div className="mt-8">
        <ProductGrid products={visibleProducts} />
      </div>
    </div>
  );
}
