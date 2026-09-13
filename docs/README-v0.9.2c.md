# DexBinder v0.9.2c — Global Hunt Card Details

This patch changes Global Hunt card taps to open the exact card detail instead
of navigating straight into the set.

## Global Hunt flow
Global Hunt -> tap a missing card -> exact card detail + exact variant.

For example, tapping Oddish · Normal opens Oddish with Normal highlighted.

The detail sheet shows:
- card art
- exact variant
- pricing
- Mark owned
- Wishlist controls
- collector details where applicable

## Back behavior
When the detail sheet was opened from Global Hunt:
- the Close button becomes Back
- Back returns to the same Global Hunt screen
- search, set filter, sort, price filter and rendered results remain untouched
- scroll position is restored

## Open in Binder
A secondary Open in Binder button is shown for cards opened from Global Hunt.
This deliberately navigates into that card's set when broader collection
context is wanted.

No collector schema migration is required.
Cloud Sync remains unchanged.
