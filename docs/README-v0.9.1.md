# DexBinder v0.9.1 — Trade & Hunt Hub

This release merges the dashboard's separate Global Hunt and Trade entry points into one collector workflow.

## Trade & Hunt
One dashboard action now opens a three-tab hub:
- Hunt
- Trade List
- Compare

### Hunt
- Missing master-position count
- Wishlisted-missing count
- Trade Target count
- Promote Wishlist cards to Trade Targets
- Add targets directly to You Get
- Deep-link to the existing full Global Hunt

### Trade List
- Available trade groups and physical quantities
- Current You Give selection
- Add/remove cards from You Give
- Deep-link to the existing full Trade List

### Compare
- You Give / You Get counts
- Reference value gap
- Add all Trade Targets to You Get
- Open the existing full Trade Compare workflow

## Trade Targets
New storage key:
- dexbinder_v091_trade_targets

Trade Target is a separate intent from normal Wishlist. Removing a Wishlist card also clears its Trade Target.

Trade Targets are included in Backup / Restore.

## Preserved
Full Global Hunt, Hunt sorting/pricing, Trade List, Trade Compare, Trade History, Wishlist & Goals, Scan Assist, Fast Add, catalogue navigation, collector lots, graded cards and existing data models remain in place.

Cloud Sync remains unchanged.
