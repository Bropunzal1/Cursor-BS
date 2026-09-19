# Curve Verification — Closer Shut-off Reads

**Catalog speed:** 1750 RPM  
**Conversion:** \(P_{\mathrm{psig}} = H_{\mathrm{ft}} \times 1.10 / 2.31\)

## Adopted shut-off table (closer inspection)

| Eq # | Role | Model | Impeller (in) | Shut-off (ft) @1750 | Discharge (psig) |
|---|---|---|---:|---:|---:|
| 196450 | Booster | 6CNG104 | 11.875 | **162** | **77.14** |
| 156502 | Feeder | 3CNG84 | 9.50 | **110** | **52.38** |
| 156501 | Feeder | 3CNG84 | 9.50 | **110** | **52.38** |
| 156301 | Feeder | 6CNG84 | 9.50 | **102** | **48.57** |
| 157292 | Feeder | 4CNG84 | 8.00 | **70** | **33.33** |

> Note: If a worksheet shows 74.29 psig next to 162 ft, or 35.71 psig next to 70 ft, those pressures are from the older 156 ft / 75 ft heads. Use the recalculated psig above.

## vs earlier stated values

| Pump | Earlier stated | Closer OEM read | Change |
|---|---:|---:|---|
| 3CNG84 / 9.50" | ~110 | **110** | Unchanged |
| 4CNG84 / 8.00" | ~75 | **70** | −5 ft |
| 6CNG84 / 9.50" | ~88 → ~102 | **102** | Confirmed |
| 6CNG104 / 11.875" | ~136 → ~156 | **162** | +6 ft vs prior curve read |

## Impact

- Worst feeder suction still **3CNG84 @ 52.38 psig**
- Stacked casing: 52.38 + 77.14 ≈ **129.5 psig** (still PASS vs Class 150)
- Plan 32: still **≥70–75 psig** (52.38 + 15…20)
- XOR still required: 110 vs 70 ft (or 110 vs 102) — **no dual-feed; no recirculation**
