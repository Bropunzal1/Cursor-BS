// cursor-canvas-title: Proposal 2 — Weak Wash Tank Abandoned
// Re-saved so the Open card appears in chat (cloud agent markdown links do not open canvases).
import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

function BypassDrawing() {
  const theme = useHostTheme();
  const ink = theme.text.primary;
  const muted = theme.text.secondary;
  const accent = theme.accent.primary;
  const stroke = theme.stroke.secondary;
  const fill = theme.fill.tertiary;
  const danger = theme.text.tertiary;

  return (
    <svg viewBox="0 0 920 360" width="100%" style={{ display: "block" }}>
      <text x="16" y="22" fill={muted} fontSize="11" fontFamily="monospace">
        PROPOSAL 2 — WW TANK ABANDONED · ALL LINES WEAK WASH
      </text>

      {/* Dregs source */}
      <text x="24" y="58" fill={ink} fontSize="12" fontFamily="monospace">
        FROM 2 DREGS
      </text>
      <text x="24" y="74" fill={muted} fontSize="10" fontFamily="monospace">
        156501/156502 · 3CNG84 · ~110 ft · 6&quot;
      </text>
      <line x1="48" y1="88" x2="48" y2="220" stroke={accent} strokeWidth="4" />
      <circle cx="48" cy="120" r="12" fill={fill} stroke={ink} strokeWidth="1.5" />
      <polygon points="48,110 55,128 41,128" fill={ink} />
      <text x="66" y="124" fill={muted} fontSize="9" fontFamily="monospace">
        CK
      </text>
      <path
        d="M48 140 C12 140 12 180 48 180"
        fill="none"
        stroke={theme.text.tertiary}
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text x="4" y="162" fill={theme.text.tertiary} fontSize="8" fontFamily="monospace">
        MIN-FLOW
      </text>

      {/* MT source */}
      <text x="170" y="58" fill={ink} fontSize="12" fontFamily="monospace">
        FROM 10/11 MT
      </text>
      <text x="170" y="74" fill={muted} fontSize="10" fontFamily="monospace">
        157292 (~75 ft) or 156301 (~102 ft) · 8&quot;
      </text>
      <line x1="200" y1="88" x2="200" y2="220" stroke={accent} strokeWidth="4" />
      <circle cx="200" cy="120" r="12" fill={fill} stroke={ink} strokeWidth="1.5" />
      <polygon points="200,110 207,128 193,128" fill={ink} />
      <text x="218" y="124" fill={muted} fontSize="9" fontFamily="monospace">
        CK
      </text>
      <path
        d="M200 140 C164 140 164 180 200 180"
        fill="none"
        stroke={theme.text.tertiary}
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text x="128" y="162" fill={theme.text.tertiary} fontSize="8" fontFamily="monospace">
        MIN-FLOW
      </text>

      {/* Abandoned tank */}
      <rect
        x="340"
        y="48"
        width="260"
        height="120"
        fill={fill}
        stroke={danger}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <line x1="340" y1="48" x2="600" y2="168" stroke={danger} strokeWidth="1.5" />
      <line x1="600" y1="48" x2="340" y2="168" stroke={danger} strokeWidth="1.5" />
      <text x="390" y="100" fill={danger} fontSize="12" fontFamily="monospace">
        WW TANK 1963-00 / 1563-00
      </text>
      <text x="430" y="118" fill={danger} fontSize="11" fontFamily="monospace">
        ABANDONED
      </text>
      <text x="400" y="138" fill={muted} fontSize="9" fontFamily="monospace">
        no tank SSH · not in service
      </text>

      {/* Common header */}
      <line x1="48" y1="220" x2="680" y2="220" stroke={accent} strokeWidth="5" />
      <text x="280" y="208" fill={accent} fontSize="11" fontFamily="monospace">
        COMMON HEADER · prefer 8&quot; · PT
      </text>
      <text x="280" y="242" fill={muted} fontSize="9" fontFamily="monospace">
        Tank abandoned — feeders pressurize this header directly
      </text>

      {/* Booster */}
      <line x1="680" y1="220" x2="680" y2="270" stroke={accent} strokeWidth="4" />
      <circle cx="680" cy="290" r="26" fill={fill} stroke={ink} strokeWidth="2" />
      <polygon points="680,272 696,304 664,304" fill={ink} />
      <text x="716" y="286" fill={ink} fontSize="12" fontFamily="monospace">
        196450
      </text>
      <text x="716" y="302" fill={muted} fontSize="9" fontFamily="monospace">
        6CNG104 · Plan 32 ≥70–75 psig
      </text>
      <line x1="706" y1="290" x2="880" y2="290" stroke={ink} strokeWidth="3" />
      <polygon points="880,290 868,284 868,296" fill={ink} />
      <text x="790" y="278" fill={ink} fontSize="11" fontFamily="monospace">
        TO 19 RB
      </text>

      <text x="16" y="340" fill={muted} fontSize="9" fontFamily="monospace">
        Accent path = live weak-wash feed · Dashed box = abandoned WW tank · Dashed loops = min-flow
      </text>
    </svg>
  );
}

