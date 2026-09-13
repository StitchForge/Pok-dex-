# DexBinder v0.7.2 — Real-World Trading

## Quantity model
- Owned quantity and Trade quantity are now separate.
- Trade quantity cannot exceed owned quantity.
- Legacy v0.7.0/v0.7.1 "Available to trade" data migrates automatically.

## Trade list
- Shows "X available · Y owned".
- Trade totals use only the quantity actually available to trade.

## Compare Trade
- Two sides: You Give / You Get.
- Build You Give from the Trade List.
- Search cards from active sets and add variants to You Get.
- Adjust quantities directly in the comparison.
- Live reference-value difference and percentage.
- Per-line manual value override for real-world negotiated values.

## Complete Trade
- Confirmation before changing collection.
- Given quantities are removed from collection.
- Received cards are added/incremented automatically.
- Trade quantities are adjusted safely.

## Trade History
- Completed trades stored locally with date, cards and values.
- Trade History is included in Backup / Restore.

## Current limitations
- Incoming search covers active DexBinder sets.
- Reference pricing remains TCGplayer-derived and is not condition/language adjusted.
- Trade metadata/history are local + backup protected; cloud schema migration is still deferred.
