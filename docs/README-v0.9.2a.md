# DexBinder v0.9.2a — Trade & Hunt Navigation Fix

This patch restores the v0.9.1 half-page Trade & Hunt hub and makes its three
choices behave consistently.

## Trade & Hunt flow
Dashboard -> Trade & Hunt still opens the compact half-page hub.

From there:
- Hunt -> opens the existing full Global Hunt page
- Trade List -> opens a new full Trade List page
- Compare -> opens a new full Compare Trade page

There is no second full-page Hunt launcher inside a full-page Trade & Hunt
screen. The half-page hub is the launchpad; each workflow is a destination.

Back buttons on Trade List and Compare return to the Trade & Hunt hub.

## Wishlist
Keeps the stronger v0.9.2 Trade Target visibility:
- ACTIVE TRADE TARGET / NOT A TRADE TARGET
- prominent full-width Trade Target toggle
- explanatory copy
- clearer Open / Remove labels

## Data
No schema migration.
Existing dexbinder_v091_trade_targets is reused.
Cloud Sync is unchanged.
Backup version: v0.9.2a.
