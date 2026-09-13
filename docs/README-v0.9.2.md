# DexBinder v0.9.2 — Full-screen Trade & Hunt

This release polishes the v0.9.1 Trade & Hunt experience.

## Full-screen Trade & Hunt
Trade & Hunt is now a proper full-page destination from the main Dex dashboard.

It contains three full-page tabs:
- Hunt
- Trade List
- Compare

Trade List and Compare no longer open as half-height sheets. Their existing
filters, pricing, basket controls, incoming-card search, overrides and trade
completion workflow are preserved inside the full-page experience.

The existing Full Hunt page is still available from the Hunt tab.

Trade History remains a modal because it is a secondary archival view rather
than a primary workflow.

## Wishlist target visibility
Trade Target intent is now much more prominent on every Wishlist card.

Each Wishlist card clearly shows:
- ACTIVE TRADE TARGET / NOT A TRADE TARGET state
- A full-width Trade Target toggle
- Short explanatory copy describing what Trade Target means
- Open card
- Remove from wishlist

Wishlist still means “I want this”.
Trade Target means “I am actively willing to trade toward this”.

## Data
No schema migration is required.
Existing dexbinder_v091_trade_targets data is reused.
Backup version is bumped to v0.9.2.
Cloud Sync remains unchanged.
