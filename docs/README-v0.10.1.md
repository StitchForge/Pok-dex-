# DexBinder v0.10.1 — Active Sets visual pass

This patch brings My Active Sets closer to the v0.10 art direction.

Changes:
- active sets preload their lightweight TCGdex card lists in the background
  so dashboard artwork is available without opening each binder first
- chase-style selection excludes Energy cards and favours later-numbered
  Pokemon / ex / V / VSTAR / VMAX / GG cards
- each set gets a distinct pastel/dark tint
- the selected card artwork is used twice:
  - blurred/cropped as a full-card background atmosphere
  - as a crisp tilted card thumbnail on the right
- a small "Chase-style pick" label displays the selected card name
- Espeon, Umbreon and System themes are retained

No schema or cloud payload changes.
