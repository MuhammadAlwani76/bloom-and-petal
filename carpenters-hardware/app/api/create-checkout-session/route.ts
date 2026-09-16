import { type NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProductById } from "@/data/products";

interface CheckoutRequestItem {
  id: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  let body: { items?: CheckoutRequestItem[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const requestedItems = body.items ?? [];

  if (requestedItems.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const lineItems: Array<{
    price_data: {
      currency: string;
      unit_amount: number;
      product_data: { name: string; images: string[] };
    };
    quantity: number;
  }> = [];

  for (const requested of requestedItems) {
    const product = getProductById(requested.id);
    const quantity = Math.max(1, Math.floor(requested.quantity));

    if (!product || !Number.isFinite(quantity)) {
      return NextResponse.json(
        { error: `Invalid item in cart: ${requested.id}` },
        { status: 400 }
      );
    }

    lineItems.push({
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100),
        product_data: {
          name: product.name,
          images: [product.image],
        },
      },
      quantity,
    });
  }

  const origin = request.nextUrl.origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      integration_identifier: "carpentershw-jqzxvfbn",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 899, currency: "usd" },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 3 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed", err);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
