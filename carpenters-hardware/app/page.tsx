import Link from "next/link";
import { ArrowRight, Hammer, ShieldCheck, Truck } from "lucide-react";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="bg-charcoal text-concrete">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-amber">
            Built for the Job Site
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Pro-Grade Tools. Fair Prices. No Nonsense.
          </h1>
          <p className="max-w-xl text-lg text-steel">
            Carpenters stocks the tools, fasteners, and building materials contractors
            rely on every day &mdash; in stock, ready to go.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-white"
          >
            Shop All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-steel/20 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Hammer className="h-8 w-8 text-rust" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold uppercase">Trade Quality</p>
              <p className="text-sm text-steel">Tools built to outlast the job.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-rust" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold uppercase">Fast Fulfillment</p>
              <p className="text-sm text-steel">In-stock orders ship same day.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-rust" aria-hidden />
            <div>
              <p className="font-heading text-sm font-bold uppercase">Secure Checkout</p>
              <p className="text-sm text-steel">Payments processed safely by Stripe.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-wide">
          Shop by Category
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/shop?category=${c.slug}`}
              className="flex flex-col items-center gap-2 rounded-sm border border-steel/20 bg-white px-4 py-6 text-center transition-colors hover:border-rust"
            >
              <span className="font-heading text-sm font-semibold uppercase leading-tight">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide">
            Featured Products
          </h2>
          <div className="mt-6">
            <ProductGrid products={featured} />
          </div>
        </section>
      )}
    </div>
  );
}
