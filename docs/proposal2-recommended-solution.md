# Recommended Solution — Proposal 2 (IFC basis)

**Fluid:** Weak wash on all lines (S.G. 1.10).  
**Tank:** **1963-00 / 1563-00 abandoned.**  
**Layout:** 6" From 2 Dregs (156501/156502) + 8" From 10/11 MT (157292 or 156301) → common header → 196450 → 19 RB.

## Design condition (locked for IFC)

**2 Dregs and 10/11 MT never feed the common header together** (hard mutual-exclusion interlock).

Because dual-feed is prohibited:

- **No feeder min-flow / recirculation** is required for parallel dead-head protection.
- VFDs for pressure matching are **not** required.
- Capital is piping + isolation + checks + header PT + interlocks + Plan 32 on 196450.

## What to build

| Item | Spec |
|---|---|
| Common header | Prefer **8"**; reduce to **6"** at 196450 suction only if flange requires |
| Isolation | Block valve on **each** leg before the tee |
| Check valves | On each feeder discharge into the header |
| Interlocks | Dregs XOR MT into header (motor + valve permissives) |
| Header PT | Monitoring / alarm |
| Abandoned tank | Isolate / blank per plant practice |
| 196450 | Plan 32 flush **≥ 70–75 psig**; casing OK (~127 psig stacked worst case) |

## Operating modes

1. **Dregs mode:** 2 Dregs → header → 196450 → 19 RB; MT leg blocked.  
2. **MT mode:** 10/11 MT → header → 196450 → 19 RB; dregs leg blocked.  
3. **Dual-feed:** **Not allowed.**

## IFC package

See **`docs/IFC-proposal2-common-header-196450.md`**.
