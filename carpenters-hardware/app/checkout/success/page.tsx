import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import ClearCartOnMount from "@/components/ClearCartOnMount";

export default async function CheckoutSuccessPage({
  searchParams,
}: PageProps<"/checkout/success">) {
  const params = await searchParams;
  const sessionId = typeof params.session_id === "string" ? params.session_id : undefined;

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <ClearCartOnMount />
      <CheckCircle2 className="mx-auto h-16 w-16 text-success" aria-hidden />
      <h1 className="mt-6 font-heading text-3xl font-bold uppercase tracking-wide">
        Order Confirmed
      </h1>
      <p className="mt-4 text-steel">
        Thanks for your order! A confirmation has been sent to your email. Your tools are
        headed your way.
      </p>
      {sessionId && (
        <p className="mt-2 text-xs text-steel">Reference: {sessionId}</p>
      )}
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-sm bg-charcoal px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-concrete hover:bg-amber hover:text-charcoal"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
