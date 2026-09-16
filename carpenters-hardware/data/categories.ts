import type { Category } from "@/types/product";

export const categories: { name: Category; slug: string; icon: string }[] = [
  { name: "Power Tools", slug: "power-tools", icon: "Drill" },
  { name: "Hand Tools", slug: "hand-tools", icon: "Hammer" },
  { name: "Fasteners & Hardware", slug: "fasteners-hardware", icon: "Bolt" },
  { name: "Lumber & Building Materials", slug: "lumber-building-materials", icon: "Ruler" },
  { name: "Safety Gear", slug: "safety-gear", icon: "HardHat" },
  { name: "Paint & Finishing", slug: "paint-finishing", icon: "PaintRoller" },
];

export function categorySlug(name: Category): string {
  return categories.find((c) => c.name === name)?.slug ?? "";
}

export function categoryFromSlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)?.name;
}
