# DexBinder v0.8.1 — Global Catalogue + iOS Interaction Polish

## Global Catalogue in Fast Add
Fast Add now has two scopes:

### My Sets
Search the user's active DexBinder collections as before.

### All Sets
- Loads the full TCGdex set catalogue.
- Search for any set in TCGdex.
- Open that set.
- Search cards inside it by card name or number.
- Choose a variant and use the normal Fast Add workflow.
- Saving a card from an inactive set automatically adds that set to My Dex so the new ownership record has a visible home.

This avoids fetching every Pokémon card in every set at once while still making the whole catalogue reachable.

## iPhone / Safari auto-zoom fix
- All text inputs, selects and textareas use an iOS-safe 16px focus size.
- Buttons / quick links use `touch-action: manipulation` to prevent double-tap zoom behaviour.
- `-webkit-text-size-adjust` is normalized.
- Pinch-to-zoom is NOT disabled, preserving accessibility.

## Fast Add remains compatible with
- raw / graded copy groups
- condition
- language
- quantity
- trade quantity
- grading company / grade / cert number
- purchase price / date
- notes
- Save & Next
- recent session entries

No cloud schema changes.
