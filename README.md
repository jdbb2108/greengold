# Green Gold — ecommerce demo

Mobile-first static ecommerce prototype based on public content from the Green Gold Wix site. It preserves the public positioning (Colombian cold-pressed avocado oil, B2B/export orientation) and its 20 listed catalogue references, while intentionally avoiding invented operating data.

## Run and test

```bash
npm test
npm start
```

The app is dependency-free. Open `index.html` in a modern browser or serve the folder with any static web server.

## Included

- Hash-routed home, catalogue, product detail, B2B, checkout and confirmation experiences.
- Responsive side-cart persisted in `localStorage`.
- Client-side demo checkout: it records an order only in the browser and never sends or requests card information.
- FAQ chatbot with answers constrained to public product positioning and clear demo limitations.
- Keyboard-accessible controls, semantic landmarks, visible focus states, a skip link and basic SEO metadata.
- Node tests that protect catalogue data integrity.

## Iteration notes

- The full public catalogue is now associated with the product photographs exposed by Wix's image CDN. They remain remotely served from their original public location and use responsive Wix transformation URLs; no photographs have been substituted or assigned to the wrong product.
- USD, NZD and HUF are display currencies stored in `localStorage`. The exchange factors live in `data.js` and are intentionally static demo values, not financial quotes or an effective payment currency.
- Search, category filtering, sorting, cart edits/removal, a product-image zoom, supplementary routes (`FAQ`, `Contact`, `Shipping & returns`, `Terms`, `Privacy`) and a transparency-led chatbot are implemented.
- The original Wix content reviewed includes strategy and market-assessment material that should not be presented as verified operational evidence or consumer research. The storefront keeps those claims bounded rather than promoting them as facts.

## Production requirements (not implemented)

Before accepting real orders, a production build needs:

1. An approved payment provider integrated through a server-side backend; PCI-sensitive card data must never touch this frontend.
2. Verified currency, prices, inventory, country availability, fulfillment, tax, returns and trade terms from Green Gold.
3. Customer-support contacts, current legal documents and consent/privacy configuration.
4. Server-side order creation, authentication/abuse controls, observability, transactional email and an accessible real checkout.
5. Domain, analytics consent, image optimization, content review and cross-browser/device testing.

No payment gateway credentials, merchant information, delivery promises or legal terms were invented in this demo.
