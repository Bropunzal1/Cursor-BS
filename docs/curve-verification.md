# Curve Verification: Problem Statement vs Worthington OEM Charts

**Charts used:** Worthington *End Suction Centrifugal Pumps – Ratings* (copies in `docs/curves/`)  
**Catalog speed:** 1750 RPM (standard 60 Hz curve basis)  
**Problem statement speed:** 1800 RPM (synchronous). Catalog practice is to use the 1750 RPM curves as-published for 4-pole motors; optional affinity scale to 1800 is shown for sensitivity.

## Equipment vs matching curve sheet

| SW Eq # | Model / impeller (stated) | Matching OEM curve | Sheet |
|---|---|---|---|
| 156502 / 156501 | 3CNG84 / 9.50" | 3 CNG-CNFE-84, curve A-1448 | page 112 |
| 157292 | 4CNG84 / 8.00" | 4 CNG-CNFE-84 | page 113 (bottom) |
| 156301 | 6CNG84 / 9.50" | 6 CNG-CNFE-84, curve A-1452 | page 114 (bottom) |
| 196450 | 6CNG104 / 11.875" | **6 CNG-104**, curve **A-1454** (eye 27 in²) — **not** large-eye A-1456 | page 115 (top) |

Do **not** use page 115 bottom (A-1456, eye 32.2 in², CNGL/CNFEL “L” models) for Eq# 196450.

## Shut-off head confirmation

| Pump | Stated max head | Curve shut-off @ 1750 RPM | Match? | Notes |
|---|---:|---:|---|---|
| 3CNG84 / 9.50" | ~110 ft | **~110 ft** | **YES** | Top impeller curve meets ~110 ft at Q = 0 |
| 4CNG84 / 8.00" | ~75 ft | **~75 ft** | **YES** | ~74–76 ft on chart; ~75 ft is correct |
| 6CNG84 / 9.50" | ~88 ft | **~100–102 ft** | **NO** | Stated 88 ft understates curve. ~88 ft is nearer an ~8.5" trim, not 9.50" |
| 6CNG104 / 11.875" | ~136 ft | **~156 ft** | **NO** | Stated 136 ft understates A-1454 shut-off by ~20 ft. (~112 ft on this page is the **L-frame** chart, wrong model) |

### Optional affinity to 1800 RPM

\[
H_{1800} = H_{1750}\left(\frac{1800}{1750}\right)^{2} \approx 1.058 \times H_{1750}
\]

| Pump | H @ 1750 (curve) | H @ 1800 (affinity) | P @ 1800, S.G. 1.10 |
|---|---:|---:|---:|
| 3CNG84 / 9.50" | 110 ft | 116 ft | 55.4 psig |
| 4CNG84 / 8.00" | 75 ft | 79 ft | 37.8 psig |
| 6CNG84 / 9.50" | 102 ft | 108 ft | 51.4 psig |
| 6CNG104 / 11.875" | 156 ft | 165 ft | 78.6 psig |

## Impact on prior assessment

1. **Worst-case feeder suction pressure**  
   Still governed by the **3CNG84** feeders (~110 ft / ~52.4 psig at curve speed; ~55 psig if affinity-scaled). Correcting 6CNG84 upward to ~102 ft does **not** change the governing feeder.

2. **Booster self-generated shut-off pressure**  
   Use **~156 ft → 74.3 psig** (S.G. 1.10, 1750 basis), not 64.8 psig from the stated 136 ft.

3. **Stacked casing pressure (feeder shut-off + booster shut-off)**  
   - Curve basis (1750): \(52.4 + 74.3 = \mathbf{126.7\ psig}\)  
   - Affinity 1800 sensitivity: \(55.4 + 78.6 = \mathbf{134.0\ psig}\)  
   Both remain below Class 150 typical casing ratings (175–275 psig). **Casing PASS still holds**, with less margin than the original write-up.

4. **Plan 32 flush setpoint**  
   Unchanged recommendation band is still valid; if using affinity-scaled max suction (~55 psig), keep flush **≥ 70–75 psig** (≥15–20 psi above suction).

5. **Parallel feeder mismatch**  
   Confirmed and slightly worse after curve check: feeder shut-offs are ~110 / ~102 / ~75 ft (not 110 / 88 / 75). High-head vs low-head dead-head risk remains.

## Verdict on the initial statement’s curve values

| Claim in initial statement | Verified against OEM curves? |
|---|---|
| 3CNG84 @ 9.50" ≈ 110 ft | **Correct** |
| 4CNG84 @ 8.00" ≈ 75 ft | **Correct** |
| 6CNG84 @ 9.50" ≈ 88 ft | **Incorrect** — curve ≈ **100–102 ft** |
| 6CNG104 @ 11.875" ≈ 136 ft | **Incorrect** — curve A-1454 ≈ **156 ft** |

**Bottom line:** Two of four shut-off heads match the Worthington charts; the 6CNG84 and 6CNG104 heads in the problem statement are low. Recalculated worst-case casing pressure rises to ~127 psig (curve basis) but the series configuration remains mechanically acceptable on casing rating. Seal flush and parallel-feeder interlock actions are unchanged.
