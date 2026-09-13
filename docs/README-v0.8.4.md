# DexBinder v0.8.4 — Hunt Sorting & Galarian Gallery Pricing

## Global Hunt sorting
Added:
- Card number · low to high
- Card number · high to low
- Price · low to high
- Price · high to low
- Name · A–Z
- Set · A–Z

Price sorts update automatically while reference prices load.
Cards without a resolved reference price are placed after priced cards.

## Crown Zenith Galarian Gallery pricing
GG01–GG70 now use a more defensive detail lookup.

DexBinder tries:
- the card's canonical TCGdex ID
- swsh12.5gg-GGxx
- swsh12pt5gg-GGxx
- swsh12.5-GGxx

For Gallery cards, TCGplayer holofoil pricing is preferred before normal pricing.

Prices are NOT hard-coded and remain TCGdex/TCGplayer reference data.

No collection data, collector metadata, trade history, or cloud schema changes.
