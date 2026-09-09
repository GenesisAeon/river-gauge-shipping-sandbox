import {
  AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL,
  BEDOYA_MAYA_2024_DOI,
  CRITICAL_WATER_LEVEL_CM,
  DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE,
  GDP_LOSS_PCT_ANNUAL_VIEW,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB,
  LOAD_FACTOR_PCT_NOMINAL_HIGH,
  LOAD_FACTOR_PCT_NOMINAL_LOW,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW,
  THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS,
  VINKE_2022_DOI,
  VULNERABILITY_DOUBLED_SINCE_YEAR,
} from "./constants.ts";
import type { EvidenceEntry, Stance } from "./evidence.ts";
import { formatDe } from "../utils.ts";

export const STANCE_LABEL_DE: Record<Stance, string> = {
  throughput: "Durchsatz",
  cascade: "Kaskade",
  gdp: "BIP / Industrie",
};

export const EVIDENCE_DOI: Record<EvidenceEntry["id"], string | null> = {
  bedoya2024: BEDOYA_MAYA_2024_DOI,
  vinke2022: VINKE_2022_DOI,
  ifw2018: null,
};

export const EVIDENCE_URL: Record<EvidenceEntry["id"], string | null> = {
  bedoya2024: `https://doi.org/${BEDOYA_MAYA_2024_DOI}`,
  vinke2022: `https://doi.org/${VINKE_2022_DOI}`,
  ifw2018: "https://www.kielinstitut.de",
};

export function stanceLabelDe(stance: Stance): string {
  return STANCE_LABEL_DE[stance];
}

export function headlineFor(entry: EvidenceEntry): string {
  switch (entry.id) {
    case "bedoya2024":
      return `${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %/Tag · ${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} % >24 Tage · 2050 ${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW)}-${formatDe(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH)} %`;
    case "vinke2022":
      return "Cascade / network model · Rhine 2018 case · no single threshold";
    case "ifw2018":
      return `GDP ${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} %/yr · industry ${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)}-${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} % @ ${DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE}d <${CRITICAL_WATER_LEVEL_CM} cm`;
  }
}

export const KEY_NUMBERS = [
  {
    id: "kaub",
    label: "Kaub critical",
    value: `${CRITICAL_WATER_LEVEL_CM} cm`,
  },
  {
    id: "load",
    label: "Load factor under critical",
    value: `${LOAD_FACTOR_PCT_NOMINAL_LOW}-${LOAD_FACTOR_PCT_NOMINAL_HIGH} %`,
  },
  {
    id: "tp_day",
    label: "Throughput loss / day",
    value: `${formatDe(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL)} %`,
  },
  {
    id: "tp_24",
    label: "Throughput loss >24d",
    value: `${formatDe(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS)} %`,
  },
  {
    id: "vuln",
    label: "Vulnerability doubled since",
    value: String(VULNERABILITY_DOUBLED_SINCE_YEAR),
  },
  {
    id: "proj2050",
    label: "Projected annual loss 2050",
    value: `${PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW}-${PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH} %`,
  },
  {
    id: "gdp",
    label: "GDP loss annual view",
    value: `${formatDe(GDP_LOSS_PCT_ANNUAL_VIEW)} %`,
  },
  {
    id: "ind",
    label: "Industry loss @ 30d below",
    value: `${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB)}-${formatDe(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB)} %`,
  },
] as const;
