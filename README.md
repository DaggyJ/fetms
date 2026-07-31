# 🚛 FETMS — Fleet Expense & Trip Management System (Frontend Prototype)

A clickable React frontend prototype for FETMS — built to demo the dashboard, trips, expenses, drivers, and reports experience to clients before backend work begins. All data shown is **mock/demo data** wired into the UI; no backend or database is connected yet.

## What's included

- **Dashboard** — stat cards, active route network (Mombasa → destinations), recent trips, cost breakdown, route profit, and monthly trend charts
- **Trips** — filterable trip list with cost/revenue/profit per trip
- **Fuel Log** — refueling records across Mombasa, Eldoret, Malaba, Nebbi
- **Repairs & Servicing**, **Tyre Purchases**, **Spare Parts** — expense logs per truck
- **Drivers** — driver register with assigned trucks
- **Reports** — profitability, cost per km, route comparison
- **Settings** — currency (USD) and user roles placeholder

## Tech Stack

- React 18 + Vite
- React Router
- Tailwind CSS
- Recharts (charts)
- lucide-react (icons)

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The build output goes to the `dist/` folder.

## Deploying so you can share a link with your client

**Option A — Vercel (easiest, recommended)**
1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click "Add New Project," and select this repo.
3. Vercel auto-detects Vite — just click Deploy. You'll get a live link like `https://fetms-frontend.vercel.app`.

**Option B — Netlify**
1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project."
3. Build command: `npm run build`, publish directory: `dist`.

**Option C — GitHub Pages**
1. Push to GitHub.
2. Run `npm run build` locally, then deploy the `dist/` folder using the `gh-pages` package or GitHub Actions.
3. Because `vite.config.js` already sets `base: "./"`, the build works correctly from a GitHub Pages project subpath.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial FETMS frontend prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Notes for the next phase

This prototype is UI-only. To make it production-ready:
- Connect to a Django REST Framework backend (per the main FETMS README/tech stack)
- Replace `src/data/mockData.js` with live API calls
- Add authentication (JWT) and role-based access (Admin, Fleet Manager, Dispatcher, Finance Officer)
- Add forms for creating/editing trips, fuel logs, repairs, tyres, and spares (currently the "+" buttons are placeholders)
