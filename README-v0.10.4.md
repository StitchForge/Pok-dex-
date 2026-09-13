# DexBinder v0.10.4 — Day & Night

## New theme mechanic
The old segmented theme selector is now a snapped celestial day/night control:

- Left: 🌙 Umbreon / night
- Middle: System / twilight
- Right: ☀️ Espeon / day

You can tap a named region, swipe across the control, or drag the celestial body.
The interaction always snaps to one of the three valid themes—there are no half-themed app states.

The sun/moon travels between states and crossfades through a twilight treatment.
Reduced-motion users get the same functionality without the animation.

## Atmospheric environments
Theme backgrounds are no longer flat:
- Espeon: subtle clouds, distant birds and warm daylight glow
- System: restrained twilight gradient with a mix of faint cloud/star detail
- Umbreon: deep navy/plum night sky with sparse stars

All atmosphere is CSS-based, lightweight, offline-friendly and pointer-inert.

## Umbreon contrast/accessibility
A surface-aware contrast layer now explicitly gives light cards dark text and dark surfaces light text.
This covers the problem areas seen in:
- Collector Tools metrics
- Wishlist & Goals summaries
- Trade & Hunt stats/actions
- search, duplicate, trade and scan cards
- other light cards inside dark modal sheets

Inputs/selects on Umbreon dark surfaces remain light-on-dark.

## Set logo reliability
Set logos now try multiple candidate formats instead of failing after one URL.
Temporal Forces has an explicit TCGdex asset fallback and the generic retry system also benefits other sets.
If all logo candidates fail, the dashboard gracefully falls back to the set name.

No collection schema or cloud payload changes.
