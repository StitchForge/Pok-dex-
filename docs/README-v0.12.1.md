# DexBinder v0.12.1 — Active Sets startup hotfix

The v0.12 static hero intentionally removed the old visible dashboard statistic DOM nodes,
but renderStats() still assumed those nodes existed. That caused startup to stop before
renderSetCards(), producing the Active Sets error.

Fixes:
- renderStats() now safely treats dashboard stat elements as optional.
- Active Sets rendering is no longer blocked by the static hero.
- Hidden live statistic nodes keep the current collection totals available to accessibility APIs.
- Static hero artwork and day/night theme behavior are unchanged.
- Existing collection, Watchtower Chase Pick, achievement, trade, acquisition and stable cache systems remain intact.
