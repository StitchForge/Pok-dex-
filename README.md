# DexBinder v0.6A — first PWA release

This build is intentionally conservative. It proves the installable-app layer before v0.6B adds heavier offline card-data and image caching.

## What changed
- PWA manifest.
- 192px, 512px, maskable, and Apple touch icons.
- Standalone app display mode.
- iPhone/iPad Home Screen metadata.
- Service worker registration.
- Offline app-shell cache.
- Network-first navigation with cached DexBinder fallback.
- Online / offline status indicator.
- Existing LocalStorage collection data continues to work offline.
- Static homepage total corrected from the old 632 placeholder to 702.

## What v0.6A does offline
Once you have successfully opened DexBinder online at least once after deploying this build:
- DexBinder itself can launch without a network connection.
- Your locally stored ownership data remains available.
- Previously loaded external card data may still depend on browser cache.
- Live TCGdex card metadata, artwork, and prices are NOT yet guaranteed offline.

That deeper caching is intentionally reserved for v0.6B.

## Install on iPhone
1. Deploy all files and folders in this package to the root of the Vercel project.
2. Open the deployed DexBinder URL in Safari.
3. Reload once after deployment.
4. Tap Share.
5. Tap Add to Home Screen.
6. Confirm DexBinder.
7. Launch DexBinder from the new Home Screen icon.

If you have an older Home Screen shortcut, remove it first and install again so the new PWA metadata/icon is picked up.
