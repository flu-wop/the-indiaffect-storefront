# 🚀 Deployment Guide - TheIndiAffect Storefront

## ✅ Deploy WITHOUT Shopify Backend (Recommended for First Deploy)

This will get your site live IMMEDIATELY to see the design and layout!

### Step 1: Upload to GitHub

1. **Open Terminal** and navigate to your project folder:
   ```bash
   cd path/to/theindiaffect-storefront
   ```

2. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TheIndiAffect luxury storefront"
   ```

3. **Create GitHub Repository:**
   - Go to [github.com/new](https://github.com/new)
   - Name it: `theindiaffect-storefront`
   - Keep it private
   - Click "Create repository"

4. **Push Code:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/theindiaffect-storefront.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (FREE)

1. **Go to** [vercel.com](https://vercel.com)

2. **Sign up / Log in** with your GitHub account

3. Click **"Add New..."** → **"Project"**

4. **Import** your `theindiaffect-storefront` repository

5. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)

6. **Environment Variables:**
   - **LEAVE EMPTY FOR NOW!**
   - Or add placeholder values:
     - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` = `example.myshopify.com`
     - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` = `placeholder`

7. Click **"Deploy"**

---

### Step 3: View Your Live Site! 🎉

- Vercel will give you a URL like: `https://theindiaffect-storefront.vercel.app`
- Your site is LIVE with the full luxury design!
- Products sections will show skeleton loaders (expected without backend)

---

## 🔌 Connect Shopify Backend Later

When you're ready to connect real products:

### Get Shopify Credentials

1. Go to your Shopify Admin: `https://admin.shopify.com/store/theindiaffect`

2. **Settings** → **Apps and sales channels**

3. Click **"Develop apps"**

4. Click **"Create an app"**
   - Name: `Custom Storefront`

5. Click **"Configure Storefront API scopes"**
   - Check these permissions:
     - ✅ `unauthenticated_read_product_listings`
     - ✅ `unauthenticated_read_product_inventory`
     - ✅ `unauthenticated_read_checkouts`
     - ✅ `unauthenticated_write_checkouts`
     - ✅ `unauthenticated_read_customers`

6. Click **"Save"** → **"Install app"**

7. Go to **"API credentials"** tab

8. **Copy** the **Storefront API access token**

---

### Add to Vercel

1. Go to your Vercel project dashboard

2. **Settings** → **Environment Variables**

3. Add these:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN = theindiaffect.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = (paste your token)
   ```

4. **Redeploy:**
   - Go to **Deployments** tab
   - Click **"..."** menu on latest deployment
   - Click **"Redeploy"**

---

## 📦 Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect GitHub → Select `theindiaffect-storefront`
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables (same as Vercel)
7. Deploy!

---

## 🎨 Customization After Deploy

### Add Your Images

1. Add images to `public/` folder:
   ```
   public/
   ├── hero-image.jpg       (1920x1080px)
   └── textures/
       ├── straight.jpg     (800x1000px)
       ├── body-wave.jpg
       ├── deep-wave.jpg
       ├── loose-wave.jpg
       ├── kinky-curly.jpg
       └── water-wave.jpg
   ```

2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add images"
   git push
   ```

3. Vercel auto-deploys!

---

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'charcoal': '#0a0a0a',    // Change background
  'gold': '#d4af37',         // Change accent
  // ...
}
```

---

### Update Navigation

Edit `components/Header.tsx` to change menu items.

---

## 🆘 Troubleshooting

**"Module not found" errors:**
- Run `npm install` in your project folder

**Site shows "Application error":**
- Check Vercel deployment logs
- Make sure all files were committed and pushed

**Images not showing:**
- Verify images are in `public/` folder
- Check image paths in code
- Images must be pushed to GitHub

**Products not loading:**
- This is normal without Shopify backend
- Add Shopify credentials to fix

---

## 📊 Check Your Live Site

Visit your Vercel URL and verify:
- ✅ Homepage loads with hero section
- ✅ Navigation works
- ✅ Trust bar shows badges
- ✅ Design looks luxury (dark theme, gold accents)
- ✅ Mobile responsive
- ✅ Footer links present

---

## 🎯 Next Steps

1. **Share URL with India** - Get feedback on design
2. **Add real images** - Replace placeholders
3. **Connect Shopify** - Show real products
4. **Custom domain** - Point to your Vercel URL
5. **Test everything** - Desktop & mobile

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Shopify API: https://shopify.dev/docs/api/storefront
- Contact support or check deployment logs

**You're all set! 🎉**
