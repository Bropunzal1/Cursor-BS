# Engineering Evaluation: Feeder Discharge Pressure Impact on Booster Pump 196450

**Status:** Complete (independent verification of supplied hydraulic inputs)  
**Configuration:** Standalone series — feeder → booster suction (0 ft static suction head)  
**Process fluid:** Weak lime wash slurry (assumed S.G. = 1.10)  
**Speed:** All pumps at 1800 RPM (60 Hz, 4-pole)

## Verdict

Feeder shut-off discharge into the suction of booster **SW Eq# 196450 (Worthington 6CNG104)** does **not** create a casing over-pressure or expected thrust-bearing failure risk. The controlling risk is **mechanical seal flush pressure** for abrasive slurry service, plus **parallel operation of mismatched feeders**.

OEM curve check (`docs/curve-verification.md`): **3CNG84 ≈ 110 ft and 4CNG84 ≈ 75 ft are correct; 6CNG84 is ~100–102 ft (not 88); 6CNG104 is ~156 ft (not 136).** Worst-case stacked casing pressure rises to **~127 psig** (still PASS vs Class 150).

| Check | Result |
|---|---|
| Casing integrity (worst-case dead-head stack) | **PASS** (~127 psig curve-basis; ~134 psig @1800 affinity) |
| Axial thrust from elevated suction pressure | **PASS** (standard CNG frame expected adequate) |
| Mechanical seal pressure rating | **CONDITIONAL PASS** — Plan 32 flush must track max suction |
| Parallel feeder operation into common header | **FAIL without interlocks / protection** |

## Equipment

| SW Eq # | Role | Model | Impeller |
|---|---|---|---|
| 196450 | Booster | Worthington 6CNG104 | 11.875" |
| 156301 | Feeder | Worthington 6CNG84 | 9.50" |
| 157292 | Feeder | Worthington 4CNG84 | 8.00" |
| 156502 | Feeder | Worthington 3CNG84 | 9.50" |
| 156501 | Feeder | Worthington 3CNG84 | 9.50" |

Piping layout: feeder discharge into a common header (or individual feed) directly into the booster suction flange. No static tank head.

## Hydraulic basis

Conversion used:

\[
P_{\mathrm{psig}} = \frac{H_{\mathrm{ft}} \times \mathrm{S.G.}}{2.31}
\]

Shut-off heads from Worthington rating curves at **1750 RPM** (catalog), S.G. = 1.10. See `docs/curve-verification.md` and `docs/curves/`.

| SW Eq # | Role | Stated head | **Curve head @1750** | Curve discharge pressure |
|---|---|---:|---:|---:|
| 196450 | Booster | ~136 ft | **~156 ft** (A-1454) | **74.3 psig** |
| 156502 | Feeder | ~110 ft | **~110 ft** (A-1448) | **52.4 psig** (worst-case feed) |
| 156501 | Feeder | ~110 ft | **~110 ft** (A-1448) | **52.4 psig** (worst-case feed) |
| 156301 | Feeder | ~88 ft | **~100–102 ft** (A-1452) | **~48.5 psig** |
| 157292 | Feeder | ~75 ft | **~75 ft** | **35.7 psig** |

**Governing suction pressure at the booster:** still **52.4 psig** from either 3CNG84 feeder at shut-off (curve-confirmed).

> Use standard 6CNG104 chart A-1454 (eye 27 in²). Do not use large-eye A-1456 (~112 ft shut-off) for Eq# 196450.

## Assessments

### 1. Casing integrity — PASS

Worst-case total internal casing pressure with the booster also dead-headed (curve-corrected booster head):

\[
52.4\ \mathrm{psig\ (suction)} + 74.3\ \mathrm{psig\ (booster\ shut\text{-}off\ @\ 156\ ft)} = 126.7\ \mathrm{psig}
\]

Class 150 ANSI cast/ductile iron pump casings are typically rated **175–275 psig**. Margin to the lower bound is approximately **48 psig** (~28%). Casing over-pressurization is not a concern under the stated assumptions.

### 2. Axial thrust bearing loads — PASS

Suction pressure in the 30–52 psig band applies moderate axial load toward the impeller eye / against the thrust bearing arrangement on the 11.875" impeller. For a standard Worthington CNG bearing frame, this is within normal design expectation and is not expected to cause premature thrust-bearing failure by suction pressure alone.

### 3. Mechanical seal integrity — CONDITIONAL PASS (action required)

52.4 psig is within typical single mechanical seal pressure capability (often 100+ psig). For **abrasive weak lime wash**, an external clean-water flush (**API Plan 32**) is required so solids do not enter the seal faces.

**Requirement:** Flush supply pressure must remain **15–20 psi above maximum suction pressure**.

| Basis | Value |
|---|---|
| Max feeder suction pressure | 52.4 psig |
| Minimum flush (52.4 + 15) | **67.4 psig** |
| Preferred flush (52.4 + 20) | **72.4 psig** |
| Recommended header setpoint (rounded with margin) | **70–75 psig** |

### 4. System layout — mismatched parallel feeders — WARNING

Feeder shut-off heads differ substantially (**~110 ft vs ~102 ft vs ~75 ft** on OEM curves). Parallel operation into a common discharge header without protection is hazardous:

- A higher-head feeder (e.g. 3CNG84 @ ~110 ft) can hold header pressure above a lower-head feeder’s shut-off (e.g. 4CNG84 @ ~75 ft).
- That forces the lower-head pump’s check valve closed → **dead-head / zero flow**.
- Result: rapid fluid heating, seal and bearing damage.

**Controls / operations requirement:** Do not allow unrestricted parallel feeder operation. Use start/stop interlocks, verified check valves, and preferably minimum-flow or dead-head protection on each feeder.

## Required actions

1. Set / verify Plan 32 flush header for **196450** at **≥ 70–75 psig** (maintain ≥15–20 psi above actual operating suction).
2. Confirm flush water quality (clean, filtered) suitable for seal faces in lime-wash service.
3. Prohibit uncontrolled parallel feeder operation into the common header; implement interlocks or documented single-feeder operating rules.
4. Attach OEM shut-off / H-Q curves for each installed impeller (copies filed under `docs/curves/`). Use **156 ft** for 6CNG104 and **~102 ft** for 6CNG84 / 9.50"; do not retain the stated 136 / 88 ft values.
5. Confirm casing MAWP / hydrotest rating on the nameplate or manufacturer data sheet for 196450 (document vs. **~127 psig** stacked case).

## Conclusion

In series service with 0 ft static suction head, maximum feeder discharge pressure of **~52.4 psig** is acceptable for the **6CNG104** booster from a casing and bearing standpoint. Proceed only with **elevated Plan 32 flush** and **controls that prevent mismatched feeders from dead-heading each other**.
