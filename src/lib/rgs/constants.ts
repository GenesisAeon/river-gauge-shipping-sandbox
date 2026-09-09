/**
 * Real, independently verified constants for river-gauge-shipping-utac (P130).
 * Ported 1:1 from src/river_gauge_shipping_utac/constants.py (package v1.0.0).
 * Deliberately has NO UTAC/CREP/AFET bridge. See DISCLAIMER.md.
 * No continuous gauge->loss formula. No invented Bundesbank figure.
 */

export const PACKAGE_ID = 130;
export const SOURCE_VERSION = "1.0.0";
export const SOURCE_ZENODO_DOI = "10.5281/zenodo.22664740";

export const BEDOYA_MAYA_2024_CITATION =
  "Bedoya-Maya, F., Shobayo, P., Beckers, J., van Hassel, E. (2024). " +
  '"The impact of critical water levels on container inland waterway ' +
  'transport." Transportation Research Part D: Transport and Environment. ' +
  "DOI: 10.1016/j.trd.2024.104190";

export const BEDOYA_MAYA_2024_DOI = "10.1016/j.trd.2024.104190";

/** Average throughput disturbance under critical water level (% per day). */
export const AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL = -0.2;

/** Throughput loss when disruption lasts more than 24 days (%). */
export const THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS = -5.9;

/** Vulnerability to critical conditions has doubled since this year. */
export const VULNERABILITY_DOUBLED_SINCE_YEAR = 2018;

/** Projected annual container throughput loss by 2050 without resilience (%). */
export const PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW = 7;
export const PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH = 20;

export const VINKE_2022_CITATION =
  "Vinke, F.R.S., van Koningsveld, M., van Dorsser, C., Baart, F., " +
  "van Gelder, P., Vellinga, T. (2022). " +
  '"Cascading effects of sustained low water on inland shipping." ' +
  "Climate Risk Management, 35, 100400. DOI: 10.1016/j.crm.2022.100400";

export const VINKE_2022_DOI = "10.1016/j.crm.2022.100400";

export const VINKE_2022_CASCADE_MECHANICS_NOTE =
  "Vinke et al. (2022) provide a systemic cascade / network-effect " +
  "model of sustained low water on inland shipping, with the Rhine " +
  "2018 low-water event as the case study. This is core-tier evidence " +
  "for cascade mechanics, not a single numeric threshold. Do not " +
  "collapse it into one constant.";

export const KAUB_GAUGE_NOTE =
  "Kaub gauge critical water level is documented, cross-confirmed " +
  "operational consensus (ICIS, Chemistry World, freight trade press), " +
  "not single-study-based. Same category as other Rhine 78 cm " +
  "operational references in the ecosystem.";

export const CRITICAL_WATER_LEVEL_CM = 78;

/** Load factor as % of nominal capacity under severe low-water events. */
export const LOAD_FACTOR_PCT_NOMINAL_LOW = 10;
export const LOAD_FACTOR_PCT_NOMINAL_HIGH = 30;

/** Display range for the discrete Kaub gauge (not an interpolation domain). */
export const KAUB_GAUGE_DISPLAY_MIN_CM = 0;
export const KAUB_GAUGE_DISPLAY_MAX_CM = 150;

export const IFW_KIEL_2018_CITATION =
  "IfW Kiel (Institut fuer Weltwirtschaft) (2018). " +
  '"Niedrigwasser am Rhein: auf Jahressicht etwa 0,4 Prozent ' +
  'Wirtschaftsleistung." Direct institute statement; cite kielinstitut.de.';

/** Approximate annual-view GDP loss (%) — IfW Kiel 2018. */
export const GDP_LOSS_PCT_ANNUAL_VIEW = 0.4;

export const INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB = 1.0;
export const INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB = 1.5;
export const DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE = 30;

export const BUNDESBANK_0_2PP_EXCLUSION_NOTE =
  "The Bundesbank 0.2 percentage-point Q3-2018 growth-effect figure " +
  "is intentionally omitted: the August 2018 Monthly Report was " +
  "identified, but the exact wording could not be confirmed on " +
  "bundesbank.de / publikationen.bundesbank.de. Do not invent or " +
  "approximate it.";

export const SCOPE_NOTE =
  "All quantitative relationships in this package are Rhine / " +
  "Western-Europe specific. No general (non-Rhine) water-level to " +
  "capacity model is claimed. See is_relationship_generalizable_beyond_rhine().";

export const CROSS_REF_P99_NOTE =
  "Cross-reference: glacier-buffer-utac (P99) covers hydrology / " +
  "ecology of glacier-fed river buffers. This package (P130) covers " +
  "logistics / economy of low-water shipping impacts. Do not rederive " +
  "P99 here.";
