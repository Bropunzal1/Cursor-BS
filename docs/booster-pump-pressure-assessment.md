# Engineering Evaluation: Feeder Discharge Pressure Impact on Booster Pump 196450

**Status:** Complete (OEM curves + P&ID + Proposal 2 sketch)  
**Project (Proposal 2):** **Abandon** WW Tank **1963-00 / 1563-00**; tie **6" From 2 Dregs** (pump **156502 or 156501**, 3CNG84) and **8" From 10/11 MT** (pump **157292 or 156301**) into a **common header (6" or 8")** → **6" into suction of 196450** → **To 19 RB** (0 ft tank SSH)  
**References:** Proposal sketch `docs/curves/proposal2-ww-tank-bypass-sketch.png`; plant P&ID 42303-C highlighted upstream runs `docs/curves/pid-42303C-lime-burning-sheet1-highlighted.png`; scope `docs/proposal2-bypass-scope.md`  
**Process fluid:** Weak lime wash slurry (assumed S.G. = 1.10)  
**Speed:** All pumps at 1800 RPM (60 Hz, 4-pole); OEM curves catalogued at 1750 RPM

## Verdict

Feeder shut-off discharge into the suction of booster **SW Eq# 196450 (Worthington 6CNG104)** does **not** create a casing over-pressure or expected thrust-bearing failure risk. The controlling risk is **mechanical seal flush pressure** for abrasive slurry service, plus **parallel operation of mismatched feeders**.

OEM curve check (`docs/curve-verification.md`): closer reads — **3CNG84 = 110 ft**, **4CNG84 = 70 ft**, **6CNG84 = 102 ft**, **6CNG104 = 162 ft**. Stacked casing ≈ **129.5 psig** (PASS vs Class 150).

| Check | Result |
|---|---|
| Casing integrity (worst-case dead-head stack) | **PASS** (~129.5 psig) |
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

### P&ID + Proposal 2 layout (confirmed)

**Plant P&ID 42303-C** (green highlight): upstream feeder network delivering weak wash / mud-related flow **toward** the WW tank area.  
**Proposal 2 sketch** (yellow highlight): at the tank, the **6" dregs** and **8" 10/11 MT** lines are tied into a **common header** that **bypasses** tank **1963-00 / 1563-00** and enters **196450** suction (existing tank pumps to 14 RB stay off that path).

| Observation | Engineering implication |
|---|---|
| Two feeder sources on one solid header | Dead-head hierarchy if both run — worst if dregs **3CNG84 (110 ft)** + mud **4CNG84 (70 ft)**; IFC prohibits dual-feed |
| Bypass of WW tank | Booster suction ≈ feeder discharge − losses (**0 ft tank SSH**) |
| Check valves on feeder legs (P&ID) | Necessary; do not replace min-flow / VFD / segregation |
| Common header 6" or 8"; suction into 196450 shown 6" | Size for combined duty; confirm at IFC |
| Hand notes ~250 / ~450 gpm on P&ID | Duty context; integrity still uses shut-off worst case |

## Hydraulic basis

Conversion used:

\[
P_{\mathrm{psig}} = \frac{H_{\mathrm{ft}} \times \mathrm{S.G.}}{2.31}
\]

Shut-off heads from Worthington rating curves at **1750 RPM** (catalog), S.G. = 1.10. See `docs/curve-verification.md` and `docs/curves/`.

| SW Eq # | Role | Closer shut-off @1750 | Discharge P (S.G. 1.10) |
|---|---|---:|---:|
| 196450 | Booster | **162 ft** | **77.14 psig** |
| 156502 | Feeder | **110 ft** | **52.38 psig** (worst-case feed) |
| 156501 | Feeder | **110 ft** | **52.38 psig** (worst-case feed) |
| 156301 | Feeder | **102 ft** | **48.57 psig** |
| 157292 | Feeder | **70 ft** | **33.33 psig** |

**Governing suction pressure at the booster:** **52.38 psig** from either 3CNG84 feeder at shut-off.

> Pressures are \(H \times 1.10 / 2.31\). Do not pair 162 ft with 74.29 psig or 70 ft with 35.71 psig — those were from older heads.

## Assessments

### 1. Casing integrity — PASS

Worst-case total internal casing pressure with the booster also dead-headed (curve-corrected booster head):

\[
52.38\ \mathrm{psig\ (suction)} + 77.14\ \mathrm{psig\ (booster\ shut\text{-}off\ @\ 162\ ft)} = 129.5\ \mathrm{psig}
\]

Class 150 ANSI cast/ductile iron pump casings are typically rated **175–275 psig**. Margin to the lower bound is approximately **45 psig**. Casing over-pressurization is not a concern under the stated assumptions.

### 2. Axial thrust bearing loads — PASS

Suction pressure in the 30–52 psig band applies moderate axial load toward the impeller eye / against the thrust bearing arrangement on the 11.875" impeller. For a standard Worthington CNG bearing frame, this is within normal design expectation and is not expected to cause premature thrust-bearing failure by suction pressure alone.

### 3. Mechanical seal integrity — CONDITIONAL PASS (action required)

52.4 psig is within typical single mechanical seal pressure capability (often 100+ psig). For **abrasive weak lime wash**, an external clean-water flush (**API Plan 32**) is required so solids do not enter the seal faces.

**Requirement:** Flush supply pressure must remain **15–20 psi above maximum suction pressure**.

| Basis | Value |
|---|---|
| Max feeder suction pressure | 52.38 psig |
| Minimum flush (52.38 + 15) | **67.4 psig** |
| Preferred flush (52.38 + 20) | **72.4 psig** |
| Recommended header setpoint (rounded with margin) | **70–75 psig** |

### 4. System layout — mismatched parallel feeders — WARNING

Feeder shut-off heads differ (**110 / 102 / 70 ft**). IFC **prohibits** parallel feed into the common header (Dregs XOR MT); no recirculation required under that rule.

If dual-feed were ever allowed without protection: a higher-head feeder (3CNG84 @ 110 ft) could hold header pressure above a lower-head feeder’s shut-off (4CNG84 @ 70 ft), closing its check valve and dead-heading it.

## Required actions

1. Set / verify Plan 32 flush header for **196450** at **≥ 70–75 psig** (maintain ≥15–20 psi above actual operating suction).
2. Confirm flush water quality (clean, filtered) suitable for seal faces in lime-wash service.
3. Prohibit uncontrolled parallel feeder operation into the common header; implement interlocks or documented single-feeder operating rules.
4. Attach OEM curves; use closer reads **162 / 110 / 102 / 70 ft**.
5. Confirm casing MAWP for 196450 vs **~129.5 psig** stacked case.

## Conclusion

In series service with 0 ft static suction head (tank abandoned), maximum feeder discharge **52.38 psig** (3CNG84) is acceptable for **6CNG104**. Use booster shut-off **162 ft / 77.14 psig** in stacked checks (~129.5 psig). IFC: exclusive feed + Plan 32 ≥70–75 psig; no feeder recirculation.
