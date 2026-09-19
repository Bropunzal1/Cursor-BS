# IFC — Proposal 2: Weak Wash Common Header to 196450

**Status:** ISSUED FOR CONSTRUCTION (IFC)  
**Date:** 2026-09-19  
**Plant:** Longview Fibre — Recovery / Lime Burning  
**Reference P&ID:** 42303-C (Sheet 1)  
**Project:** Abandon WW Tank 1963-00 / 1563-00; feed booster **196450** from a two-leg common header  

---

## 1. Scope of work (construct)

1. Abandon Weak Wash Tank **1963-00 / 1563-00** for this duty (isolate / blank tank connections as directed by plant standards; tank not used for SSH or surge).
2. Tie the following into a **common header** feeding the **suction of pump 196450**, discharge **To 19 RB**:
   - **From 2 Dregs** — 6" — feeder **156501 or 156502** (Worthington 3CNG84)
   - **From 10/11 MT** — 8" — feeder **157292 or 156301** (Worthington 4CNG84 or 6CNG84)
3. Prefer **8"** for the combined header; reduce to **6"** only if required at the 196450 suction flange.
4. Install isolation (block) valves on **each** leg upstream of the common tee.
5. Verify / provide a **check valve** on each feeder discharge into the header.
6. Install a **pressure transmitter (PT)** on the common header (local PI acceptable in addition).
7. Provide drain / flush connections suitable for weak-wash slurry on new piping.
8. Confirm / set **API Plan 32** flush on **196450** at **≥ 70–75 psig**.

**Not in scope:** Feeder minimum-flow recirculation lines (not required under the exclusive-feed interlock below). VFDs for pressure matching (not required).

---

## 2. Governing design condition (mandatory)

### Exclusive feed — 2 Dregs XOR 10/11 MT

| Condition | Requirement |
|---|---|
| **D-1** | The **From 2 Dregs** leg and the **From 10/11 MT** leg **shall never feed the common header at the same time**. |
| **D-2** | Only **one** source may be aligned to 196450 at any time (one isolation path open into the header; the other leg blocked). |
| **D-3** | Because dual-feed is prohibited, **feeder recirculation / min-flow bypass is not required** for parallel dead-head protection. |
| **D-4** | Interlocks shall be **hard** (PLC / DCS / motor permissive), not procedure-only. |

**Rationale:** OEM shut-off heads differ (3CNG84 ~110 ft vs 4CNG84 ~75 ft or 6CNG84 ~102 ft). Simultaneous operation into one solid header can dead-head the weaker pump. Exclusive feed removes that scenario.

---

## 3. Controls / interlocks (IFC)

Implement in DCS/PLC (tag names per plant convention):

| ID | Logic |
|---|---|
| **I-1** | **Mutual exclusion:** Dregs-to-header path open **OR** MT-to-header path open — never both. Prefer valve position proven + motor start permit. |
| **I-2** | Start of a dregs feeder into the header **inhibited** if MT isolation into header is open (or MT feeder running to header). |
| **I-3** | Start of an MT feeder into the header **inhibited** if dregs isolation into header is open (or dregs feeder running to header). |
| **I-4** | Opening the second leg’s header isolation while the first is open **blocked** (or forces the first closed per ops preference — document chosen strategy). |
| **I-5** | **196450** start / run: confirm downstream path to 19 RB per existing plant pump protection practice. |
| **I-6** | Common-header **PT** high alarm for operator awareness (set from selected feeder curve / ops). |

Document final valve tags, motor tags, and cause-and-effect on the IFC controls sheet.

---

## 4. Hydraulic basis (design data)

**Fluid:** Weak wash on all lines · **S.G. = 1.10** · **P (psig) = H (ft) × S.G. / 2.31**  
**Curves:** Worthington catalog @ **1750 RPM**

| Eq | Role | Model | OEM shut-off | Discharge P |
|---|---|---|---:|---:|
| 156501 / 156502 | Dregs feeder | 3CNG84 / 9.50" | ~110 ft | 52.4 psig |
| 157292 | MT feeder (alt) | 4CNG84 / 8.00" | ~75 ft | 35.7 psig |
| 156301 | MT feeder (alt) | 6CNG84 / 9.50" | ~100–102 ft | ~48.5 psig |
| 196450 | Booster | 6CNG104 / 11.875" (A-1454) | ~156 ft | 74.3 psig |

**Worst-case stacked casing (feeder shut-off + booster shut-off):** ~52.4 + 74.3 ≈ **127 psig** → **PASS** vs Class 150 typical 175–275 psig.  
**Booster seal:** Plan 32 flush **≥ 70–75 psig**.

---

## 5. Construction notes

1. Match existing materials / specs for weak-wash slurry service (abrasion, sealing).
2. Support new header; avoid pocketing slurry; provide drains at low points.
3. Hydrotest new piping per plant piping spec; do not over-pressure abandoned tank.
4. After install: prove **I-1…I-4** with simulated dual-align attempts (both valves / both starts) — dual-feed must fail closed / inhibit.
5. Prove single-source modes: Dregs→196450→19 RB and MT→196450→19 RB independently.
6. Verify 196450 Plan 32 pressure under max expected suction (dregs 3CNG84 case).

---

## 6. IFC deliverables checklist

| Item | Status |
|---|---|
| Design basis / exclusive-feed condition | This document |
| P&ID markup (42303-C + Proposal 2 sketch) | Attach plant redlines |
| OEM curve verification | `docs/curve-verification.md` |
| Engineering assessment | `docs/booster-pump-pressure-assessment.md` |
| Cause & effect / interlock list | Section 3 — expand to plant C&E form |
| Isometric / fab drawings | By piping contractor from IFC P&ID |
| Commissioning procedure | Section 5 steps 4–6 |

---

## 7. IFC stamp statement

This package is **Issued for Construction** on the basis that:

1. WW Tank **1963-00 / 1563-00 is abandoned** for this service.  
2. **2 Dregs and 10/11 MT never run together** into the common header (**hard interlock**).  
3. Therefore **no feeder recirculation** is included.  
4. Booster **196450** remains acceptable for casing pressure; Plan 32 flush is mandatory.

**Hold points before energizing 196450 on the new header:** exclusive-feed interlocks proven; Plan 32 pressure verified; single-source functional tests complete.
