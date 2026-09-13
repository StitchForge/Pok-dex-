# DexBinder v0.6B — convention-ready PWA

## PWA polish
- Standalone iPhone safe-area spacing so the header clears the status bar.
- "Add to Home Screen" tip automatically hides inside the installed app.
- Offline status now says when DexBinder is using saved collection / cached card data.

## Offline improvements
- TCGdex set/card API responses use a persistent stale-while-revalidate cache.
- Previously loaded card artwork uses a persistent cache-first image cache.
- Navigation keeps the app-shell fallback.
- Old DexBinder service-worker caches are cleaned up during activation.
- DexBinder deliberately caches previously used content instead of silently downloading thousands of card images.

## Binder Snapshot
- New Snapshot button in Binder view.
- Clean 3x3 (9) or 3x4 (12) binder sheets.
- Snapshot pages work even when the normal binder is in All mode.
- Missing cards stay dimmed; partial cards remain visually distinct.
- Full master-set snapshots respect physical variant positions.
- Sheet navigation and direct sheet jump.
- Share Image attempts to create a PNG and use the native iOS share sheet.
- If image export is unavailable, the clean preview remains screenshot-friendly.

## Backup & transfer
- Clear explanation of Safari vs installed-PWA local data.
- Download a JSON backup file.
- Restore directly from a JSON file.
- Copy / paste backup remains available.

## Next
v0.6C is planned for account-based cloud sync.
