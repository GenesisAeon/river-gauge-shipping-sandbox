/**
 * Structured evidence entries + honesty APIs for river-gauge-shipping-utac (P130).
 * Ported 1:1 from river-gauge-shipping-utac v1.0.0 constants.py + honesty.py.
 * No UTAC/CREP/AFET framing. No continuous gauge->loss curve.
 */

import {
  AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL,
  BEDOYA_MAYA_2024_CITATION,
  BUNDESBANK_0_2PP_EXCLUSION_NOTE,
  CROSS_REF_P99_NOTE,
  DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE,
  GDP_LOSS_PCT_ANNUAL_VIEW,
  IFW_KIEL_2018_CITATION,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB,
  KAUB_GAUGE_NOTE,
  LOAD_FACTOR_PCT_NOMINAL_HIGH,
  LOAD_FACTOR_PCT_NOMINAL_LOW,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW,
  SCOPE_NOTE,
  THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS,
  VINKE_2022_CASCADE_MECHANICS_NOTE,
  VINKE_2022_CITATION,
  VULNERABILITY_DOUBLED_SINCE_YEAR,
} from "./constants.ts";

/**
 * Evidence stance relative to the package pillars.
 * - throughput: Bedoya-Maya 2024 discrete throughput figures
 * - cascade: Vinke 2022 text note (no single numeric bar)
 * - gdp: IfW Kiel 2018 GDP / industrial production
 */
export type Stance = "throughput" | "cascade" | "gdp";

export type EvidenceEntry = {
  id: "bedoya2024" | "vinke2022" | "ifw2018";
  label: string;
  stance: Stance;
  citation: string;
  /** Vinke is text-note evidence — never render as a numeric bar. */
  display: "numbers" | "text_note";
};

export const ALL_EVIDENCE: readonly EvidenceEntry[] = [
  {
    id: "bedoya2024",
    label: "Bedoya-Maya et al. 2024 (throughput under critical levels)",
    stance: "throughput",
    citation: BEDOYA_MAYA_2024_CITATION,
    display: "numbers",
  },
  {
    id: "vinke2022",
    label: "Vinke et al. 2022 (cascade mechanics — text note)",
    stance: "cascade",
    citation: VINKE_2022_CITATION,
    display: "text_note",
  },
  {
    id: "ifw2018",
    label: "IfW Kiel 2018 (GDP + industrial production)",
    stance: "gdp",
    citation: IFW_KIEL_2018_CITATION,
    display: "numbers",
  },
];

export function throughputEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "throughput");
}

export function cascadeEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "cascade");
}

export function gdpEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "gdp");
}

/** Rhine / WE relationships are not generalisable beyond that geography. */
export function isRelationshipGeneralizableBeyondRhine(): boolean {
  return false;
}

/** Bedoya-Maya 2024: vulnerability doubled since VULNERABILITY_DOUBLED_SINCE_YEAR. */
export function doesVulnerabilityIncreaseOverTime(): boolean {
  void VULNERABILITY_DOUBLED_SINCE_YEAR;
  return true;
}

/** Kaub 78 cm is operational consensus, not a single study. */
export function isKaubThresholdFromSingleStudy(): boolean {
  return false;
}

export function avgThroughputLossPctPerDay(): number {
  return AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL;
}

export function throughputLossPctOver24Days(): number {
  return THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS;
}

export function projected2050LossPctRange(): readonly [number, number] {
  return [
    PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW,
    PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH,
  ];
}

export function loadFactorPctRangeUnderCritical(): readonly [number, number] {
  return [LOAD_FACTOR_PCT_NOMINAL_LOW, LOAD_FACTOR_PCT_NOMINAL_HIGH];
}

export function gdpLossPctAnnualView(): number {
  return GDP_LOSS_PCT_ANNUAL_VIEW;
}

export function industrialProductionLossPctAt30Days(): readonly [number, number] {
  return [
    INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB,
    INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB,
  ];
}

export function daysBelowKaubForIndustrialFigure(): number {
  return DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE;
}

/**
 * Discrete load-factor display only — no interpolation between gauge levels.
 * above threshold -> 100% nominal; below -> documented 10–30% range.
 */
export function loadFactorLabelForThreshold(
  belowCritical: boolean,
): { mode: "full" | "reduced"; pctFull: number | null; pctLow: number; pctHigh: number } {
  if (!belowCritical) {
    return { mode: "full", pctFull: 100, pctLow: 100, pctHigh: 100 };
  }
  return {
    mode: "reduced",
    pctFull: null,
    pctLow: LOAD_FACTOR_PCT_NOMINAL_LOW,
    pctHigh: LOAD_FACTOR_PCT_NOMINAL_HIGH,
  };
}

export {
  VINKE_2022_CASCADE_MECHANICS_NOTE,
  KAUB_GAUGE_NOTE,
  BUNDESBANK_0_2PP_EXCLUSION_NOTE,
  SCOPE_NOTE,
  CROSS_REF_P99_NOTE,
};
