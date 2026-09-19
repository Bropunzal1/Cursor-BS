// cursor-canvas-title: Proposal 2 — Weak Wash Tank Abandoned (IFC)
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
  const fill = theme.fill.tertiary;
  const danger = theme.text.tertiary;

  return (
    <svg viewBox="0 0 920 360" width="100%" style={{ display: "block" }}>
      <text x="16" y="22" fill={muted} fontSize="11" fontFamily="monospace">
        IFC · WW TANK ABANDONED · DREGS XOR MT (NO DUAL-FEED · NO RECIRC)
      </text>

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
        CK + BLOCK
      </text>

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
        CK + BLOCK
      </text>

      <text x="70" y="200" fill={accent} fontSize="11" fontFamily="monospace">
        XOR INTERLOCK — never both open to header
      </text>

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

      <line x1="48" y1="220" x2="680" y2="220" stroke={accent} strokeWidth="5" />
      <text x="280" y="208" fill={accent} fontSize="11" fontFamily="monospace">
        COMMON HEADER · prefer 8&quot; · PT
      </text>
      <text x="280" y="242" fill={muted} fontSize="9" fontFamily="monospace">
        Single source only — no feeder recirculation
      </text>

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
    </svg>
  );
}

export default function Proposal2Canvas() {
  return (
    <Stack gap={24} style={{ padding: 20, maxWidth: 1100 }}>
      <Stack gap={8}>
        <Text tone="secondary" size="small" style={{ fontFamily: "monospace", letterSpacing: 1 }}>
          IFC · LONGVIEW FIBRE · DWG 42303-C
        </Text>
        <H1>Proposal 2 — IFC (Tank Abandoned)</H1>
        <Text tone="secondary">
          Common header to <Code>196450</Code> / 19 RB. WW tank abandoned.{" "}
          <Text as="span" weight="semibold">
            2 Dregs XOR 10/11 MT
          </Text>{" "}
          — never together; no feeder recirculation.
        </Text>
      </Stack>

      <Callout tone="warning" title="IFC governing conditions">
        (1) WW Tank 1963-00 / 1563-00 abandoned. (2) Dregs and MT legs never feed the
        header simultaneously (hard interlock). (3) No min-flow recirculation in scope.
      </Callout>

      <Grid columns={4} gap={12}>
        <Stat value="Abandoned" label="WW tank" tone="warning" />
        <Stat value="XOR only" label="Dregs vs MT feed" tone="info" />
        <Stat value="None" label="Feeder recirculation" tone="success" />
        <Stat value="~129.5 psig" label="Stacked casing" tone="success" />
      </Grid>

      <Divider />

      <Stack gap={10}>
        <H2>01 · Problem / scope</H2>
        <Table
          headers={["Source", "Pump", "Line", "OEM shut-off"]}
          rows={[
            ["From 2 Dregs", "156501 / 156502 · 3CNG84", "6\"", "110 ft"],
            ["From 10/11 MT", "157292 or 156301", "8\"", "70 or 102 ft"],
            ["Booster → 19 RB", "196450 · 6CNG104", "6\" suction", "162 ft (self)"],
          ]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H2>02 · OEM curve check (closer reads)</H2>
        <Table
          headers={["Eq", "Head (ft)", "P (psig)", "Note"]}
          rows={[
            ["196450", "162", "77.14", "Closer read"],
            ["156502 / 156501", "110", "52.38", "Match"],
            ["156301", "102", "48.57", "Closer read"],
            ["157292", "70", "33.33", "Closer read (was ~75)"],
          ]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H2>03 · IFC drawing</H2>
        <Card>
          <CardHeader trailing={<Pill tone="warning">NO RECIRC</Pill>}>
            Exclusive-feed common header
          </CardHeader>
          <CardBody style={{ padding: 12 }}>
            <BypassDrawing />
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={10}>
        <H2>04 · Checks</H2>
        <Table
          headers={["Check", "Status"]}
          rows={[
            ["Casing ~129.5 psig vs Class 150", <Pill tone="success" key="p1">PASS</Pill>],
            ["Plan 32 flush ≥70–75 psig", <Pill tone="warning" key="p2">REQUIRED</Pill>],
            ["Dual-feed dregs + MT", <Pill tone="deleted" key="p3">PROHIBITED</Pill>],
            ["Feeder recirculation", <Pill tone="success" key="p4">NOT REQUIRED</Pill>],
          ]}
          striped
        />
      </Stack>

      <Stack gap={10}>
        <H2>05 · IFC solution</H2>
        <Callout tone="info" title="Construct">
          Common header (prefer 8&quot;), block + check each leg, header PT, hard XOR
          interlock, abandon tank, Plan 32 on 196450. No feeder min-flow lines.
        </Callout>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>In scope</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">Piping / isolation / checks / header PT</Text>
                <Text size="small">DCS XOR interlock (Dregs XOR MT)</Text>
                <Text size="small">Tank abandon / isolate</Text>
                <Text size="small">196450 Plan 32 ≥70–75 psig</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Out of scope</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">Feeder recirculation / min-flow</Text>
                <Text size="small">VFDs for pressure matching</Text>
                <Text size="small">Dual-feed operating mode</Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <H3>Document</H3>
        <Text>
          Full IFC package: <Code>docs/IFC-proposal2-common-header-196450.md</Code>
        </Text>
      </Stack>
    </Stack>
  );
}
