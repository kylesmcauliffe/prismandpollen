# Prism & Pollen

Expo Router + Uniwind clothing storefront and knowledge hub (web + native).

## Requirements

- Node.js 22+ (see `.nvmrc`)

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run web` | Dev server (web) |
| `npm start` | Expo dev server |
| `npm run build` | Static web export → `dist/` |

## Routes

- `/` — homepage
- `/shop`, `/shop/[category]` — catalog
- `/store/[id]` — product detail
- `/hub`, `/hub/[tool]` — Canva / Notion / Figma / Higgsfield folders

## Deploy

Netlify builds with `npm run build` (`expo export -p web`) and publishes `dist/`.
