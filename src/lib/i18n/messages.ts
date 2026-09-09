import { formatDe } from "@/lib/utils";
import {
  AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL,
  CRITICAL_WATER_LEVEL_CM,
  DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE,
  GDP_LOSS_PCT_ANNUAL_VIEW,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB,
  LOAD_FACTOR_PCT_NOMINAL_HIGH,
  LOAD_FACTOR_PCT_NOMINAL_LOW,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW,
  SOURCE_ZENODO_DOI,
  THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS,
  VULNERABILITY_DOUBLED_SINCE_YEAR,
} from "@/lib/rgs/constants";
import type { EvidenceEntry, Stance } from "@/lib/rgs/evidence";

export type Locale = "de" | "en";

export type Messages = {
  language: string;
  documentTitle: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  statusLabel: string;
  statusHeading: string;
  statusBody: string;
  gaugeHeading: string;
  gaugeLead: string;
  gaugeAbove: string;
  gaugeBelow: string;
  gaugeToggleAria: string;
  gaugeAria: (cm: number, mark: number) => string;
  gaugeNoInterpolation: string;
  loadFactorLabel: string;
  loadFactorFull: string;
  loadFactorReduced: (low: number, high: number) => string;
  zenodoDoi: string;
  filterHeading: string;
  filterHint: string;
  filterAll: string;
  filterThroughput: string;
  filterCascade: string;
  filterGdp: string;
  filterAria: string;
  hiddenOne: string;
  hiddenMany: (n: number) => string;
  hiddenSuffix: string;
  numbersHeading: string;
  numbersLead: string;
  evidenceHeading: string;
  evidenceLead: string;
  textNoteBadge: string;
  entriesCount: (visible: number, total: number) => string;
  coreClaim: string;
  citation: string;
  doiSource: string;
  close: string;
  drawerFoot: string;
  honestyHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourcesFoot: string;
  disclaimerHeading: string;
  disclaimerLead: string;
  disclaimerBody: string;
  bundesbankHeading: string;
  linkKlimakatalog: string;
  linkAppsHub: string;
  linkGithub: string;
  linkSandboxGithub: string;
  stanceLabel: Record<Stance, string>;
  evidenceTitle: Record<EvidenceEntry["id"], string>;
  evidenceCore: Record<EvidenceEntry["id"], string>;
  headlines: Record<EvidenceEntry["id"], string>;
  keyNumberLabels: Record<string, string>;
  sourceNotes: Record<EvidenceEntry["id"], string>;
};

const evidenceCoreDe = (): Record<EvidenceEntry["id"], string> => ({
  bedoya2024: `Bedoya-Maya et al. 2024: mittlere Durchsatzstörung ${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %/Tag unter kritischem Pegel; ${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} % bei Störung >24 Tage; Vulnerabilität verdoppelt seit ${VULNERABILITY_DOUBLED_SINCE_YEAR}; Projektion 2050 ohne Resilienz: ${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW)}-${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH)} % jährlicher Container-Durchsatzverlust. Nur diskrete dokumentierte Werte — keine Interpolationskurve.`,
  vinke2022: `Vinke et al. 2022: systemisches Kaskaden-/Netzwerkmodell anhaltenden Niedrigwassers (Fallstudie Rhein 2018). Kern-Evidenz für Kaskadenmechanik — kein einzelner Schwellenwert. Als Text-Note zeigen, nicht als Balken.`,
  ifw2018: `IfW Kiel 2018: auf Jahressicht etwa ${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} % Wirtschaftsleistung; methodisch verknüpft mit Industrieproduktionsrückgang ~${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)} % (Peak ${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} %) bei ${DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE} Tagen unter ${CRITICAL_WATER_LEVEL_CM} cm Kaub.`,
});

const evidenceCoreEn = (): Record<EvidenceEntry["id"], string> => ({
  bedoya2024: `Bedoya-Maya et al. 2024: average throughput disturbance ${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %/day under critical water level; ${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} % when disruption lasts over 24 days; vulnerability doubled since ${VULNERABILITY_DOUBLED_SINCE_YEAR}; 2050 projection without resilience: ${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW)}-${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH)} % annual container throughput loss. Discrete documented values only — no interpolation curve.`,
  vinke2022: `Vinke et al. 2022: systemic cascade / network-effect model of sustained low water (Rhine 2018 case). Core-tier evidence for cascade mechanics — not a single numeric threshold. Show as text note, not as a bar.`,
  ifw2018: `IfW Kiel 2018: about ${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} % of economic output on an annual view; methodologically linked to industrial production decline ~${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)} % (peak ${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} %) at ${DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE} days below ${CRITICAL_WATER_LEVEL_CM} cm Kaub.`,
});

