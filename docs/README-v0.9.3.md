# DexBinder v0.9.3 — Acquisition History

v0.9.3 adds a proper collection acquisition timeline without replacing the
existing collector-lot inventory model.

## Acquisition metadata
Each collector copy group can now record:
- Acquired via: Purchase / Trade / Gift / Pulled / Other
- Acquisition date
- Price per card
- From / where
- Notes

Existing Purchase Date and Purchase Price data remain compatible.

Fast Add includes the same acquisition fields.

Cards received through DexBinder's completed Trade workflow are automatically
recorded as Trade acquisitions with the completion date.

## Acquisition History
Collector Tools now includes Acquisition History.

The timeline provides:
- cards with acquisition records
- cards acquired this month
- recorded acquisition spend
- filters by acquisition type
- newest / oldest / highest-spend sorting
- monthly grouping
- quantity, source and condition/grade context

Older cards without acquisition data are left untouched.

## CSV
CSV export now adds Acquired Via and Acquired From columns and renames the
existing date/price columns to acquisition language.

## Compatibility
No destructive migration is required. New acquisition fields are optional
fields inside the existing schemaVersion 2 collector lots.
Cloud Sync remains unchanged.
