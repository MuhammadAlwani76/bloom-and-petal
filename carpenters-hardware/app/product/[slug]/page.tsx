import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import { categorySlug } from "@/data/categories";
import { formatPrice } from "@/lib/format";
import AddToCartControls from "@/components/AddToCartControls";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  return { title: product ? `${product.name} | Carpenters Hardware` : "Product Not Found" };
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href={`/shop?category=${categorySlug(product.category)}`}
        className="font-heading text-xs font-semibold uppercase tracking-wide text-steel hover:text-rust"
      >
        &larr; {product.category}
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="w-full rounded-sm object-cover"
          priority
        />

        <div>
          <h1 className="font-heading text-3xl font-bold uppercase leading-tight">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-steel">SKU: {product.sku}</p>
          <p className="mt-4 font-heading text-2xl font-bold text-rust">
            {formatPrice(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-steel">{product.description}</p>
          <p className="mt-2 text-sm font-semibold text-success">
            {product.stock > 0 ? `In stock: ${product.stock} available` : "Out of stock"}
          </p>

          <div className="mt-8">
            <AddToCartControls productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
