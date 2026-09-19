# Recommended Solution — Proposal 2 (WW Tank Bypass / Common Header)

**Fluid:** All legs carry **weak wash** (same fluid) — no cross-contamination concern at the tie-in.  
**Tank:** Weak Wash Tank **1963-00 / 1563-00 is abandoned** — not in service; no tank SSH / atmospheric buffer.  
**Layout:** 6" From 2 Dregs (**156501 or 156502**, 3CNG84 ~110 ft) + 8" From 10/11 MT (**157292** 4CNG84 ~75 ft *or* **156301** 6CNG84 ~102 ft) → common header → 6" suction **196450** → 19 RB.

## Recommendation (what to build)

**Primary solution: minimum-flow protection on each feeder + run interlocks.**  
Add VFDs only if ops must frequently run both legs together *and* share load by pressure matching.

### 1. Minimum-flow recirculation (required capital)

Install a dedicated **min-flow bypass on each feeder** that can feed the common header:

| Item | Spec |
|---|---|
| Takeoff | **Upstream of the discharge check valve** (so recycle still works when the check is closed by header back-pressure) |
| Return | Back to that pump’s own suction source (2 Dregs vessel / 10–11 MT) — same weak wash |
| Control | Restriction orifice (RO) sized for vendor **minimum continuous flow** at shut-off differential; optional auto on/off valve open whenever the feeder motor is running |
| Duty | Protects seal and bearings if the weaker pump is dead-headed by the stronger feeder |

**Priority order:** Mud-tank feeder (**157292** especially) first — largest head gap vs 3CNG84. Still install on the dregs 3CNG84(s) for blocked-discharge / closed-header cases.

### 2. Controls / interlocks (low cost, high value)

| Interlock | Purpose |
|---|---|
| **Header pressure PI/PT** on the new common header | Operator visibility; alarm if pressure approaches weaker-pump shut-off |
| **Permit-to-start weaker feeder** | Allow 4CNG84 (or lower-head unit) to start only if header pressure is below its safe operating band *or* its min-flow valve is proven open |
| **Single-source mode (default)** | Prefer only **one** of {dregs feeder, MT feeder} into the common header unless dual-feed is explicitly selected and min-flow is healthy |
| **196450 running permissives** | Do not dead-head the booster; confirm downstream path to 19 RB / min-flow on 196450 if that already exists |

### 3. Piping details for the bypass header

| Detail | Recommendation |
|---|---|
| Common header size | Prefer **8"** for the combined run (matches larger MT leg; lower velocity/friction), reducer to **6"** only if required at the 196450 suction flange |
| Isolation | Block valves on each leg **before** the tee so either source or the tank inlet path can be isolated |
| Check valves | Keep / verify a check on **each** feeder discharge (already typical on 42303-C legs) |
| Tank inlets | Isolate / blank as required for abandoned tank — do not rely on tank fill for this duty |
| Slope / drains / flush | Weak wash slurry — design for drain/flush points on the new header dead-legs |

### 4. Booster 196450 (keep from hydraulic assessment)

| Item | Action |
|---|---|
| Casing | No upgrade required for stacked shut-off (~127 psig) |
| Mechanical seal | **API Plan 32** clean-water flush; header **≥ 70–75 psig** (≥15–20 psi above max suction ~52 psig from 3CNG84) |
| Suction strainers / flush | Confirm slurry duty practices for abrasive weak wash |

## Why not lead with VFDs or full header segregation?

| Option | Role in *this* recommendation |
|---|---|
| **Min-flow + interlocks** | **Do this.** Cheapest reliable fix for dead-head when both legs *might* run; works for slurry; matches existing check-valve reality |
| **VFDs on 3CNG84 (and/or 6CNG84)** | **Optional Phase 2** if dual-feed is routine and you need pressure-matched load sharing. Higher capital, more I&C, still keep min-flow as backup |
| **Hard segregation (never parallel)** | Acceptable **ops-only** interim if process never needs both sources at once — but do **not** rely on procedure alone for 110 vs 75 ft without min-flow if someone can open both valves |

## Operating modes (after install)

1. **Normal:** One feeder source → common header → 196450 → 19 RB; other leg blocked.  
2. **Dual-feed (if required):** Both feeders allowed only with min-flow proven; alarm on high header pressure vs weaker curve.  
3. **Tank mode:** Bypass closed / not used; existing WW tank path and 14 RB pumps unchanged.

## Decision needed from you before IFC

1. Will **157292 (4CNG84)** or **156301 (6CNG84)** be the normal 10/11 MT feeder into this header? (Drives how severe the mismatch is.)  
2. Must **dregs + MT** ever run **simultaneously** into 196450, or is single-source enough for 19 RB?  
3. Confirm 196450 suction flange size (keep 6" vs upsize).

---

**Bottom line:** Build the yellow-path bypass and common header as drawn; protect the feeders with **min-flow recycle upstream of each check valve** plus **simple header-pressure interlocks**. That makes the tank bypass viable without depending on operators to prevent dead-head. Treat VFDs as an upgrade only if dual-feed load sharing becomes a standing operating mode.
