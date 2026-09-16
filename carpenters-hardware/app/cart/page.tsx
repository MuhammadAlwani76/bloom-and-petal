"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/format";
import CartLineItem from "@/components/CartLineItem";

export default function CartPage() {
  const { items, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lineItems = items
    .map((i) => ({ item: i, product: getProductById(i.productId) }))
    .filter((x): x is { item: typeof x.item; product: NonNullable<typeof x.product> } =>
      Boolean(x.product)
    );

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({ id: i.productId, quantity: i.quantity })),
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to start checkout. Please try again.");
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Unable to start checkout. Please try again.");
      }
    } catch {
      setError("Something went wrong starting checkout. Please try again.");
      setLoading(false);
    }
  }

  if (lineItems.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="font-heading text-2xl font-bold uppercase">Your cart is empty</h1>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-sm bg-charcoal px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-concrete hover:bg-amber hover:text-charcoal"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="font-heading text-3xl font-bold uppercase tracking-wide">Your Cart</h1>

      <div className="mt-8">
        {lineItems.map(({ item, product }) => (
          <CartLineItem key={item.productId} product={product} quantity={item.quantity} />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4 border-t-2 border-charcoal pt-6">
        <div className="flex w-full max-w-xs items-center justify-between font-heading text-lg font-bold">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <p className="text-xs text-steel">Shipping and any applicable tax calculated at checkout.</p>
        {error && <p className="text-sm font-semibold text-rust">{error}</p>}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="w-full max-w-xs rounded-sm bg-charcoal px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-concrete transition-colors hover:bg-amber hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Redirecting to Checkout..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}
