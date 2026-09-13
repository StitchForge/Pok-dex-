# DexBinder v0.9.2b — Global Hunt Reliability Fix

This patch keeps the v0.9.2a Trade & Hunt navigation unchanged and hardens
Global Hunt loading.

## Fixes
- Global Hunt retries set-data requests before giving up.
- No-active-set state is no longer misreported as a connection error.
- If only some sets fail, Global Hunt shows the available sets and identifies
  the unavailable ones instead of failing the entire screen.
- If all set requests fail, the error explains that the card-data service may
  be temporarily unavailable and includes a Try Again button.
- User collection data is never deleted by this error path.

## Offline/cache reliability
The service worker now uses stable data/image cache names:
- dexbinder-data-stable-v1
- dexbinder-images-stable-v1

During activation it migrates entries from older DexBinder data/image caches
before removing obsolete caches. This prevents routine app updates from
throwing away useful cached TCGdex data.

No collector schema migration is required.
Cloud Sync remains unchanged.
