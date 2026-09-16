import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/shop"
        className={`rounded-full px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
          !activeSlug
            ? "bg-charcoal text-concrete"
            : "bg-white text-charcoal border border-steel/30 hover:border-charcoal"
        }`}
      >
        All Products
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={`/shop?category=${c.slug}`}
          className={`rounded-full px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
            activeSlug === c.slug
              ? "bg-charcoal text-concrete"
              : "bg-white text-charcoal border border-steel/30 hover:border-charcoal"
          }`}
        >
          {c.name}
        </Link>
      ))}
    </div>
  );
}
