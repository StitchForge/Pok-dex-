# DexBinder v0.8.0 — Fast Add & Collection Entry

First Smart Collection Tools release.

## Fast Add
A dedicated workflow for entering physical cards quickly:
- Search across all active sets
- Pick card + variant
- Add quantity
- Add trade quantity
- Raw / graded
- Raw condition
- Language
- Grading company
- Grade
- Certification number
- Purchase price per card
- Purchase date
- Notes

## Save & Next
Use "Save & Next" when entering a stack of cards:
- saves the selected card
- keeps Fast Add open
- returns focus to search
- keeps a session history of recently-added cards

## Inventory model
Fast Add writes directly into the v0.7.3 multi-group collector model.
If the variant is already owned, the new entry becomes an additional copy group rather than overwriting existing condition/grade data.

## Scope
Search currently covers active DexBinder sets only.
A truly global all-set catalogue is planned for the next v0.8 release.

No cloud schema changes are included.
