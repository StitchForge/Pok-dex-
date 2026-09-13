# DexBinder v0.7.3c — iPhone Collector Form Layout Fix

Fixes collector-detail fields extending beyond the right edge of the modal on iPhone/Safari.

Changes:
- Allows nested CSS grid children to shrink correctly.
- Constrains all collector inputs/selects/textareas to their column width.
- Specifically constrains date and number inputs, which can have large intrinsic widths on iOS Safari.
- Uses `minmax(0, 1fr)` for the two-column collector grid on phones.
- Falls back to a single-column collector grid on very narrow screens.
- Improves copy-group header wrapping so group title / quantity / grading tag do not crowd each other.

No collector data or metadata schema changes.
All v0.7.3b fixes and v0.7.3a multi-condition / graded-card support remain intact.
