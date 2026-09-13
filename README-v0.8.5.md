# DexBinder v0.8.5 — Direct Galarian Gallery Price Fallback

## What changed

TCGdex remains the primary card/pricing source.

For Crown Zenith Galarian Gallery cards (GG01–GG70), when TCGdex returns no
usable TCGplayer price, DexBinder now falls back to the live TCGplayer
Galarian Gallery catalogue through a same-origin Vercel rewrite.

### Fallback flow
1. Ask TCGdex for card details/pricing.
2. If the GG price is present, use it normally.
3. If it is missing, fetch TCGplayer Galarian Gallery catalogue pages through:
   `/tcgplayer-gg/page/1` ... `/page/4`
4. Extract GG card number + Market Price.
5. Cache the resulting map locally for 6 hours.
6. Feed the fallback price into the normal DexBinder pricing layer.

This means fallback prices also participate in:
- Global Hunt display
- Price low → high / high → low sorting
- Existing price consumers that call DexBinder's shared price functions

## Source label
Global Hunt displays:
- `TCGplayer reference` for normal TCGdex pricing
- `TCGplayer fallback` when the direct catalogue fallback supplied the value

## New deployment file
This release adds `vercel.json`.

It creates the same-origin proxy used to read TCGplayer's public catalogue
without browser CORS problems. No TCGplayer API credentials are required.

## Important limitation
The fallback parses TCGplayer's public catalogue page rather than using the
credentialed TCGplayer API. If TCGplayer substantially changes its catalogue
HTML in the future, this parser may need updating.

No collection, collector metadata, trade history, Supabase, or ownership
schema changes.
