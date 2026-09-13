# DexBinder v0.7.3a — Inventory Model Fix

## Collector Tools loading fix
Headline collector statistics now come directly from local ownership + metadata:
- master positions
- physical cards
- duplicates
- trade quantity
- completed sets
- completed trades

They display immediately and no longer wait for every TCGdex set to load.

## Multi-condition inventory
A card variant can now contain multiple independent copy groups.

Example:
- 2 × Raw / Near Mint / English
- 1 × Raw / Lightly Played / English
- 1 × Graded / PSA 9 / English

Each group has its own:
- quantity
- trade quantity
- raw / graded type
- condition (raw)
- language
- grading company (graded)
- grade (graded)
- certification number (graded, optional)
- purchase price per card
- purchase date
- notes

## Supported grading companies
- PSA
- CGC
- BGS
- SGC
- ACE
- Other

## Migration
Existing v0.7 metadata is automatically migrated into a single Raw copy group.
No existing ownership needs to be re-entered.

## Trading
Trade-list rows now represent the specific condition / graded group being offered.
Completing a trade removes copies from that exact group.
Cards received through a trade enter as a new Raw group and can be edited afterward.

## CSV
CSV export is now group-level and includes grading company, grade and certification number.

## Pricing note
Raw TCGplayer reference pricing is still used for estimates.
DexBinder does not yet apply graded-card premiums or condition/language price adjustments automatically.
