"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AddToCartControls({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(productId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 rounded-sm border border-steel/30">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="p-3 hover:text-rust"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-heading text-sm font-semibold">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
          className="p-3 hover:text-rust"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="flex-1 rounded-sm bg-charcoal px-6 py-3 font-heading text-sm font-bold uppercase tracking-wide text-concrete transition-colors hover:bg-amber hover:text-charcoal"
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
