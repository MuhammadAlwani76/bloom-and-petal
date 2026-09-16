import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <XCircle className="mx-auto h-16 w-16 text-rust" aria-hidden />
      <h1 className="mt-6 font-heading text-3xl font-bold uppercase tracking-wide">
        Checkout Canceled
      </h1>
      <p className="mt-4 text-steel">
        No worries &mdash; your cart is still saved. Head back whenever you&apos;re ready.
      </p>
      <Link
        href="/cart"
        className="mt-8 inline-block rounded-sm bg-charcoal px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-concrete hover:bg-amber hover:text-charcoal"
      >
        Return to Cart
      </Link>
    </div>
  );
}
