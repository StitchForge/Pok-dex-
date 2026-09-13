# DexBinder v0.8.8 — Smart Collection Finale

This consolidates the remaining v0.8 roadmap into one deployment.

## Scan Assist
New dashboard Quick Action: Scan.

- Take a photo with the phone camera or choose an existing image.
- Optional client-side OCR using Tesseract.js.
- Extract likely card name and card number.
- Show likely DexBinder matches.
- User confirms the match.
- Continue into the existing Fast Add workflow.
- Manual name / number entry is always available if OCR is unreliable.

Scan Assist is intentionally confirmation-based. It does not silently add cards.

## Faster acquisition / duplicate entry
Owned-card collector panels now include:
- + Add another copy
- + Add trade copy

These create new inventory lots without overwriting existing condition / grade groups.

## Pricing controls
Global Hunt adds:
- Refresh visible prices
- Clear price cache
- Source labels
- Price-age labels

Pricing remains reference-only. DexBinder does not automatically estimate
condition, language, or graded-card premiums.

## Galarian Gallery
The unresolved GG pricing issue is parked. v0.8.5 logic remains present, but
v0.8.8 does not add another speculative GG pricing workaround.

## Retained
- Fast Add
- Global catalogue
- Era / year navigation
- Catalogue sorting
- Global Hunt sorting
- Dashboard cleanup
- Data & Sync
- Collector lots / graded cards
- Trade system
- Backup / Restore

No ownership, collector metadata, trade-history, or Supabase schema changes.
