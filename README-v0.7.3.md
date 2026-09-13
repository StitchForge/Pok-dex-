# DexBinder v0.7.3 — Collector Tools & Polish

Final v0.7 collector release.

## Trade History management
- Delete individual trade-history entries.
- Clear all trade history.
- Confirmation explains that deleting history does NOT reverse collection changes.

## Global Card Search
- Search across all active sets by card/Pokémon name or number.
- Results show:
  - set
  - card number
  - variant
  - owned quantity
  - trade quantity
  - reference price when available
- Open directly into the card detail.

## Duplicates
- Dedicated duplicates view.
- Sort by duplicate quantity, duplicate value, set, or name.
- Filter by set.
- One-tap "Trade all duplicates".
- Direct edit shortcut.

## Collection breakdown
Separates:
- master-set positions owned
- physical card count
- duplicate copies
- cards available to trade
- completed sets
- completed trades

## Collection value
Estimated TCGplayer-derived reference values for:
- total physical collection
- duplicates
- trade binder
- recorded purchase spend

Pricing remains a reference estimate and does not apply condition/language adjustments.

## CSV export
Exports a human-readable collection CSV containing:
- set
- card
- number
- variant
- owned quantity
- trade quantity
- condition
- language
- purchase price/date
- notes
- reference price
- estimated total value

## Data health / migration
- Validates old binary `forTrade` records.
- Migrates them into the v0.7 trade-quantity model.
- Clamps invalid trade quantities to owned quantity.
- Keeps existing collection data intact.

## Cloud
Collector metadata and trade history remain local + Backup/Restore protected.
The existing cloud schema is intentionally unchanged.