export default function Proposal2Canvas() {
  const theme = useHostTheme();

  return (
    <Stack gap={24} style={{ padding: 20, maxWidth: 1100 }}>
      <Stack gap={8}>
        <Text tone="secondary" size="small" style={{ fontFamily: "monospace", letterSpacing: 1 }}>
          LONGVIEW FIBRE · RECOVERY / LIME BURNING · DWG 42303-C
        </Text>
        <H1>Proposal 2 — Weak Wash Tank Abandoned</H1>
        <Text tone="secondary">
          Two weak-wash feeder lines combine into a common header feeding booster{" "}
          <Code>196450</Code> (to 19 RB). The Weak Wash Tank is abandoned — no atmospheric
          buffer, 0 ft tank static suction head on the booster.
        </Text>
      </Stack>

      <Callout tone="warning" title="Tank status">
        WW Tank 1963-00 / 1563-00 is abandoned for this duty. Do not design for tank fill,
        tank SSH, or isolation through the vessel. All protection must live on the feeder
        legs and common header.
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat value="Abandoned" label="WW tank 1963-00" tone="warning" />
        <Stat value="0 ft" label="Tank SSH on 196450" />
        <Stat value="S.G. 1.10" label="Weak wash (all lines)" />
        <Stat value="~127 psig" label="Stacked casing worst case" tone="success" />
      </Grid>

      <Divider />

      <Stack gap={10}>
        <H2>01 · Problem</H2>
        <Text>
          Create a common header from the dregs and mud-tank weak-wash discharges into the
          suction of booster 196450, with the WW tank taken out of service. Without the tank,
          feeder discharge pressures act directly on each other and on the booster suction.
        </Text>
        <Table
          headers={["Source", "Pump (SW)", "Model", "Line", "OEM shut-off @1750"]}
          rows={[
            ["From 2 Dregs", "156501 / 156502", "3CNG84 · 9.50\"", "6\"", "~110 ft"],
            [
              "From 10/11 MT",
              "157292 or 156301",
              "4CNG84 · 8.00\" or 6CNG84 · 9.50\"",
              "8\"",
              "~75 ft or ~102 ft",
            ],
            ["Booster → 19 RB", "196450", "6CNG104 · 11.875\"", "6\" suction", "~156 ft (self)"],
          ]}
          columnAlign={["left", "left", "left", "left", "right"]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H2>02 · OEM curve verification</H2>
        <Text tone="secondary" size="small">
          Source: Worthington End Suction Centrifugal Pumps – Ratings · catalog 1750 RPM ·
          P = H × 1.10 / 2.31
        </Text>
        <Table
          headers={["Pump", "Stated", "OEM curve", "P (S.G. 1.10)", "Result"]}
          rows={[
            ["3CNG84 / 9.50\"", "~110 ft", "~110 ft (A-1448)", "52.4 psig", <Pill tone="success" key="m1">MATCH</Pill>],
            ["4CNG84 / 8.00\"", "~75 ft", "~75 ft", "35.7 psig", <Pill tone="success" key="m2">MATCH</Pill>],
            ["6CNG84 / 9.50\"", "~88 ft", "~100–102 ft (A-1452)", "~48.5 psig", <Pill tone="deleted" key="m3">UNDERSTATED</Pill>],
            ["6CNG104 / 11.875\"", "~136 ft", "~156 ft (A-1454)", "74.3 psig", <Pill tone="deleted" key="m4">UNDERSTATED</Pill>],
          ]}
          columnAlign={["left", "right", "left", "right", "left"]}
          rowTone={["success", "success", "danger", "danger"]}
          striped
        />
        <Text tone="secondary" size="small">
          Use A-1454 for 196450 (not large-eye A-1456). Do not use 60 ft for 157292 — OEM is ~75 ft.
        </Text>
      </Stack>

      <Stack gap={10}>
        <H2>03 · Drawing</H2>
        <Card>
          <CardHeader trailing={<Pill tone="warning">TANK ABANDONED</Pill>}>
            Common header path
          </CardHeader>
          <CardBody style={{ padding: 12 }}>
            <BypassDrawing />
          </CardBody>
        </Card>
        <Text tone="secondary" size="small">
          Plant P&amp;ID 42303-C shows upstream weak-wash runs that formerly went toward the tank.
          Proposal 2 retires the tank and feeds 196450 from the common header only.
        </Text>
      </Stack>

      <Stack gap={10}>
        <H2>04 · Integrity checks</H2>
        <Table
          headers={["Check", "Finding", "Status"]}
          rows={[
            [
              "Casing (52.4 + 74.3 ≈ 127 psig)",
              "Below Class 150 typical 175–275 psig",
              <Pill tone="success" key="p1">PASS</Pill>,
            ],
            [
              "Axial thrust @ elevated suction",
              "Standard CNG frame expected adequate",
              <Pill tone="success" key="p2">PASS</Pill>,
            ],
            [
              "Mechanical seal (abrasive WW)",
              "API Plan 32 flush ≥15–20 psi above suction",
              <Pill tone="warning" key="p3">CONDITIONAL</Pill>,
            ],
            [
              "Parallel 3CNG84 + 4CNG84 on one header",
              "110 vs 75 ft → weaker check closes → dead-head",
              <Pill tone="deleted" key="p4">FAIL w/o protection</Pill>,
            ],
          ]}
          rowTone={["success", "success", "warning", "danger"]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H2>05 · Recommended solution</H2>
        <Callout tone="info" title="Primary capital">
          Build the common header with the WW tank abandoned. Protect feeders with min-flow
          recycle upstream of each discharge check valve, plus header-pressure start
          permissives. Prefer an 8&quot; combined header; reduce to 6&quot; only if required at the
          196450 suction flange.
        </Callout>

        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>Do now</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">Min-flow on each feeder (MT leg first if 4CNG84)</Text>
                <Text size="small">Header PT + single-source default interlocks</Text>
                <Text size="small">196450 Plan 32 flush ≥70–75 psig</Text>
                <Text size="small">Verify checks on both feeder discharges</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Optional / later</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">VFDs on higher-head feeders only if dual-feed is routine</Text>
                <Text size="small">Keep min-flow as backup even with VFDs</Text>
                <Text size="small">Confirm 157292 vs 156301 as normal MT pump</Text>
                <Text size="small">Confirm whether dual-feed is required for 19 RB</Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        <H3>Why this works with an abandoned tank</H3>
        <Text>
          Same fluid on all legs (weak wash) removes mixing risk. Casing pressure on 196450
          remains acceptable. The controlling risk is feeder-to-feeder dead-head on the solid
          header — which min-flow + interlocks address without restoring the tank.
        </Text>
      </Stack>

      <Divider />
      <Row gap={8} wrap>
        <Text tone="tertiary" size="small">
          Sources: OEM Worthington curves · P&amp;ID 42303-C · Proposal 2 sketch
        </Text>
        <Text tone="tertiary" size="small">
          Repo docs: proposal2-recommended-solution.md · curve-verification.md
        </Text>
      </Row>
    </Stack>
  );
}
