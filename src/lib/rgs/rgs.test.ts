import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ALL_EVIDENCE,
  AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL,
  BEDOYA_MAYA_2024_DOI,
  BUNDESBANK_0_2PP_EXCLUSION_NOTE,
  CRITICAL_WATER_LEVEL_CM,
  CROSS_REF_P99_NOTE,
  DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE,
  GDP_LOSS_PCT_ANNUAL_VIEW,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB,
  INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB,
  LOAD_FACTOR_PCT_NOMINAL_HIGH,
  LOAD_FACTOR_PCT_NOMINAL_LOW,
  PACKAGE_ID,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH,
  PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW,
  SCOPE_NOTE,
  SOURCE_VERSION,
  SOURCE_ZENODO_DOI,
  THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS,
  VINKE_2022_CASCADE_MECHANICS_NOTE,
  VINKE_2022_DOI,
  VULNERABILITY_DOUBLED_SINCE_YEAR,
  doesVulnerabilityIncreaseOverTime,
  isKaubThresholdFromSingleStudy,
  isRelationshipGeneralizableBeyondRhine,
  loadFactorLabelForThreshold,
} from "./index.ts";

describe("river-gauge-shipping-sandbox domain (P130)", () => {
  it("ports package id, version, zenodo", () => {
    assert.equal(PACKAGE_ID, 130);
    assert.equal(SOURCE_VERSION, "1.0.0");
    assert.equal(SOURCE_ZENODO_DOI, "10.5281/zenodo.22664740");
  });

  it("keeps Bedoya-Maya discrete throughput figures 1:1", () => {
    assert.equal(AVG_THROUGHPUT_LOSS_PCT_PER_DAY_UNDER_CRITICAL, -0.2);
    assert.equal(THROUGHPUT_LOSS_PCT_WHEN_DISRUPTION_OVER_24_DAYS, -5.9);
    assert.equal(VULNERABILITY_DOUBLED_SINCE_YEAR, 2018);
    assert.equal(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_LOW, 7);
    assert.equal(PROJECTED_ANNUAL_CONTAINER_THROUGHPUT_LOSS_PCT_2050_HIGH, 20);
    assert.equal(BEDOYA_MAYA_2024_DOI, "10.1016/j.trd.2024.104190");
  });

  it("keeps Kaub threshold and load-factor range discrete", () => {
    assert.equal(CRITICAL_WATER_LEVEL_CM, 78);
    assert.equal(LOAD_FACTOR_PCT_NOMINAL_LOW, 10);
    assert.equal(LOAD_FACTOR_PCT_NOMINAL_HIGH, 30);
    assert.deepEqual(loadFactorLabelForThreshold(false), {
      mode: "full",
      pctFull: 100,
      pctLow: 100,
      pctHigh: 100,
    });
    assert.deepEqual(loadFactorLabelForThreshold(true), {
      mode: "reduced",
      pctFull: null,
      pctLow: 10,
      pctHigh: 30,
    });
  });

  it("keeps IfW Kiel figures 1:1", () => {
    assert.equal(GDP_LOSS_PCT_ANNUAL_VIEW, 0.4);
    assert.equal(INDUSTRIAL_PRODUCTION_LOSS_PCT_AT_30_DAYS_BELOW_KAUB, 1.0);
    assert.equal(INDUSTRIAL_PRODUCTION_LOSS_PCT_PEAK_AT_30_DAYS_BELOW_KAUB, 1.5);
    assert.equal(DAYS_BELOW_KAUB_FOR_INDUSTRIAL_PRODUCTION_FIGURE, 30);
  });

  it("keeps Vinke as cascade text note, not a numeric constant", () => {
    assert.ok(VINKE_2022_CASCADE_MECHANICS_NOTE.includes("cascade"));
    assert.equal(VINKE_2022_DOI, "10.1016/j.crm.2022.100400");
    const vinke = ALL_EVIDENCE.find((e) => e.id === "vinke2022");
    assert.ok(vinke);
    assert.equal(vinke!.display, "text_note");
  });

  it("encodes honesty checks exactly", () => {
    assert.equal(isRelationshipGeneralizableBeyondRhine(), false);
    assert.equal(doesVulnerabilityIncreaseOverTime(), true);
    assert.equal(isKaubThresholdFromSingleStudy(), false);
  });

  it("exposes scope, P99 cross-ref, and Bundesbank exclusion notes", () => {
    assert.ok(SCOPE_NOTE.includes("Rhine"));
    assert.ok(CROSS_REF_P99_NOTE.includes("glacier-buffer"));
    assert.ok(BUNDESBANK_0_2PP_EXCLUSION_NOTE.includes("intentionally omitted"));
    assert.ok(!BUNDESBANK_0_2PP_EXCLUSION_NOTE.match(/\b0\.2\s*%/));
  });

  it("has three evidence pillars including cascade text note", () => {
    assert.equal(ALL_EVIDENCE.length, 3);
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "throughput"));
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "cascade"));
    assert.ok(ALL_EVIDENCE.some((e) => e.stance === "gdp"));
  });
});
