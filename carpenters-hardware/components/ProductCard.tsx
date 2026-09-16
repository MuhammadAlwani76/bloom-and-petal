"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-steel/20 bg-white">
      <Link href={`/product/${product.id}`} className="block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-rust">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading text-base font-semibold uppercase leading-snug hover:text-rust transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="flex-1 text-sm text-steel">{product.shortDescription}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-heading text-lg font-bold">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="rounded-sm bg-charcoal px-3 py-2 font-heading text-xs font-semibold uppercase tracking-wide text-concrete transition-colors hover:bg-amber hover:text-charcoal"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
