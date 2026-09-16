# Carpenters Hardware

An e-commerce site for a hardware store, built with Next.js (App Router) and Stripe Checkout.

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS v4)
- **Stripe Checkout** for payment (server-side session creation via a Route Handler, no card data touches this app)
- Product catalog lives in `data/products.ts` — a static array, no database
- Cart state via React Context (`context/CartContext.tsx`) + `localStorage`

## Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in your Stripe test keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stripe Setup

1. Create a free Stripe account (or a [sandbox](https://docs.stripe.com/sandboxes)) and grab test-mode API keys from the [dashboard](https://dashboard.stripe.com/test/apikeys). A restricted key (`rk_test_...`) scoped to Checkout Sessions is preferred over the full secret key.
2. Put `STRIPE_SECRET_KEY` in `.env.local`.
3. For webhooks (required before going live — see below), run the Stripe CLI locally:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
   Copy the `whsec_...` value it prints into `STRIPE_WEBHOOK_SECRET`.
4. Test checkout with card `4242 4242 4242 4242`, any future expiry, any CVC/ZIP.

### Webhook handler

`app/api/webhooks/stripe/route.ts` handles `checkout.session.completed` and `checkout.session.async_payment_succeeded` (gated on `payment_status`), which is where order fulfillment (confirmation emails, inventory updates, writing orders to a database) should be wired up. **Do not remove this** — the success page (`/checkout/success`) only clears the local cart; it is not a reliable fulfillment signal, since a customer can pay successfully and never load that page.

In production, register the endpoint at `https://<your-domain>/api/webhooks/stripe` in the [Stripe Dashboard](https://dashboard.stripe.com/webhooks) and set `STRIPE_WEBHOOK_SECRET` to that endpoint's signing secret.

## Project Structure

```
app/
  page.tsx                       # Home
  shop/page.tsx                  # Catalog + category filter
  product/[slug]/page.tsx        # Product detail
  cart/page.tsx                  # Cart
  checkout/success, checkout/cancel
  api/create-checkout-session    # Creates the Stripe Checkout Session
  api/webhooks/stripe            # Stripe webhook handler (fulfillment)
components/                      # UI components
context/CartContext.tsx          # Cart state (Context + localStorage)
data/products.ts, data/categories.ts
lib/stripe.ts, lib/format.ts
types/product.ts
```

## Not Yet Built (v1 scope)

User accounts, order history, admin/inventory management, product search, reviews, real inventory reservation, multi-currency, discount codes, and itemized/multi-rate shipping are out of scope for v1. Product images are placeholders (`placehold.co`) — swap `data/products.ts` `image` fields for real photography before launch.

## Deployment

Deploy as a separate Vercel project with **Root Directory** set to `carpenters-hardware/`, and set `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` (production values) in that project's Environment Variables.
