## Getting Started

### First, install dependencies:

```bash
yarn
```

### Second, set up env variables:

1. Rename file `template.env.local` to `.env.local` at the root of the project.
2. Replace the `FLUID_API_TOKEN`'s value with your api token found in the [developer settings](https://www.fluid.app/settings/developer).
3. Specify where the Fluid API is with `FLUID_BASE_URL` (no trailing slash `/`).
4. Specify the FontAwesome NPM auth token with `FONTAWESOME_NPM_AUTH_TOKEN`. (this is for icons throught the app)

![where to find the Fluid API token](public/images/readme1.png)

Open [localhost](http://localhost:3000) in your browser to see the result.

#### This project uses [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

You can view the documentation for those projects to understand how to customize your fork of this project.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy)


# Developer Documentation

## Custom Product Pages

### Creating a Custom Product Page
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

## SEO and Metadata

### Setting Page Metadata
Export a `generateMetadata` function from your `page.tsx` file:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Your Product Title',
    description: 'Product description'
    // Add other metadata properties
  }
}
```

## Cart Integration

### Adding Products to Cart
Add the following data attributes to your product elements:

```html
<button 
  data-fluid-product="[product-id]"
  data-fluid-variant="[variant-id]"
>
  Add to Cart
</button>
```

Reference implementation can be found in `shop/ProductPage.tsx`

### Adding Subscription Products
To enable subscription options:

```html
<div data-fluid-checkout-group>
  <input 
    type="radio"
    name="data-fluid-checkout-subscribe"
    value="subscription"  <!-- or "regular" for one-time purchase -->
    checked
  />
</div>
```

## Building a Custom Checkout

1. Use Fluid's APIs to fetch product and variant data
2. Design your checkout pages
3. Implement cart functionality using the data attributes described above
4. Add checkout flow according to your needs

## Attribution System

### Widget Configuration
The Fluid widget is configured in `layout.tsx`:

```javascript
window.fcs = {
  api_url_host: '${config.apiHost}',
  affiliate: {
    credit: '${affiliateSlug}',    // Unique identifier
    email: 'rep@example.com',      // Optional: Rep's email
    external_id: 'REP123'          // Optional: External system ID
  }
};
```

### Rep Attribution Links
To attribute sales to specific reps:
- Base URL format: `https://yourdomain.com/[REP_SLUG]`
- Replace `[REP_SLUG]` with the rep's unique identifier
- Ex for shop page: `https://yourdomain.com/[REP_SLUG/shop`

Once attributation has been set, the visitor can navigate to any page and the attribution will follow via fingerprinting and / or cookies.

## Localization

### Language/Country Selection
- A country/language selector is available in the top-right corner
- Default language is English
- Custom translations must be implemented manually
- Implement your own translation system for additional languages
