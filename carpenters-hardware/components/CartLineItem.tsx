"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function CartLineItem({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 border-b border-steel/20 py-4">
      <Link href={`/product/${product.id}`} className="shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          className="h-20 w-20 rounded-sm object-cover"
        />
      </Link>

      <div className="flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading text-sm font-semibold uppercase hover:text-rust transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-steel">{formatPrice(product.price)} each</p>
      </div>

      <div className="flex items-center gap-2 rounded-sm border border-steel/30">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="p-2 hover:text-rust"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-heading text-sm font-semibold">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="p-2 hover:text-rust"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <span className="w-20 text-right font-heading text-sm font-bold">
        {formatPrice(product.price * quantity)}
      </span>

      <button
        type="button"
        aria-label="Remove item"
        onClick={() => removeItem(product.id)}
        className="p-2 text-steel hover:text-rust"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