const headlines = (): Record<EvidenceEntry["id"], string> => ({
  bedoya2024: `${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %/Tag · ${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} % >24 Tage · 2050 ${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW)}-${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH)} %`,
  vinke2022: `Kaskaden-/Netzwerkmodell · Rhein 2018 · kein Einzelwert`,
  ifw2018: `BIP ${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} %/Jahr · Industrie ${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)}-${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} % @ ${DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE}d <${CRITICAL_WATER_LEVEL_CM} cm`,
});

export const messages: Record<Locale, Messages> = {
  de: {
    language: "Sprache",
    documentTitle: "Rhein-Pegel-Schifffahrt-Sandbox",
    eyebrow: "river-gauge-shipping-sandbox · river-gauge-shipping-utac P130",
    titleLead: "Niedrigwasser am Rhein.",
    titleAccent: " Diskrete Evidenz, keine Kurve.",
    lead: "Kaub-Pegel, Container-Durchsatz und BIP-Notizen aus Bedoya-Maya 2024, Vinke 2022 und IfW Kiel 2018 — nur dokumentierte Einzelwerte, ohne erfundene Interpolationskurve und ohne Bundesbank-Zahl.",
    statusLabel: "Honesty",
    statusHeading: "Rhein/WE-Scope · Vulnerabilität steigt · Kaub ist Konsens",
    statusBody:
      "is_relationship_generalizable_beyond_rhine() = false. does_vulnerability_increase_over_time() = true (seit 2018 verdoppelt). is_kaub_threshold_from_single_study() = false (operativer Konsens). Kein UTAC/CREP/AFET, kein erfundenes Gamma, keine Bundesbank-Zahl.",
    gaugeHeading: "Kaub-Pegel (diskret)",
    gaugeLead: `Nur Umschalten über/unter ${CRITICAL_WATER_LEVEL_CM} cm — Ladefaktor 100 % vs. dokumentierte Spanne ${LOAD_FACTOR_PCT_NOMINAL_LOW}-${LOAD_FACTOR_PCT_NOMINAL_HIGH} %. Kein kontinuierlicher Verlust-%-Slider.`,
    gaugeAbove: `Über ${CRITICAL_WATER_LEVEL_CM} cm`,
    gaugeBelow: `Unter ${CRITICAL_WATER_LEVEL_CM} cm`,
    gaugeToggleAria: "Kaub-Schwellen-Umschalter",
    gaugeAria: (cm, mark) => `Kaub-Anzeige ca. ${cm} cm, Schwelle ${mark} cm`,
    gaugeNoInterpolation: "Keine Interpolation zwischen Pegelständen — nur dokumentierte diskrete Werte.",
    loadFactorLabel: "Ladefaktor",
    loadFactorFull: "100 % (nominal)",
    loadFactorReduced: (low, high) => `${low}-${high} % (dokumentierte Spanne, kein Einzelwert)`,
    zenodoDoi: SOURCE_ZENODO_DOI,
    filterHeading: "Säule",
    filterHint: "Filter ändert die Ansicht, nicht den Befund.",
    filterAll: "alle",
    filterThroughput: "Durchsatz",
    filterCascade: "Kaskade",
    filterGdp: "BIP / Industrie",
    filterAria: "Nach Säule filtern",
    hiddenOne: "1 Eintrag ausgeblendet",
    hiddenMany: (n) => `${n} Einträge ausgeblendet`,
    hiddenSuffix: "– die Honesty bleibt.",
    numbersHeading: "Kennzahlen (1:1 aus P130)",
    numbersLead: "Nur diskrete dokumentierte Werte — keine Zwischenwerte erfunden.",
    evidenceHeading: "Evidenz-Karten",
    evidenceLead:
      "Bedoya-Maya (Zahlen), Vinke (Text-Note, kein Balken), IfW Kiel (BIP/Industrie) getrennt halten.",
    textNoteBadge: "Text-Note",
    entriesCount: (visible, total) => `${visible} / ${total} Einträge`,
    coreClaim: "Kernaussage",
    citation: "Zitat",
    doiSource: "DOI / Quelle",
    close: "Schließen",
    drawerFoot:
      "Drei Säulen, eine Honesty-Linie — Rhein/Westeuropa-Scope, keine Generalisierung.",
    honestyHeading: "Honesty-Checks",
    sourcesHeading: "Quellen",
    sourcesLead:
      "Konstanten 1:1 aus river-gauge-shipping-utac (P130, v1.0.0, Zenodo 10.5281/zenodo.22664740). Die Oberfläche ist übersetzt; Zahlen und Zitationen bleiben in ihren Einheiten.",
    sourcesFoot:
      "Keine UTAC/CREP/AFET-Verknüpfung. Bundesbank-0,2-PP-Zahl bewusst ausgeschlossen. Cross-Ref P99 (gletscher-puffer) nur dokumentarisch. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Reale, zitierbare Wissenschaft zu Niedrigwasser-Schifffahrt am Rhein. Scope: Rhein / Westeuropa. Keine stetige Formel Pegel→Verlust %.",
    disclaimerBody:
      "Keine UTAC-, CREP- oder AFET-Brücke (bewusste Entscheidung der Quelle). Kein erfundenes Gamma. Vinke 2022 bleibt Kaskaden-Note. Zahlen und DOIs stammen 1:1 aus river-gauge-shipping-utac (P130, v1.0.0).",
    bundesbankHeading: "Bundesbank-Ausschluss",
    linkKlimakatalog: "Klimakatalog · river-gauge-shipping-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Quellpaket auf GitHub",
    linkSandboxGithub: "GitHub-Paket (Sandbox)",
    stanceLabel: {
      throughput: "Durchsatz",
      cascade: "Kaskade",
      gdp: "BIP / Industrie",
    },
    evidenceTitle: {
      bedoya2024: "Bedoya-Maya et al. 2024 – Durchsatzverluste",
      vinke2022: "Vinke et al. 2022 – Kaskadenmechanik (Text)",
      ifw2018: "IfW Kiel 2018 – BIP + Industrieproduktion",
    },
    evidenceCore: evidenceCoreDe(),
    headlines: headlines(),
    keyNumberLabels: {
      kaub: "Kaub kritisch",
      load: "Ladefaktor unter Schwelle",
      tp_day: "Durchsatzverlust / Tag",
      tp_24: "Durchsatzverlust >24 Tage",
      vuln: "Vulnerabilität verdoppelt seit",
      proj2050: "Proj. Jahresverlust 2050",
      gdp: "BIP-Verlust Jahressicht",
      ind: "Industrieverlust @ 30d unter",
    },
    sourceNotes: {
      bedoya2024: "-0,2 %/Tag; -5,9 % >24 Tage; 7–20 % Projektion 2050; Vulnerabilität seit 2018 verdoppelt.",
      vinke2022: "Kaskaden-/Netzwerkmodell, Fallstudie Rhein 2018 — kein Einzelwert, keine Balken-Darstellung.",
      ifw2018: "0,4 % BIP Jahressicht; Industrie ~1 % (Peak 1,5 %) bei 30 Tagen unter 78 cm Kaub.",
    },
  },
  en: {
    language: "Language",
    documentTitle: "River Gauge Shipping Sandbox",
    eyebrow: "river-gauge-shipping-sandbox · river-gauge-shipping-utac P130",
    titleLead: "Rhine low water.",
    titleAccent: " Discrete evidence, no curve.",
    lead: "Kaub gauge, container throughput and GDP notes from Bedoya-Maya 2024, Vinke 2022 and IfW Kiel 2018 — documented discrete values only, no invented interpolation curve and no Bundesbank figure.",
    statusLabel: "Honesty",
    statusHeading: "Rhine/WE scope · vulnerability rising · Kaub is consensus",
    statusBody:
      "is_relationship_generalizable_beyond_rhine() = false. does_vulnerability_increase_over_time() = true (doubled since 2018). is_kaub_threshold_from_single_study() = false (operational consensus). No UTAC/CREP/AFET, no invented gamma, no Bundesbank figure.",
    gaugeHeading: "Kaub gauge (discrete)",
    gaugeLead: `Toggle only above/below ${CRITICAL_WATER_LEVEL_CM} cm — load factor 100 % vs documented range ${LOAD_FACTOR_PCT_NOMINAL_LOW}-${LOAD_FACTOR_PCT_NOMINAL_HIGH} %. No continuous loss-% slider.`,
    gaugeAbove: `Above ${CRITICAL_WATER_LEVEL_CM} cm`,
    gaugeBelow: `Below ${CRITICAL_WATER_LEVEL_CM} cm`,
    gaugeToggleAria: "Kaub threshold toggle",
    gaugeAria: (cm, mark) => `Kaub display about ${cm} cm, threshold ${mark} cm`,
    gaugeNoInterpolation: "No interpolation between gauge levels — documented discrete values only.",
    loadFactorLabel: "Load factor",
    loadFactorFull: "100 % (nominal)",
    loadFactorReduced: (low, high) => `${low}-${high} % (documented range, not a single value)`,
    zenodoDoi: SOURCE_ZENODO_DOI,
    filterHeading: "Pillar",
    filterHint: "The filter changes the view, not the finding.",
    filterAll: "all",
    filterThroughput: "Throughput",
    filterCascade: "Cascade",
    filterGdp: "GDP / industry",
    filterAria: "Filter by pillar",
    hiddenOne: "1 entry hidden",
    hiddenMany: (n) => `${n} entries hidden`,
    hiddenSuffix: "– honesty stays.",
    numbersHeading: "Key numbers (1:1 from P130)",
    numbersLead: "Documented discrete values only — no invented intermediates.",
    evidenceHeading: "Evidence cards",
    evidenceLead:
      "Keep Bedoya-Maya (numbers), Vinke (text note, not a bar), and IfW Kiel (GDP/industry) separate.",
    textNoteBadge: "Text note",
    entriesCount: (visible, total) => `${visible} / ${total} entries`,
    coreClaim: "Core claim",
    citation: "Citation",
    doiSource: "DOI / source",
    close: "Close",
    drawerFoot:
      "Three pillars, one honesty line — Rhine/Western-Europe scope, no generalisation.",
    honestyHeading: "Honesty checks",
    sourcesHeading: "Sources",
    sourcesLead:
      "Constants 1:1 from river-gauge-shipping-utac (P130, v1.0.0, Zenodo 10.5281/zenodo.22664740). The chrome is translated; numbers and citations stay in their units.",
    sourcesFoot:
      "No UTAC/CREP/AFET link. Bundesbank 0.2 pp figure deliberately excluded. Cross-ref P99 (gletscher-puffer) docs-only. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Real, citation-checked science on Rhine low-water shipping. Scope: Rhine / Western Europe. No continuous gauge→loss% formula.",
    disclaimerBody:
      "No UTAC, CREP, or AFET bridge (deliberate source choice). No invented gamma. Vinke 2022 stays a cascade note. Numbers and DOIs are 1:1 from river-gauge-shipping-utac (P130, v1.0.0).",
    bundesbankHeading: "Bundesbank exclusion",
    linkKlimakatalog: "Climate catalog · river-gauge-shipping-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Source package on GitHub",
    linkSandboxGithub: "GitHub package (sandbox)",
    stanceLabel: {
      throughput: "Throughput",
      cascade: "Cascade",
      gdp: "GDP / industry",
    },
    evidenceTitle: {
      bedoya2024: "Bedoya-Maya et al. 2024 – throughput losses",
      vinke2022: "Vinke et al. 2022 – cascade mechanics (text)",
      ifw2018: "IfW Kiel 2018 – GDP + industrial production",
    },
    evidenceCore: evidenceCoreEn(),
    headlines: headlines(),
    keyNumberLabels: {
      kaub: "Kaub critical",
      load: "Load factor under critical",
      tp_day: "Throughput loss / day",
      tp_24: "Throughput loss >24 days",
      vuln: "Vulnerability doubled since",
      proj2050: "Projected annual loss 2050",
      gdp: "GDP loss annual view",
      ind: "Industry loss @ 30d below",
    },
    sourceNotes: {
      bedoya2024: "-0.2 %/day; -5.9 % >24 days; 7–20 % projection 2050; vulnerability doubled since 2018.",
      vinke2022: "Cascade / network model, Rhine 2018 case — no single value, no bar chart.",
      ifw2018: "0.4 % GDP annual view; industry ~1 % (peak 1.5 %) at 30 days below 78 cm Kaub.",
    },
  },
};

