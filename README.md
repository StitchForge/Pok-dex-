# DexBinder v0\.1 — Pokémon 151

A mobile\-first digital binder prototype for the English Scarlet & Violet—151 set\.

## What works

- Loads all 207 numbered cards from TCGdex &#40;`sv03.5`&#41;
- 9 / 12 / 16 cards per page
- Missing cards are dimmed/desaturated
- Tap a card to mark it owned/missing
- Binder completion count and percentage
- Search by card name or number
- Missing\-only view
- Hunt Mode: missing cards appear in full colour; tap to mark found
- Collection state saved in browser localStorage
- Export/import JSON backup
- Mobile responsive layout

## Deploy on Vercel

1. Create a new GitHub repository, e\.g\. `dexbinder`\.
2. Upload `index.html` from this folder to the repository root\.
3. In Vercel, create a New Project and import that GitHub repository\.
4. Leave framework preset as **Other** / no framework if prompted\.
5. Deploy\.

There is no build step and no API key required\.

## Data source

TCGdex REST API: `https://api.tcgdex.net/v2/en/sets/sv03.5`

Card images use TCGdex’s low\-resolution WebP assets in the binder and high\-resolution WebP assets in the card detail sheet\.

## Important v0\.1 limitation

Progress is stored locally on each browser/device\. It does not yet sync between iPhone/iPad/desktop\. Use Export / Import to move or back up collection state\.
