# DexBinder v0.7.0 — Collector Data Foundation

New per-owned-variant collector details:
- Quantity / duplicates
- Condition
- Language
- Purchase price
- Purchase date
- Notes
- For-trade status

Compatibility:
- Existing ownership data is unchanged.
- Existing owned variants default to quantity 1.
- Removing ownership removes collector metadata for that variant.
- Collector metadata is stored locally in `dexbinder_v07_collector_meta`.
- Backup / Restore now includes collector metadata.
- Cloud sync continues to sync ownership + active sets only in this foundation build.
  Collector metadata cloud migration is intentionally deferred until the v0.7 data model is validated.

Binder polish:
- Duplicate quantity badge appears when total copies exceed owned variant positions.
- Trade badge appears when any owned variant is marked available to trade.
