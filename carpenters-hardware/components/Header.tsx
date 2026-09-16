"use client";

import Link from "next/link";
import { Hammer, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="bg-charcoal text-concrete sticky top-0 z-40 border-b-4 border-amber">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-wide uppercase">
          <Hammer className="h-6 w-6 text-amber" aria-hidden />
          Carpenters
        </Link>

        <nav className="hidden items-center gap-8 font-heading text-sm font-semibold tracking-wider uppercase sm:flex">
          <Link href="/" className="hover:text-amber transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-amber transition-colors">
            Shop
          </Link>
        </nav>

        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-sm bg-steel px-3 py-2 font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-amber hover:text-charcoal"
        >
          <ShoppingCart className="h-5 w-5" aria-hidden />
          <span className="hidden sm:inline">Cart</span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rust px-1 text-xs font-bold text-concrete">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      <nav className="flex items-center gap-6 border-t border-steel px-4 py-2 font-heading text-sm font-semibold tracking-wider uppercase sm:hidden">
        <Link href="/" className="hover:text-amber transition-colors">
          Home
        </Link>
        <Link href="/shop" className="hover:text-amber transition-colors">
          Shop
        </Link>
      </nav>
    </header>
  );
}
