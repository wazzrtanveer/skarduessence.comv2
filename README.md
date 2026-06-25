# Skardu Essence - Premium Himalayan Treasures

A clean, modern e-commerce platform for Skardu Essence, inspired by the minimalist design language of Tesla and SpaceX. Built with Astro and Tailwind CSS v4. Developed by wazzrtanveer.

## Features

- **Tesla-Inspired Design:** Full-bleed photographic heroes, minimal UI chrome, and industrial typography.
- **Static First:** Optimized for deployment on Cloudflare Pages (Static mode).
- **Client-Side Cart:** Persistent cart management using `nanostores` and `localStorage`.
- **Stripe Integration:** Client-only Stripe Checkout for secure payments.
- **Responsive:** Fully optimized for all device sizes.
- **Web3Forms:** Serverless contact form integration.

## Getting Started

### Prerequisites

- Node.js (>= 22.12.0)
- NPM or PNPM

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Configuration

### Adding Products

Products are managed in `src/data/products.js`. Each product object requires:
- `id`: Unique slug
- `name`: Display name
- `description`: Product details
- `price`: Numeric price
- `image`: URL to product image
- `stripePriceId`: The Price ID from your Stripe Dashboard
- `category`: Product category

### Stripe Setup

1. Create products and prices in your [Stripe Dashboard](https://dashboard.stripe.com/).
2. Copy your **Publishable Key**.
3. Update the `STRIPE_PUBLISHABLE_KEY` constant in `src/pages/cart.astro`.
4. Ensure the `stripePriceId` for each product in `src/data/products.js` matches your Stripe prices.

### Contact Form (Web3Forms)

1. Get a free Access Key from [Web3Forms](https://web3forms.com/).
2. Update the `access_key` hidden input in `src/pages/contact.astro`.

## Deployment (Cloudflare Pages)

This project is configured for **Static Output**.

1. Connect your GitHub repository to Cloudflare Pages.
2. Use the following build settings:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Build Output Directory:** `dist`
3. Environment variables (optional): Set `STRIPE_PUBLISHABLE_KEY` if you choose to use an `.env` file (currently hardcoded for simplicity).

## Design System

The design system is based on `DESIGN.md`, emphasizing:
- **Typography:** D-DIN-Bold (Display) and D-DIN (Body).
- **Palette:** Black (`#000000`), White (`#FFFFFF`), with accents of Deep Green (`#1A2F23`), Earthy Brown (`#4A3728`), and Gold (`#C5A059`).
- **Layout:** Full-viewport bands for marketing, clean grids for shopping.

---
&copy; 2026 Skardu Essence. All rights reserved.
