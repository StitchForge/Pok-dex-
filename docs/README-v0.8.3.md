# DexBinder v0.8.3 — Navigation & Dashboard Cleanup

## Fixed
- Restored the missing `setFastAddScope()` function that broke Fast Add → All Sets in v0.8.2.
- All Sets once again switches correctly and loads the global TCGdex catalogue.
- v0.8.2 era, year and sorting controls remain intact.

## Binder navigation
Removed the redundant per-set Hunt tab.

Set binders now use:
- Binder
- Missing
- My Dex

Global Hunt remains available from the main dashboard and is the dedicated cross-set hunting workflow.

## Dashboard redesign
The crowded Active Collections header has been replaced with:

### Quick Actions
- Fast Add
- Trade
- Global Hunt

### Secondary tools
- Data & Sync
- Manage Sets

Backup and Cloud Sync now live together inside the Data & Sync sheet.

## Active Collection cards
- Entire card is tappable.
- Separate Open Binder / Hunt Missing buttons removed.
- Cleaner completion percentage.
- Progress bar.
- Collected / missing counts.
- Better mobile spacing.
- Keyboard accessible.

## Data safety
No collection storage keys, collector metadata schema, trade history schema or cloud database schema changed.
