# Fluid Headless Commerce Starter Pack

## Developer Documentation

### Easy Button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy)

### Getting Started Guide

#### Prerequisites

This project is built with:

- Next.js
- Tailwind CSS
- Yarn package manager

#### Installation Steps

#### 1. Install Dependencies

Run the following command in your project root:

```bash
yarn
```

#### 2. Environment Setup

1. Locate the `template.env.local` file in the project root
2. Rename it to `.env.local`
3. Configure the following environment variables:

4. Rename file `template.env.local` to `.env.local` at the root of the project.
5. Replace the `FLUID_API_TOKEN`'s value with your api token found in the [developer settings](https://www.fluid.app/settings/developer).
6. Specify where the Fluid API is with `FLUID_BASE_URL` (no trailing slash `/`).

```env
# Your Fluid API token from developer settings
FLUID_API_TOKEN=your_api_token_here

# Fluid API base URL (leave trailing slash)
FLUID_BASE_URL=https://yourco.fluid.app
```

![where to find the Fluid API token](public/images/readme1.png)

[Fluid Developer Portal](https://fluid.app/settings/developer)

#### 3. Start Development Server

Run the development server:

```bash
yarn dev
```

Your application will be available at `http://localhost:3000`

### Additional Resources

#### Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

#### Customization

You can customize this project by:

1. Following Next.js conventions for page routing and components
2. Using Tailwind CSS utility classes for styling
3. Modifying the configuration files for both Next.js and Tailwind CSS

### Custom Product Pages

#### Creating a Custom Product Page

1. Navigate to the `shop` directory
2. Create a new directory named with your product's ID (e.g., `80`)
3. Any product with this ID will use this custom page instead of the default dynamic product page

Example structure:

```
src/app/[affiliateSlug]/shop/
    ├── [productSlug]/        # Default dynamic product pages
    └── 80/                   # Custom page for product ID 80
```

This routing is handled by Next.js - [see Next.js routing documentation for more details]

### SEO and Metadata

#### Setting Page Metadata

Export a `generateMetadata` function from your `page.tsx` file:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Your Product Title",
    description: "Product description",
    // Add other metadata properties
  };
}
```

### Cart Integration

#### Adding Products to Cart

Add the following data attributes to your product elements:

```html
<button data-fluid-product="[product-id]" data-fluid-variant="[variant-id]">
  Add to Cart
</button>
```

Reference implementation can be found in `shop/ProductPage.tsx`

#### Adding Subscription Products

To enable subscription options:

```html
<div data-fluid-checkout-group>
  <input type="radio" name="data-fluid-checkout-subscribe" value="subscription"
  <!-- or "regular" for one-time purchase -->
  checked />
</div>
```

### Building a Custom Checkout

1. Use Fluid's APIs to fetch product and variant data
2. Design your checkout pages
3. Implement cart functionality using the data attributes described above
4. Add checkout flow according to your needs

### Attribution System

#### Widget Configuration

The Fluid widget is configured in `layout.tsx`:

```javascript
window.fcs = {
  api_url_host: "${config.apiHost}",
  affiliate: {
    credit: "${affiliateSlug}", // Unique identifier
    email: "rep@example.com", // Optional: Rep's email
    external_id: "REP123", // Optional: External system ID
  },
};
```

#### Rep Attribution Links

To attribute sales to specific reps:

- Base URL format: `https://yourdomain.com/[REP_SLUG]`
- Replace `[REP_SLUG]` with the rep's unique identifier
- Ex for shop page: `https://yourdomain.com/[REP_SLUG/shop`

Once attributation has been set, the visitor can navigate to any page and the attribution will follow via fingerprinting and / or cookies.

### Localization

#### Language/Country Selection

- A country/language selector is available in the top-right corner
- Default language is English
- Custom translations must be implemented manually
- Implement your own translation system for additional languages