export function stanceLabel(stance: Stance, t: Messages): string {
  return t.stanceLabel[stance];
}

export function headlineForLocale(entry: EvidenceEntry, t: Messages): string {
  return t.headlines[entry.id];
}

export function keyNumbersForLocale(t: Messages) {
  return [
    {
      id: "kaub",
      label: t.keyNumberLabels.kaub,
      value: `${CRITICAL_WATER_LEVEL_CM} cm`,
    },
    {
      id: "load",
      label: t.keyNumberLabels.load,
      value: `${LOAD_FACTOR_PCT_NOMINAL_LOW}-${LOAD_FACTOR_PCT_NOMINAL_HIGH} %`,
    },
    {
      id: "tp_day",
      label: t.keyNumberLabels.tp_day,
      value: `${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %`,
    },
    {
      id: "tp_24",
      label: t.keyNumberLabels.tp_24,
      value: `${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} %`,
    },
    {
      id: "vuln",
      label: t.keyNumberLabels.vuln,
      value: String(VULNERABILITY_DOUBLED_SINCE_YEAR),
    },
    {
      id: "proj2050",
      label: t.keyNumberLabels.proj2050,
      value: `${PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW}-${PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH} %`,
    },
    {
      id: "gdp",
      label: t.keyNumberLabels.gdp,
      value: `${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} %`,
    },
    {
      id: "ind",
      label: t.keyNumberLabels.ind,
      value: `${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)}-${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} %`,
    },
  ] as const;
}
