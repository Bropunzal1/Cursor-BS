# P&ID Layout Confirmation — Common Header Bypass to 196450

**Drawing:** Longview Fibre Company — Recovery, Lime Burning, No. 5 Kiln Installation, P&ID Sheet 1  
**Dwg No.:** 42303-C  
**File:** `docs/curves/pid-42303C-lime-burning-sheet1-highlighted.png`

## What the highlighted path shows

1. **Multiple feeder sources** (green liquor clarifier / dregs washer / lime mud thickener & storage areas) discharge into shared **weak-wash (WW)** collection headers.
2. Those headers converge into a **common run** toward the left side of the sheet.
3. The path **bypasses Existing Weak Wash Storage Tank 1563-00** (does not rely on tank static head for the booster).
4. Red field note directs that run **→ 196450** (booster), consistent with series suction feed from the header.

## Handwritten operating notes on the sheet

- **~250 gpm** (upper / mid header notes)
- **~450 gpm** (lower thickener collection note)

These support a combined operating duty on the order of hundreds of gpm into the common header — useful for duty-point checks, not for replacing shut-off as the mechanical worst case.

## Relation to hydraulic assessment

| Original assumption | P&ID confirmation |
|---|---|
| Feeders into common header → booster suction | **Confirmed** |
| 0 ft static suction head at booster (no tank head) | **Confirmed** by tank bypass |
| Parallel feeder operation possible | **Confirmed** — and is the primary operational risk given mismatched shut-off heads |
| Check valves present | **Visible** on feeder discharge legs |

Full pressure / casing / seal conclusions remain in `docs/booster-pump-pressure-assessment.md` and `docs/curve-verification.md`.
