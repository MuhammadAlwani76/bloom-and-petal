import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-concrete mt-16 border-t-4 border-amber">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-heading text-lg font-bold uppercase tracking-wide">
            Carpenters
          </p>
          <p className="mt-2 text-sm text-steel">
            Pro-grade tools and building supplies for the job site.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-amber">
            Shop by Category
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop?category=${c.slug}`} className="hover:text-amber transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-amber">
            Store
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-amber transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-steel px-4 py-4 text-center text-xs text-steel sm:px-6">
        &copy; {new Date().getFullYear()} Carpenters Hardware. Built for the job site.
      </div>
    </footer>
  );
}
