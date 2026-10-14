# Paradise Nursery — Shopping Cart Application

**Paradise Nursery** is a responsive, three-page plant shop demo built as the IBM React/Redux final project. Visitors can browse 18 unique houseplants across three categories, add items to a Redux-managed shopping cart, adjust quantities, remove items, and see totals update immediately.

## Pages

- **Landing page (`/`)** — illustrated botanical background, Paradise Nursery company story, and **Get Started** button.
- **Plant listing (`/plants`)** — 18 plants (6 in each of 3 categories), individual illustrations, name, description, price, search/filter, and Add to Cart buttons that disable after an item is added.
- **Shopping cart (`/cart`)** — item thumbnails, names, unit prices, line totals, quantity +/- controls, remove actions, live item count, total price, continue shopping, and a **Coming Soon** checkout dialog.

## Technologies

React, Vite, React Router, Redux Toolkit (`createSlice` and `configureStore`), React-Redux, CSS. All plant illustrations are bundled local SVG assets, so no image API keys are needed.

## Run locally

```bash
npm install
npm run dev
```

Open the local address shown by Vite (usually `http://localhost:5173`). To test a production build:

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages (recommended: GitHub Actions)

1. Create a **public** GitHub repository named `paradise-nursery`.
2. Push **all files and folders** of this project to the repo root, including `.github/workflows/deploy.yml`.
3. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The workflow runs on pushes to `main` and publishes `dist/`. Allow the workflow to finish in **Actions**.
5. Visit `https://YOUR_USERNAME.github.io/paradise-nursery/`.

**Important:** If you use a different repository name, the GitHub Actions Vite base URL and BrowserRouter basename adjust automatically to the deployed subdirectory. On GitHub Pages, refreshing `/plants` or `/cart` works via the included `404.html` SPA fallback.

## Required submission file links

Replace `YOUR_USERNAME` with your GitHub username:

- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/README.md`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/components/AboutUs.jsx`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/App.css`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/App.jsx`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/store/CartSlice.jsx`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/components/ProductList.jsx`
- `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/components/CartItem.jsx`

Public repository: `https://github.com/YOUR_USERNAME/paradise-nursery`
Live site: `https://YOUR_USERNAME.github.io/paradise-nursery/`

## Notes

- This is a course demo. Prices and shipping are illustrative; checkout is intentionally nonfunctional.
- Cart state is held in memory during the session; a full reload resets the cart.
- Product listing disables Add to Cart after an initial add. Removing the item in the cart enables it again.
- Pet-friendly labels are provided for the six selected plant types; always verify plant identification and pet safety independently.
