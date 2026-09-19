# Proposal 2 — Weak Wash Tank Bypass / Common Header to 196450

## Project intent

Create a **common header** from two existing weak-wash feeder discharges into the suction of booster **196450** (To 19 RB), with Weak Wash Tank **1963-00 / 1563-00 abandoned** (out of service — no tank SSH / atmospheric buffer).

Sketch: `docs/curves/proposal2-ww-tank-bypass-sketch.png`  
Plant P&ID context (upstream runs that formerly went toward the WW tank): `docs/curves/pid-42303C-lime-burning-sheet1-highlighted.png`

## Two feed legs (as designed)

| Source (sketch label) | Feeder pump (SW Eq#) | Model / shut-off @1750 (OEM) | Line size into tie-in |
|---|---|---|---|
| **From 2 Dregs** | **156502 or 156501** | Worthington **3CNG84** / 9.50" → **~110 ft** | **6"** (dregs leg) |
| **From 10/11 MT** (mud tank) | **157292 or 156301** | **4CNG84** / 8.00" → **~75 ft**, *or* **6CNG84** / 9.50" → **~100–102 ft** | **8"** (mud-tank leg) |

These two lines join a **common header sized 6" or 8"**, then a **6"** run into the **suction** of **196450**. The WW tank is **abandoned** — not on the live path. Any former tank-bottom pumps to **14 RB** are out of scope for this duty.

## What the plant P&ID (42303-C) contributes

The green-highlighted runs on Sheet 1 show the **upstream feeder network** that today delivers weak wash / mud-related flow **toward** the WW tank area. Proposal 2 is the local modification at the tank: **tie those arriving 6" (dregs) and 8" (10/11 MT) lines together and send them to 196450 instead of (or in addition to routing past) tank fill.**

- Tank **abandoned** ⇒ **0 ft static tank head** on 196450 suction.
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

**Adopted recommendation:** see `docs/proposal2-recommended-solution.md` — **min-flow recycle upstream of each feeder check valve + header-pressure interlocks**; VFDs optional if dual-feed load sharing is routine.

1. Install min-flow on each feeder that can feed the common header (mud-tank leg first if using 4CNG84).
2. Prefer **8"** combined header, reduce to **6"** at 196450 only if the suction flange requires it.
3. Keep existing WW tank inlet valves operable.
4. Set 196450 Plan 32 flush **≥70–75 psig**.
5. Confirm which MT pump (157292 vs 156301) and whether dual-feed is required before IFC.
