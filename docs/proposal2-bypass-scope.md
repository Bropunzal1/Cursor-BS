# Proposal 2 — Weak Wash Tank Bypass / Common Header to 196450

## Project intent

Create a **bypass around Weak Wash Tank 1963-00 / 1563-00** (shown on P&ID 42303-C) by combining **two existing feeder discharge lines** into a **common header** that feeds the **suction of booster 196450**, which then goes **To 19 RB**.

Sketch: `docs/curves/proposal2-ww-tank-bypass-sketch.png`  
Plant P&ID context (existing highlighted runs toward WW tank): `docs/curves/pid-42303C-lime-burning-sheet1-highlighted.png`

## Two feed legs (as designed)

| Source (sketch label) | Feeder pump (SW Eq#) | Model / shut-off @1750 (OEM) | Line size into tie-in |
|---|---|---|---|
| **From 2 Dregs** | **156502 or 156501** | Worthington **3CNG84** / 9.50" → **~110 ft** | **6"** (dregs leg) |
| **From 10/11 MT** (mud tank) | **157292 or 156301** | **4CNG84** / 8.00" → **~75 ft**, *or* **6CNG84** / 9.50" → **~100–102 ft** | **8"** (mud-tank leg) |

These two lines drop past the existing tank inlet valves and join a **common header sized 6" or 8"**, then a **6"** run into the **suction** of **196450**. Yellow path on Proposal 2 = tank bypass (not through the WW tank). Existing tank suction pumps to **14 RB** remain separate (not on the yellow path).

## What the plant P&ID (42303-C) contributes

The green-highlighted runs on Sheet 1 show the **upstream feeder network** that today delivers weak wash / mud-related flow **toward** the WW tank area. Proposal 2 is the local modification at the tank: **tie those arriving 6" (dregs) and 8" (10/11 MT) lines together and send them to 196450 instead of (or in addition to routing past) tank fill.**

- Tank bypass ⇒ **0 ft static tank head** on 196450 suction.
- Common header ⇒ the two selected feeders can pressurize **each other** if run together.

## Hydraulic conflict (this specific pair)

| Pair run together | Shut-off heads | Risk |
|---|---|---|
| 3CNG84 (dregs) + **4CNG84** (mud) | **110 ft vs ~75 ft** | **High** — 3CNG84 holds header above 4CNG84 shut-off → check valve closes → 4CNG84 dead-heads |
| 3CNG84 (dregs) + **6CNG84** (mud) | **110 ft vs ~100–102 ft** | **Moderate** — closer heads; still possible check-valve / low-flow on the weaker unit depending on losses and operating point |

**Do not use 60 ft for 157292** — OEM 4CNG84 @ 8.00" is **~75 ft**.

## Booster 196450 (unchanged conclusion)

Stacked worst case with governing feeder (3CNG84 @ 110 ft / 52.4 psig) + booster shut-off (curve **~156 ft** / 74.3 psig) ≈ **127 psig** → casing **PASS**. Seal flush Plan 32 still required at **≥70–75 psig**.

## Design actions for Proposal 2 viability

1. **If both legs may run together:** min-flow recycle upstream of each feeder check valve, **or** VFDs on the higher-head unit(s) tied to header pressure, **or** automated block valves so only one feeder source feeds the common header at a time.
2. Finalize common-header size (**6" vs 8"**) for velocity / friction at expected combined gpm (P&ID hand notes ~250 / ~450 gpm as duty context).
3. Keep existing WW tank inlet valves operable so tank fill can be restored / isolated as ops require.
4. Map sketch sources to live SW tags (156501/156502 on dregs; 157292 vs 156301 on 10/11 MT) before IFC.

See also: `docs/booster-pump-pressure-assessment.md`, `docs/curve-verification.md`.
