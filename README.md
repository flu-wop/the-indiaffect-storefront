# TheIndiAffect - Premium Virgin Hair Storefront

A luxury headless Shopify storefront built with Next.js 15, Tailwind CSS, and the Shopify Storefront API.

## Features

- 🎨 Luxury dark theme with gold accents
- ⚡ Built with Next.js 15 App Router for optimal performance
- 🛍️ Shopify Storefront API integration
- 📱 Fully responsive, mobile-first design
- 🎯 SEO optimized with metadata
- ♿ Accessible components
- 🚀 Can deploy without Shopify backend (shows placeholder content)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **API:** Shopify Storefront API (GraphQL)
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Language:** TypeScript

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables (Optional for Now)

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

You can leave the Shopify credentials empty for now - the site will still work with placeholder content.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Without Shopify Backend)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/theindiaffect-storefront.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. **Leave environment variables empty** (or add dummy values)
6. Click "Deploy"

Your site will deploy with:
- ✅ Full design and layout
- ✅ Navigation working
- ✅ Placeholder content for products
- ✅ All static pages functional

## Connect to Shopify Later

When you're ready to connect to Shopify:

1. **In Shopify Admin:**
   - Go to Settings → Apps and sales channels
   - Click "Develop apps"
   - Create a new app
   - Configure Storefront API scopes
   - Install the app
   - Copy your Storefront Access Token

2. **Add to Vercel:**
   - Go to your project → Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` = `theindiaffect.myshopify.com`
     - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` = (your token)
   - Redeploy

## Project Structure

```
app/
├── layout.tsx              # Root layout with fonts
├── page.tsx                # Homepage
├── globals.css             # Global styles + Tailwind
└── components/
    ├── Header.tsx          # Navigation
    ├── Footer.tsx          # Footer with links
    ├── TrustBar.tsx        # Trust badges
    ├── ProductCard.tsx     # Product grid item
    ├── TextureSwatch.tsx   # Texture selector
    └── NewsletterForm.tsx  # Email signup

lib/
├── shopify.ts             # Shopify API client
└── types.ts               # TypeScript types

public/
├── hero-image.jpg         # Add your images here
└── textures/              # Texture swatch images
```

## Adding Images

Place your images in the `public/` folder:

- `public/hero-image.jpg` - Homepage hero (1920x1080px)
- `public/textures/straight.jpg` - Texture swatches (800x1000px each)
- etc.

## Customization

### Colors

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  'charcoal': '#0a0a0a',  // Main background
  'gold': '#d4af37',       // Accent color
  // ...
}
```

### Fonts

Edit `app/layout.tsx` to use different Google Fonts.

### Navigation

Edit `components/Header.tsx` to modify menu items.

## Build for Production

```bash
npm run build
npm start
```

## Need Help?

- Shopify Storefront API: https://shopify.dev/docs/api/storefront
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

## License

All rights reserved © TheIndiAffect
